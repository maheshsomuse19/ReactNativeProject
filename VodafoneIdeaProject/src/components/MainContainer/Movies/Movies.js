import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
const Movies = () => {
  return (
    <View style={{marginVertical: 10}}>
      <View style={styles.iconContainer}>
        <Text style={styles.textStyle}>trending movies</Text>
        <Icon name="rightcircleo" size={23} color="blue" />
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.movies}>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BOTYxOWU3OWYtOGM4NC00NDhlLTlmZTYtMGUxM2YwZmFhOGFlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
            }}
            style={{width: 155, height: 210, borderRadius: 12}}
          />
          <Text style={styles.textNumber}>1</Text>
        </View>

        <View style={styles.movies}>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BMjdjZWJmMTAtYWRlZi00YTg4LWJlYTItMDIzOGQ4ZDVmZDIzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
            }}
            style={{width: 155, height: 210, borderRadius: 12}}
          />
          <Text style={styles.textNumber}>2</Text>
        </View>

        <View style={styles.movies}>
          <Image
            source={{
              uri: 'https://pbs.twimg.com/media/FbjAeA-VUAA01b7?format=jpg&name=900x900',
            }}
            style={{width: 155, height: 210, borderRadius: 12}}
          />
          <Text style={styles.textNumber}>3</Text>
        </View>

        <View style={styles.movies}>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BMjNjNWUxMjUtMTBkMC00NTNlLTg0NTctZmJmMDYzMTMwMWQwXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg',
            }}
            style={{width: 155, height: 210, borderRadius: 12}}
          />
          <Text style={styles.textNumber}>4</Text>
        </View>
        <View style={styles.movies}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/4/40/Brahmastra_Teaser.jpeg',
            }}
            style={{width: 155, height: 210, borderRadius: 12, marginRight: 20}}
          />
          <Text style={styles.textNumber}>5</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  // textStyle: {
  //   marginVertical: 25,
  //   fontSize: 20,
  //   marginLeft: 20,
  //   fontWeight: 'bold',
  //   color: 'black',
  // },
  movies: {
    marginLeft: 20,
    marginTop: 20,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  textNumber: {
    position: 'absolute',

    fontSize: 65,

    color: 'white',

    top: -24,

    left: -5,

    textShadowColor: 'orange',

    textShadowOffset: {
      width: 5,

      height: 3,
    },

    textShadowRadius: 10,
  },
});
