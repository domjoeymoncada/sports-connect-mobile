import React from 'react';
import ProfileScreen from './ProfileScreen';
import EventsScreen from './EventsScreen';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomBottomTabBar from '../shared/components/CustomBottomTabBar';
import {TouchableOpacity} from 'react-native';

const BottomTabNav = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <BottomTabNav.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      tabBar={props => <CustomBottomTabBar {...props} />}>
      <BottomTabNav.Screen
        name="Events"
        component={EventsScreen}
        options={
          {
            defaultIcon: 'megaphone-outline',
            focusedIcon: 'megaphone',
            headerRight: () => (
              <TouchableOpacity style={{marginRight: 12}}>
                <Icon name="funnel-outline" size={24} />
              </TouchableOpacity>
            ),
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
