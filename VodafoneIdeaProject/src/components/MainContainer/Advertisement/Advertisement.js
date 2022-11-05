import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Advertisement = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.add}>
        <Image
          source={{
            uri: 'https://images.fonearena.com/blog/wp-content/uploads/2022/05/Vi-New-Recharge-Plan.jpg',
          }}
          style={{width: 310, height: 170, borderRadius: 12}}
        />
      </View>
      <View style={styles.add}>
        <Image
          source={{
            uri: 'https://i.gadgets360cdn.com/large/Vi_disney_offer_1615364498016.jpg',
          }}
          style={{width: 310, height: 170, borderRadius: 12}}
        />
      </View>
      <View style={styles.add}>
        <Image
          source={{
            uri: 'https://i0.wp.com/www.datareign.com/wp-content/uploads/2016/09/vodafone-daily-international-roaming-pack.jpg?resize=770%2C385',
          }}
          style={{width: 310, height: 170, borderRadius: 12}}
        />
      </View>
    </ScrollView>
  );
};

export default Advertisement;

const styles = StyleSheet.create({
  add: {
    marginLeft: 20,
    marginHorizontal: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 40,
    borderRadius: 12,
    marginTop: 20,
    // padding:20,
    // backgroundColor: '#feefe8',
  },
});
