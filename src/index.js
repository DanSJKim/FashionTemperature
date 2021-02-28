import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import Loading from './screens/Loading';
import Main from './screens/Main';
import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAIL,
} from './reducers/actions';

const Stack = createStackNavigator();

const App = () => {
  const { getLocationSuccess } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // 위치 허용 권한
        {
          title: 'App Location Permission',
          message: 'App needs access to your Location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // 위치 가져오기
        Geolocation.getCurrentPosition(
          (position) => {
            dispatch({
              type: GET_CURRENT_LOCATION_SUCCESS,
              data: position.coords,
            });
          },
          (err) => {
            dispatch({
              type: GET_CURRENT_LOCATION_FAIL,
              error: err,
            });
          },
        );
      } else {
        dispatch({
          type: GET_CURRENT_LOCATION_FAIL,
          error: '권한이 허용되지 않았습니다.',
        });
      }
    } catch (err) {
      dispatch({
        type: GET_CURRENT_LOCATION_FAIL,
        error: err,
      });
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  if (!getLocationSuccess) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="메인 화면" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
