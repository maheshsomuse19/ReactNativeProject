import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Offers = () => {
  return (
    <ScrollView horizontal={true} style={{marginTop: 15}}>
      <View
        style={{backgroundColor: '#ffffff', alignItems: 'center', margin: 15}}>
        <Image
          source={{
            uri: 'https://securecdn.pymnts.com/wp-content/uploads/2020/09/PayTM.jpg',
          }}
          style={{
            width: 180,
            height: 80,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            resizeMode: 'cover',
          }}
        />

        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          flat $15 cashback
        </Text>

        <Text style={{fontSize: 18, color: 'black'}}>for repeat users</Text>
      </View>

      <View
        style={{alignItems: 'center', margin: 15, backgroundColor: '#ffffff'}}>
        <Image
          source={{
            uri: 'https://i0.wp.com/trickunlimited.com/wp-content/uploads/2021/11/CRED-Vi-Recharge-Offer.jpeg?resize=300%2C257&ssl=1',
          }}
          style={{
            width: 180,
            height: 100,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            resizeMode: 'cover',
          }}
        />

        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          40% cashback
        </Text>

        <Text style={{fontSize: 18, color: 'black'}}>on every recharge</Text>
      </View>

      <View
        style={{alignItems: 'center', margin: 15, backgroundColor: '#ffffff'}}>
        <Image
          source={{
            uri: 'https://www.coolztricks.com/wp-content/uploads/2021/09/photo6226738758930247226-300x230.jpg',
          }}
          style={{
            width: 180,
            height: 90,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            resizeMode: 'cover',
            // marginLeft: 10,
          }}
        />

        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            cashback upto 200
          </Text>

          <Text style={{fontSize: 18, color: 'black'}}>for repeat users</Text>
        </View>
      </View>

      <View
        style={{alignItems: 'center', margin: 15, backgroundColor: '#ffffff'}}>
        <Image
          source={{
            uri: 'https://tamil.samayam.com/photo/msid-89668805,imgsize-45644/pic.jpg',
          }}
          style={{
            width: 180,
            height: 90,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            resizeMode: 'cover',
            marginLeft: 10,
          }}
        />

        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          3GB/day+
        </Text>

        <Text style={{fontSize: 18, color: 'black'}}>Unlimited calls</Text>
      </View>
    </ScrollView>
  );
};

export default Offers;

const styles = StyleSheet.create({});
