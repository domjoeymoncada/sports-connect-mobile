import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ProfileScreen from './ProfileScreen';
import EventsScreen from './EventsScreen';

const BottomTabNav = createMaterialBottomTabNavigator();

const HomeScreen = () => (
  <BottomTabNav.Navigator>
    <BottomTabNav.Screen name="Events" component={EventsScreen} />
    <BottomTabNav.Screen name="Profile" component={ProfileScreen} />
  </BottomTabNav.Navigator>
);

export default HomeScreen;
