import React from 'react';
import {Text, View} from 'react-native';
import BasicView from '~/src/shared/components/BasicView';
import colors from '~/src/shared/constants/colors';

const WelcomeScreen = () => (
  <BasicView>
    <View
      style={{alignItems: 'center', flexDirection: 'column', marginTop: 30}}>
      <Text style={{fontWeight: 'bold', fontSize: 40, color: colors.black}}>
        SportsConnect
      </Text>
      <Text style={{fontSize: 24, marginTop: 14}}>
        Unite, Play, and Thrive together!
      </Text>
    </View>
  </BasicView>
);

export default WelcomeScreen;
