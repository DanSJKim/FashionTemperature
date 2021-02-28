import React from 'react';
import { SafeAreaView, View, Text, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Main = () => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message: 'App needs access to your Location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            console.log(error);
          },
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  requestLocationPermission();

  return (
    <SafeAreaView>
      <View>
        <Text>메인 화면</Text>
      </View>
    </SafeAreaView>
  );
};

export default Main;
