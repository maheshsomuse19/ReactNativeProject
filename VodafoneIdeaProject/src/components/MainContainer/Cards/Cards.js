import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import image from '../../../../assets/Screenshot from 2022-09-28 16-25-48.png';
const Cards = () => {
  // const image='../../../../assets/'
  return (
    <ScrollView horizontal={true} style={styles.cardContainer}>
      <View style={styles.firstCard}>
        <View style={styles.dataPack}>
          <View>
            <View style={styles.data}>
              <Text style={styles.textStyle}>3.5</Text>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                GB
              </Text>
            </View>
            <Text style={{fontSize: 15}}>Data Left</Text>
          </View>
          <View style={{marginTop: 2}}>
            <Text style={{fontSize: 30}}>
              <Icon name="rupee" size={30} color="black" /> 399.0
            </Text>
            <Text style={{fontSize: 15, color: '#ee2737'}}>Main Balance</Text>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.incoming}>
            Incoming and outgoing services bar
          </Text>
          <Text style={styles.date}>19 Sep,2022</Text>
          <Text style={styles.expired}>Service validity expired</Text>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              recharge now
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 20}}>
            <Image
              // source={image}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qgzuHGo0qVcZIDUOn39Ze8Os6v3UgQnFdQ&usqp=CAU',
              }}
              style={{height: 90, borderRadius: 12}}
            />
          </View>
        </View>
      </View>

      {/* <View style={styles.secondCard}>
        <Image
          source={{
            uri: 'https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/Prepaid/Hero_UL_Mobile.png',
          }}
          style={styles.image}></Image>
      </View> */}

      <View style={styles.thirdCard}>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/Rd_rRi_REHw/hq720_2.jpg?sqp=-oaymwEYCNAFENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLBEBMKriJx8kscJEssyqSsOIDaf-w',
          }}
          style={{height: 370, borderRadius: 12}}
        />
      </View>

      <View style={styles.thirdCard}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhWFPsfOk3BOkOxHSmqSHGp0Smw-eVjJ6BTRM1UtjyVV1R97sXuQC6Kb7JzT1VauJKOk&usqp=CAU',
          }}
          style={{height: 370, borderRadius: 12}}
        />
      </View>

      {/* <View></View> */}
    </ScrollView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  firstCard: {
    width: 330,
    height: 370,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
  },
  dataPack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 25,
  },
  textStyle: {
    fontSize: 30,
    color: 'black',
  },
  secondContainer: {
    marginTop: 25,
  },
  incoming: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#999999',
  },
  date: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: '900',
    color: '#ee2737',
  },
  expired: {
    fontSize: 15,
    color: '#ee2737',
    fontWeight: '400',
  },
  rechargeButton: {
    backgroundColor: '#ed2736',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    width: 200,
    backgroundColor: '#ed2736',

    paddingHorizontal: 30,

    paddingVertical: 10,

    borderRadius: 50,
  },

  thirdCard: {
    marginRight: 10,
    // marginHorizontal: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 7,
    height: 370,
    width: 350,
    borderRadius: 12,
    padding: 5,
    backgroundColor: '#feefe8',
  },
});
