import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
// import {Button} from 'react-native-paper';
import HeaderServices from './HeaderServices';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* <Text>Header</Text> */}
      <View style={styles.userNameContainer}>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 15, letterSpacing: 1,fontWeight:'600'}}>
            Mahesh <Icon name="down" size={16} color="white" />
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: 1,
            }}>
            9545060215
          </Text>
        </View>
        <View
          style={{
            marginRight: 5,
            backgroundColor: '#e91e45',
            padding: 5,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            backgroundColor: '#354259',
          }}>
          <Text style={styles.textStyle}>win a</Text>
          <Text style={styles.textStyle}>smartwatch!</Text>
        </View>
      </View>

      <View>
        <HeaderServices></HeaderServices>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor: '#ed2736',
    // backgroundColor:linear-gradient( 135deg,rgba(255, 105, 0, 1) 0%,rgb(207, 46, 46) 100%)
  },
  userNameContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fbfefe',
    fontWeight: '700',
    letterSpacing: 1,
  },
});
