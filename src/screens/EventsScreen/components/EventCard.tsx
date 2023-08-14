import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BasicButton from '~/src/shared/components/BasicButton';
import colors from '~/src/shared/constants/colors';

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
  <View style={{marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
    <Icon name={icon} size={16} />
    <Text style={{fontSize: 16, marginLeft: 4}}>{value}</Text>
  </View>
);

const EventCard = ({event}: EventCardProps) => {
  const {title, organizer, date, location, numParticipants, maxParticipants} =
    event;

  return (
    <View
      style={{
        borderRadius: 5,
        padding: 12,
        marginBottom: 14,
        backgroundColor: colors.white,
        shadowOffset: {
          width: 0,
          height: 30,
        },
        shadowColor: colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
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

      <BasicButton
        containerStyle={{marginTop: 24}}
        title="View full details"
        onPress={() => console.log('open event details page')}
      />
    </View>
  );
};

export default EventCard;
