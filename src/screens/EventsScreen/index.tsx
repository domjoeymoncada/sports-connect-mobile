import React from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BasicView from '~/src/shared/components/BasicView';
import EventCard from './components/EventCard';

import {SAMPLE_EVENTS} from '~/src/shared/sample_data/events';
import colors from '~/src/shared/constants/colors';

const EventsScreen = () => {
  return (
    <BasicView>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 18,
          borderWidth: 0.5,
          borderColor: colors.dimGray,
          borderRadius: 8,
          alignItems: 'center',
          marginHorizontal: 8,
        }}>
        <Icon name="search-outline" size={14} style={{marginHorizontal: 8}} />
        <TextInput
          placeholder="Search for games"
          style={{
            flex: 1,
            paddingLeft: 4,
            paddingVertical: 4,
          }}
        />
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 12}}>
        {/* looping 20 times to see how it looks like */}
        {SAMPLE_EVENTS.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </ScrollView>
    </BasicView>
  );
};

export default EventsScreen;
