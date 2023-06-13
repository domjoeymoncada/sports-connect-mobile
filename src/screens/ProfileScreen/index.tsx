import React from 'react';
import { View, Button } from 'react-native';
import routes from '../../../routes';

const ProfileScreen = ({navigation}) => (
    <View>
        <Button title="Click me to go back to login screen" onPress={() => navigation.navigate(routes.login)} />
    </View>
);

export default ProfileScreen;