import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ms} from 'react-native-size-matters';
import {connect} from 'react-redux';
import Button from '../Components/Button';
import {ActionCity} from '../Components/Action';

function Main(props) {
  const [city, setCity] = useState('');
  const cityLoc = text => {
    setCity(text);
  };
  const changeCity = () => {
    props.ActionCity(city);
  };

  return (
    <View style={styles.cover}>
      <View style={styles.body}>
        <Text style={styles.text1}>Weather Forecast</Text>
        <View style={styles.inputPosition}>
          <TextInput
            style={styles.input}
            placeholder="Enter City Name"
            placeholderTextColor="#000000"
            onChangeText={text => cityLoc(text)}
          />
        </View>
        <Button name="Confirm" onTap={changeCity} />
      </View>
    </View>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  ActionCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#ffde03',
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    width: '100%',
    height: '100%',
  },
  input: {
    borderRadius: 10,
    borderWidth: ms(2),
    borderColor: 'black',
    fontWeight: '700',
    padding: ms(20),
    fontSize: ms(20),
    width: ms(320),
    height: ms(60),
  },
  text1: {
    paddingBottom: ms(10),
    fontSize: ms(24),
    fontWeight: '700',
    color: '#000000',
    alignSelf: 'flex-start',
  },
  inputPosition: {
    paddingVertical: ms(20),
  },
  body: {
    alignItems: 'center',
  },
});
