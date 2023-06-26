import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import colors from '~/src/shared/constants/colors';

type BasicButtonProps = {
  title: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const BasicButton = ({title, containerStyle, textStyle}: BasicButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...containerStyle,
        backgroundColor: colors.pitchGreen,
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
      }}>
      <Text style={{...textStyle, color: colors.white}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BasicButton;
