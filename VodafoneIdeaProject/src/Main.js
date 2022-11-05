import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {Provider as PaperProvider} from 'react-native-paper';
import MainConatiner from './components/MainContainer/MainConatiner';
const Main = () => {
  return (
    <ScrollView vertical={true} style={{backgroundColor: '#ed2736'}}>
      <Header></Header>
      <MainConatiner></MainConatiner>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({});
