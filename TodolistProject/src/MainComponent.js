// import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
// import CreateScreen from './Screens/CreateScreen';

const MainComponent = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Create" component={CreateScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;

// const styles = StyleSheet.create({});
