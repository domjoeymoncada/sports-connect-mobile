import React from 'react';
import {View} from 'react-native';

type BasicViewProps = {
  children: React.ReactNode;
};

const BasicView = ({children}: BasicViewProps) => (
  <View style={{flex: 1, paddingHorizontal: 4, paddingVertical: 16}}>
    {children}
  </View>
);

export default BasicView;
