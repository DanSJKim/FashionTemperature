import { Provider } from 'react-redux';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './screens/Loading';
import Main from './screens/Main';
import store from './store/store';

const Stack = createStackNavigator();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="메인 화면"
                        component={Main}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
