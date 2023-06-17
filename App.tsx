import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import routes from './src/shared/constants/routes';

const App = () => {

  const StackNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName={routes.login}>
        <StackNavigator.Screen name={routes.login} component={LoginScreen} />
        <StackNavigator.Screen name={routes.profile} component={ProfileScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;