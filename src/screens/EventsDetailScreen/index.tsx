import React from 'react';
import {Text, View} from 'react-native';
import BasicView from '~/src/shared/components/BasicView';

import Icon from 'react-native-vector-icons/Ionicons';

const EventsDetailScreen = () => {
  return (
    <BasicView>
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 12, fontSize: 30, fontWeight: 'bold'}}>
          {'8-a-side Open play football'}
        </Text>
        <Text style={{marginTop: 8, fontSize: 16}}>
          {'November 24, 2023 · 8:00 PM'}
        </Text>
      </View>
      <View style={{marginTop: 16, flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="location-outline" size={16} />
        <Text style={{fontSize: 16, marginLeft: 4}}>
          {'Dynamic Herb Sports Complex, Talisay Cebu, Philippines'}
        </Text>
      </View>
      <View style={{marginTop: 12, flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="ios-people-outline" size={16} />
        <Text style={{fontSize: 16, marginLeft: 4}}>
          {'15 confirmed going'}
        </Text>
      </View>
      <Text style={{marginTop: 12, fontSize: 24, fontWeight: 'bold'}}>
        {'About'}
      </Text>
      <Text style={{marginTop: 12, fontSize: 16}}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis nulla est. Aenean mollis quam vestibulum, sagittis ipsum ac, mollis leo. Quisque id tortor scelerisque urna finibus fermentum. In congue mattis facilisis. Integer et quam ac nunc lobortis ornare. Etiam convallis eu est maximus iaculis. Curabitur a iaculis ipsum. Fusce ultricies mauris eu gravida rhoncus. Nunc iaculis justo id fringilla tristique. Fusce elementum luctus purus, a hendrerit urna luctus nec.'
        }
      </Text>
    </BasicView>
  );
};

export default EventsDetailScreen;
