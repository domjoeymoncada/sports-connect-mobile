import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '~/src/shared/constants/colors';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomBottomTabBar = ({descriptors, state, navigation}: BottomTabBarProps) => {
  const descriptorKeys = Object.keys(descriptors);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      {descriptorKeys?.map((key, index) => {
        const descriptor = descriptors[key];
        const isFocused = state.index === index;
        const {defaultIcon, focusedIcon} = descriptor?.options as {
          defaultIcon: string;
          focusedIcon: string;
        };

        return (
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 12,
              borderTopWidth: 5,
              borderTopColor: isFocused ? colors.pitchGreen : 'transparent',
            }}
            onPress={() => navigation.navigate(descriptor.route.name)}>
            <Icon
              size={24}
              name={isFocused ? focusedIcon : defaultIcon}
              color={isFocused ? colors.pitchGreen : colors.black}
            />
            <Text style={{color: isFocused ? colors.pitchGreen : colors.black}}>
              {descriptor.route?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;
