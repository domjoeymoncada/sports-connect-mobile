import React from 'react';
import {View, Text} from 'react-native';
import colors from '~/src/shared/constants/colors';

const Highlights = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, color: colors.black, fontWeight: 'bold'}}>
      {value}
    </Text>
    <Text style={{fontSize: 12, color: colors.black}}>{label}</Text>
  </View>
);

export default Highlights;
