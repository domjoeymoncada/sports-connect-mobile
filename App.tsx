import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import routes from './src/shared/constants/routes';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  const StackNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName={routes.welcome}>
        <StackNavigator.Screen
          name={routes.profile}
          component={WelcomeScreen}
        />
        <StackNavigator.Screen
          name={routes.profile}
          component={ProfileScreen}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
