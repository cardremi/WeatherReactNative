import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import moment from 'moment';
import {ms} from 'react-native-size-matters';

export default function WeatherCard({date, icName, metric, weather}) {
  let day = moment.unix(date).format('DD-MM-YYYY');
  return (
    <View style={styles.cover}>
      <Text style={{fontSize: ms(14)}}>{day}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `http://openweathermap.org/img/wn/${icName}.png`,
        }}
      />
      <Text style={{fontSize: ms(14)}}>{weather}</Text>
      <Text style={{fontSize: ms(14)}}>{metric} C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: ms(50),
    height: ms(50),
  },
  
});
