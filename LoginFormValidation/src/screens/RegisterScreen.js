import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native-paper';
const RegisterScreen = ({navigation}) => {
  return (
    <View style={{display: 'flex', justifyContent: 'center', top: 100}}>
      <View>
        <Text
          style={{
            color: 'black',

            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 25,
            fontSize: 30,
          }}>
          Register
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Enter Email"
          style={{marginHorizontal: 25, marginTop: 20}}></TextInput>

        <TextInput
          placeholder="Enter password"
          style={{marginHorizontal: 25, marginTop: 20}}></TextInput>

        <TextInput
          placeholder="Enter date of birth"
          style={{marginHorizontal: 25, marginTop: 20}}></TextInput>
      </View>

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
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
