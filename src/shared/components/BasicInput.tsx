import React from 'react';
import {View, Text, TextInput, TextInputProps, ViewStyle, TextStyle} from 'react-native';
import colors from '~/src/shared/constants/colors';

type BasicInputProps = TextInputProps & {
  label: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
};

const BasicInput = ({
  label,
  containerStyle,
  labelStyle,
  inputStyle,
  ...props
}: BasicInputProps) => (
  <View style={{...containerStyle, flexDirection: 'column'}}>
    <Text style={{...labelStyle}}>{label}</Text>
    <TextInput
      {...props}
      style={{
        ...inputStyle,
        borderBottomWidth: 1,
        borderBottomColor: colors.silver,
      }}
    />
  </View>
);

export default BasicInput;
