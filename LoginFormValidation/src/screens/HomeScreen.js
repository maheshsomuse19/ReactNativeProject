import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);

  const onLogout = () => {
    navigation.navigate('Login');
    logout();
  };

  return (
    <View
      style={{
        // backgroundColor: '#277BC0',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30,color:'#277BC0'}}>Welcome To My App</Text>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            marginHorizontal: 25,
            marginTop: 20,
            padding: 10,
            width: 130,
          }}
          onPress={onLogout}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
