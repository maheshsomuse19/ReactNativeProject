import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <ScrollView>
      <View style={styles.diwali}>
        <Image
          source={{
            uri: 'https://i0.wp.com/www.3ghackerz.com/wp-content/uploads/2017/10/vodaone-diwali-100mb-free.png?ssl=1',
          }}
          style={{width: 300, height: 170, borderRadius: 12}}
        />
        <Text>sss</Text>
      </View>
    </ScrollView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  diwali: {
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
