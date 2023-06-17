import React from 'react';
import { Button, View } from 'react-native';
import routes from '@/src/shared/constants/routes';

const LoginScreen = ({navigation}) => (
    <View>
        <Button title='Take me to my profile' onPress={() => navigation.navigate(routes.profile)} />
    </View>
);

export default LoginScreen;