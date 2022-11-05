import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import BarsaatSong from '../../../../assets/barsat.webp';
import DilSong from '../../../../assets/Dilsong.jpg';
import LigerSong from '../../../../assets/LigerSong.jpeg';
import BanjaraSong from '../../../../assets/BanjaraSong.jpg';
import KesariyaSong from '../../../../assets/Kesariyaimg.jpg';

const Music = () => {
  return (
    <View style={{marginVertical: 20}}>
      <View style={styles.iconContainer}>
        <Text style={styles.textStyle}>trending music</Text>
        <Icon name="rightcircleo" size={23} color="blue" />
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.music}>
          <Image
            source={KesariyaSong}
            style={{width: 190, height: 190, borderRadius: 12, marginRight: 20}}
          />

          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Kesariya song{' '}
          </Text>
        </View>

        <View style={styles.music}>
          <Image
            source={DilSong}
            style={{width: 190, height: 190, borderRadius: 12, marginRight: 20}}
          />

          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Dil song in ek villen
          </Text>
        </View>

        <View style={styles.music}>
          <Image
            source={LigerSong}
            style={{width: 190, height: 190, borderRadius: 12, marginRight: 20}}
          />

          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Coka 20 song liger
          </Text>
        </View>

        <View style={styles.music}>
          <Image
            source={BanjaraSong}
            style={{width: 190, height: 190, borderRadius: 12, marginRight: 20}}
          />

          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Banjara song ek villen{' '}
          </Text>
        </View>

        <View style={styles.music}>
          <Image
            source={BarsaatSong}
            style={{width: 190, height: 190, borderRadius: 12, marginRight: 20}}
          />
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Halki si Barsaat
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  iconTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  music: {
    marginLeft: 20,
    marginVertical: 20,
  },
});
