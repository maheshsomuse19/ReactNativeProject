import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { Provider as PaperProvider } from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {ActivityIndicator} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import OnBoardingScreen from './src/screens/OnBoardingscreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AuthProvider from './src/context/AuthContext';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> */}

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />

            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};
export default App;
