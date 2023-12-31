import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '~/src/shared/constants/colors';
import routes from '~/src/shared/constants/routes';

// Updated once API will be done
type EventCardProps = {
  event: {
    title: string;
    organizer: string;
    date: string;
    location: string;
    numParticipants: number;
    maxParticipants: number;
  };
};

const EventCardDetail = ({icon, value}: {icon: string; value: string}) => (
  <View style={{marginTop: 2, flexDirection: 'row', alignItems: 'center'}}>
    <Icon name={icon} size={16} />
    <Text style={{fontSize: 16, marginLeft: 4}}>{value}</Text>
  </View>
);

const EventCard = ({event}: EventCardProps) => {
  const {title, organizer, date, location, numParticipants, maxParticipants} =
    event;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(routes.eventDetails)}>
      <View
        style={{
          borderRadius: 5,
          paddingHorizontal: 4,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
        <EventCardDetail icon="ios-person-outline" value={organizer} />
        <EventCardDetail icon="calendar-outline" value={date} />
        <EventCardDetail icon="location-outline" value={location} />
        <EventCardDetail
          icon="ios-people-outline"
          value={`${numParticipants} ${
            maxParticipants > 0 ? `/ ${maxParticipants}` : ''
          }`}
        />
      </View>
      <View
        style={{
          marginVertical: 16,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.dimGray,
        }}
      />
    </TouchableOpacity>
  );
};

export default EventCard;
