import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BasicButton from '~/src/shared/components/BasicButton';
import BasicInput from '~/src/shared/components/BasicInput';

import colors from '~/src/shared/constants/colors';
import routes from '~/src/shared/constants/routes';

type WelcomeScreenProps = {
  navigation: NavigationProp<any, any>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => (
  <KeyboardAvoidingView
    keyboardVerticalOffset={50}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex: 1, paddingVertical: 24}}
    enabled>
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 30,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 40, color: colors.black}}>
        SportsConnect
      </Text>
      <Text style={{fontSize: 24, marginTop: 14}}>
        Unite, Play, and Thrive together!
      </Text>
      <View style={{marginTop: 80, width: '90%'}}>
        <BasicInput label="Username" />
        <BasicInput
          label="Password"
          containerStyle={{
            marginTop: 24,
          }}
          secureTextEntry={true}
        />
        <BasicButton
          title="Login"
          containerStyle={{marginTop: 36}}
          onPress={() => navigation.navigate(routes.profile)}
        />
        <TouchableOpacity style={{alignItems: 'center', marginTop: 24}}>
          <Text style={{alignContent: 'center'}}>
            No account yet? Sign up now!{' '}
            <Icon name="arrow-forward-circle-outline" size={14} />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
);

export default WelcomeScreen;
