import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import colors from '~/src/shared/constants/colors';

type BasicButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const BasicButton = ({
  title,
  containerStyle,
  disabled = false,
  onPress,
  textStyle,
}: BasicButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
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
