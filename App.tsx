import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import routes from './src/shared/constants/routes';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens';
import EventsDetailScreen from './src/screens/EventsDetailScreen';

const App = () => {
  const StackNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={routes.welcome}
        screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name={routes.home} component={HomeScreen} />
        <StackNavigator.Screen
          name={routes.welcome}
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <StackNavigator.Screen
          name={routes.profile}
          component={ProfileScreen}
        />
        <StackNavigator.Screen
          name={routes.eventDetails}
          component={EventsDetailScreen}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
