import React from 'react';
import {ScrollView} from 'react-native';

import BasicView from '~/src/shared/components/BasicView';
import EventCard from './components/EventCard';

import {SAMPLE_EVENTS} from '~/src/shared/sample_data/events';

const EventsScreen = () => {
  return (
    <BasicView>
      <ScrollView>
        {/* looping 20 times to see how it looks like */}
        {SAMPLE_EVENTS.map(event => (
          <EventCard event={event}/>
        ))}
      </ScrollView>
    </BasicView>
  );
};

export default EventsScreen;
