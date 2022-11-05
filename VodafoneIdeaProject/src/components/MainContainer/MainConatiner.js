import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Cards from './Cards/Cards';
import Services from './Services/Services';
import Advertisement from './Advertisement/Advertisement';
import Movies from './Movies/Movies';
import NewsChannel from './NewChannel/NewsChannel';
import Footer from './Footer/Footer';
import Offers from './Offers/Offers';
import Music from './Music/Music';
const MainConatiner = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <Text>MainConatiner</Text> */}
      <Cards></Cards>
      <Services></Services>

      <Advertisement></Advertisement>
      <Offers></Offers>
      <Movies></Movies>
      <NewsChannel></NewsChannel>
      <Music></Music>
      <Footer></Footer>
    </View>
  );
};

export default MainConatiner;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#feefe8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // backgroundColor: '#FFF6BF',
  },
});
