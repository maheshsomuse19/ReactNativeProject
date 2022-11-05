import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Icon1 from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon3 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/dist/MaterialIcons';
import Icon5 from 'react-native-vector-icons/dist/Octicons';
import Icon6 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon7 from 'react-native-vector-icons/dist/MaterialIcons';
import Icon8 from 'react-native-vector-icons/dist/FontAwesome';
import Icon9 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon10 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Services = () => {
  return (
    <ScrollView horizontal={true} style={{marginVertical: 20}}>
      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon name="rupee" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Rechare</Text>
          <Text style={styles.textStyle}>for others</Text>
        </View>
      </View>
      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon1 name="customerservice" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Help & </Text>
          <Text style={styles.textStyle}>Support</Text>
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon2 name="crown" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Order New</Text>
          <Text style={styles.textStyle}>VIP Number</Text>
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon4 name="live-tv" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>LIVE TV</Text>
          {/* <Text style={styles.textStyle}>Education</Text> */}
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon3 name="star-shooting-outline" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Jobs &</Text>
          <Text style={styles.textStyle}>Education</Text>
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon5 name="video" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Trending Music</Text>
          <Text style={styles.textStyle}>Videos</Text>
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon6 name="wifi-arrow-down" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>4G data</Text>
          <Text style={styles.textStyle}>packs</Text>
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon7 name="upgrade" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Upgrade to</Text>
          <Text style={styles.textStyle}>postpaid</Text>
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon8 name="music" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Callertunes</Text>
          {/* <Text style={styles.textStyle}>packs</Text> */}
        </View>
      </View>

      <View style={styles.Services}>
        <View style={styles.serviceOption}>
          <Icon10 name="movie-open-play" size={30} color="red" />
        </View>

        <View>
          <Text style={styles.textStyle}>Movies</Text>
          {/* <Text style={styles.textStyle}>postpaid</Text> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  serviceOption: {
    padding: 15,
    borderRadius: 25,

    backgroundColor: '#fffdf9',
  },

  Services: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 30,
  },

  textStyle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#36322e',
    textAlign: 'center',
  },
});
