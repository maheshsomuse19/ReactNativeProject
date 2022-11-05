import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useContext} from 'react';
const OnBoardingScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            marginHorizontal: 25,
            marginTop: 20,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            marginHorizontal: 25,
            marginTop: 20,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
