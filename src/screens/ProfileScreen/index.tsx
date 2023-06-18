import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import BasicView from '~/src/shared/components/BasicView';
import {NavigationProp} from '@react-navigation/native';
import colors from '~/src/shared/constants/colors';
import Highlights from './components/Highlights';
import ProfileActionButton from './components/ProfileActionButton';

type ProfileScreenProps = {
  navigation: NavigationProp<any, any>;
};

const ProfileScreen = ({navigation}: ProfileScreenProps) => (
  <BasicView>
    <View style={{alignItems: 'center', flexDirection: 'column'}}>
      <Avatar
        rounded
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          color: colors.black,
          marginTop: 12,
        }}>
        doms1234
      </Text>
      <Text style={{fontSize: 18, color: colors.dimGray, marginTop: 8}}>
        Dominic Moncada
      </Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 24,
        }}>
        <Highlights label="POSITION" value="ST" />
        <Highlights label="NUMBER" value={2} />
        <Highlights label="AGE" value={25} />
      </View>
    </View>
    <View
      style={{
        width: '100%',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <ProfileActionButton iconName="ios-chatbubble-outline" label="Message" />
      <ProfileActionButton
        iconName="person-add-outline"
        label="Invite to club"
      />
      <ProfileActionButton iconName="paper-plane-outline" label="Share" />
      <ProfileActionButton iconName="cog-outline" label="Settings" />
    </View>
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 40,
        color: colors.black,
      }}>
      TEAMS AFFILIATED
    </Text>
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Text style={{color: colors.dimGray, fontSize: 16}}>None</Text>
    </View>
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 40,
        color: colors.black,
      }}>
      EVENTS JOINED
    </Text>
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Text style={{color: colors.dimGray, fontSize: 16}}>None</Text>
    </View>
  </BasicView>
);

export default ProfileScreen;
