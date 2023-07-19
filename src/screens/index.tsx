import React from 'react';
import ProfileScreen from './ProfileScreen';
import EventsScreen from './EventsScreen';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import CustomBottomTabBar from '../shared/components/CustomBottomTabBar';

const BottomTabNav = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <BottomTabNav.Navigator tabBar={props => <CustomBottomTabBar {...props} />}>
      <BottomTabNav.Screen
        name="Events"
        component={EventsScreen}
        options={
          {
            defaultIcon: 'megaphone-outline',
            focusedIcon: 'megaphone',
          } as BottomTabNavigationOptions
        }
      />
      <BottomTabNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={
          {
            defaultIcon: 'md-person-outline',
            focusedIcon: 'md-person',
          } as BottomTabNavigationOptions
        }
      />
    </BottomTabNav.Navigator>
  );
};

export default HomeScreen;
