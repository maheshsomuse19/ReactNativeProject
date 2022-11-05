import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const NewsChannel = () => {
  return (
    <View style={{marginVertical: 30}}>
      <View style={styles.iconContainer}>
        <Text style={styles.textStyle}>trending music</Text>
        <Icon name="rightcircleo" size={23} color="blue" />
      </View>
      <ScrollView horizontal={true}>
        <View
          style={{display: 'flex', alignItems: 'center', marginVertical: 10}}>
          <View style={styles.channel}>
            <Image
              source={{
                uri: 'https://static1.vodafoneplay.in/89080/250x375_ABPMajha_89080_8a07e1a0-ae5f-4881-8548-f1b3f1ab0ea9.jpg',
              }}
              style={{width: 130, height: 130, borderRadius: 70}}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              LIVE
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{display: 'flex', alignItems: 'center', marginVertical: 10}}>
          <View style={styles.channel}>
            <Image
              source={{
                uri: 'https://www.livelaw.in/h-upload/images/aajtakpng',
              }}
              style={{width: 130, height: 130, borderRadius: 70}}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              LIVE
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{display: 'flex', alignItems: 'center', marginVertical: 10}}>
          <View style={styles.channel}>
            <Image
              source={{
                uri: 'https://mediabrief.com/wp-content/uploads/2019/12/image-News18-India-announces-the-fifth-edition-of-its-flagship-property-%E2%80%98Chaupal%E2%80%99-Mediabrief.png',
              }}
              style={{width: 130, height: 130, borderRadius: 70}}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              LIVE
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{display: 'flex', alignItems: 'center', marginVertical: 10}}>
          <View style={styles.channel}>
            <Image
              source={{
                uri: 'https://static.vidgyor.com/live/midroll/assets/tv9marathi.png',
              }}
              style={{width: 130, height: 130, borderRadius: 70}}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              LIVE
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{display: 'flex', alignItems: 'center', marginVertical: 10}}>
          <View style={styles.channel}>
            <Image
              source={{
                uri: 'https://i.ytimg.com/vi/SEBP90ojoLM/hqdefault_live.jpg',
              }}
              style={{width: 130, height: 130, borderRadius: 70}}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              LIVE
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{display: 'flex', alignItems: 'center', marginVertical: 10}}>
          <View style={styles.channel}>
            <Image
              source={{
                uri: 'data:image/png;base64,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',
              }}
              style={{width: 130, height: 130, borderRadius: 70}}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              LIVE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsChannel;

const styles = StyleSheet.create({
  // textStyle: {
  //   marginLeft: 20,
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: 'black',
  // },
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
  channel: {
    marginTop: 20,
    marginLeft: 40,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 70,
  },
  button: {
    // marginTop: 10,
    width: 60,
    position: 'absolute',
    backgroundColor: 'red',
    // marginLeft: 33,
    top: 140,
    left: 85,

    // paddingHorizontal: 10,

    paddingVertical: 7,

    borderRadius: 8,
  },
});
