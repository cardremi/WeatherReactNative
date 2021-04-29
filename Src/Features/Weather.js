import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ms} from 'react-native-size-matters';
import {connect} from 'react-redux';
import WeatherCard from '../Components/WeatherCard';
import Spinner from 'react-native-loading-spinner-overlay';

function Weather(props) {
  // const weatherArrays = props.ListData.map(x => x.weather.map(y => y.description))
  renderItem = ({item}) => {
    return (
      <WeatherCard
        date={item.dt}
        icName={item.weather[0].icon}
        metric={item.main.temp}
        weather={item.weather[0].description}
      />
    );
  };
  console.log('okwdoko', props.ListData[0].weather[0].icon);

  return (
    <View style={styles.cover}>
      <FlatList
        data={props.ListData}
        keyExtractor={item => item.dt}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <Spinner
            visible={props.isLoading}
            textContent={"Loading"}
            textStyle={{ color: "white" }}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#ffde03',
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    width: '100%',
    height: '100%',
  },
});
const mapStateToProps = state => ({
  ListData: state.dataReducer.ListData,
  isLoading: state.dataReducer.isLoading,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
