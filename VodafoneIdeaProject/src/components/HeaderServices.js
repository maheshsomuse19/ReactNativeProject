import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';
import Icon1 from 'react-native-vector-icons/dist/Octicons';
import Icon2 from 'react-native-vector-icons/dist/MaterialIcons';
import Icon3 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/dist/SimpleLineIcons';

const HeaderServices = () => {
  return (
    <ScrollView horizontal={true} style={styles.servicesHeader}>
      <View style={styles.home}>
        <Image
          source={{
            uri: 'https://play-lh.googleusercontent.com/eKCOzBC2g9En7mu91a9Iye7TE6rVcZhJcEYKFNlIzMfONEYEHr2zXWjotBKZ_FuGEQaO',
          }}
          style={{width: 40, height: 30}}
        />
        <Text style={styles.textStyle}>home</Text>
      </View>

      <View style={styles.home}>
        {/* <Image
          source={{
            uri: 'https://www.passionateinmarketing.com/wp-content/up',
          }}
          style={{width: 40, height: 40}}
        /> */}
        <Icon name="headphones" size={30} color="white" />
        <Text style={styles.textStyle}>music</Text>
      </View>
      <View style={styles.home}>
        {/* <Image
          source={{
            uri: 'https://www.passionateinmarketing.com/wp-content/up',
          }}
          style={{width: 40, height: 40}}
        /> */}
        <Icon1 name="video" size={30} color="white" />
        <Text style={styles.textStyle}>movies</Text>
      </View>

      <View style={styles.home}>
        <Icon2 name="games" size={30} color="white" />
        <Text style={styles.textStyle}>games</Text>
      </View>

      <View style={styles.home}>
        <Icon3 name="star-shooting-outline" size={30} color="white" />
        <Text style={styles.textStyle}>jobs</Text>
      </View>

      <View style={styles.home}>
        <Icon5 name="music-tone" size={30} color="white" />
        <Text style={styles.textStyle}>callertunes</Text>
      </View>
    </ScrollView>
  );
};

export default HeaderServices;

const styles = StyleSheet.create({
  textStyle: {
    color: '#fbfefe',
    // textAlign: 'center',
    fontSize: 15,
    fontWeight: '800',
  },
  home: {
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  servicesHeader: {
    marginVertical: 25,
  },
});
