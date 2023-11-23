import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EventCardDetail = ({icon, value}: {icon: string; value: string}) => (
  <View style={{marginTop: 2, flexDirection: 'row', alignItems: 'center'}}>
    <Icon name={icon} size={16} />
    <Text style={{fontSize: 16, marginLeft: 4}}>{value}</Text>
  </View>
);

export default EventCardDetail;
