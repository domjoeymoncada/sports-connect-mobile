import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type ProfileActionButtonProps = {
  iconName: string;
  label: string;
};

const ProfileActionButton = ({iconName, label}: ProfileActionButtonProps) => (
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
    <Icon name={iconName} size={30} />
    <Text>{label}</Text>
  </View>
);

export default ProfileActionButton;
