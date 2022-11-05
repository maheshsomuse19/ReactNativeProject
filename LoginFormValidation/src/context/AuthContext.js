import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {useState} from 'react';
// import Jwt from 'jsonwebtoken';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken('mahesh');
    setIsLoading(true);
    // var token = Jwt.sign({foo: 'bar'}, 'shhhhh');
    // console.log(token);
    AsyncStorage.setItem('userToken', 'mahesh');
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
    GoogleSignin.configure({
      webClientId:
        '760181664658-kusd5r4vkr012vkjrlo7ot3lnik54alq.apps.googleusercontent.com',
    });
  }, []);

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
