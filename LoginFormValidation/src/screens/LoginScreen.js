import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {TextInput} from 'react-native-paper';
// import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const {isLoading, userToken} = useContext(AuthContext);
  const userInfo = {userName: 'admin', pass: 'pass123'};
  const [userName, setUserName] = useState('');
  const [pass, setPassword] = useState('');
  const [checkPassowrd, setCheckPassword] = useState(true);

  if (isLoading) {
    <View>
      <ActivityIndicator size={'large'}></ActivityIndicator>;
    </View>;
  }
  const onLogin = () => {
    if (userInfo.userName === userName && userInfo.pass === pass) {
      navigation.navigate('Login');

      login();
    } else {
      alert('Invalid Id and Password');
    }
  };

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      {userToken !== null ? (
        navigation.navigate('Home')
      ) : (
        <View
          style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            top: 70,
          }}>
          <View style={{display: 'flex', alignItems: 'center'}}>
            {/* <Text
              style={{
                color: 'black',

                fontSize: 20,
                marginHorizontal: 25,
                fontSize: 30,
                // color:'#E94560',
              }}>
              Login
            </Text> */}
            {/* <Text style={{marginHorizontal: 25}}>dlflf</Text> */}
            {/* <Button icon="camera">Press me</Button> */}

            <Image
              // style={styles.tinyLogo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoqBjUpK4jj5q3X7Ye4DyYPrdByt66YQFmg&usqp=CAU',
              }}
              style={{height: 50, width: 50}}
            />
          </View>

          <View>
            <Text
              style={{
                marginHorizontal: 35,
                marginTop: 60,
                fontSize: 15,
                fontWeight: 'bold',
                color: '#E94560',
              }}>
              Email
            </Text>
            <TextInput
              // placeholder="Enter email"
              value={userName}
              onChangeText={text => setUserName(text)}
              style={{
                marginHorizontal: 25,
                height: 35,
                backgroundColor: '#ffffff',
                borderBottomColor: 'blue',
              }}></TextInput>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                marginHorizontal: 35,
                marginTop: 50,
                color: '#E94560',
              }}>
              Password
            </Text>
            <TextInput
              value={pass}
              onChangeText={text => setPassword(text)}
              // placeholder="Enter password"
              style={{
                marginHorizontal: 25,
                height: 35,
                backgroundColor: '#ffffff',
              }}></TextInput>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                marginHorizontal: 35,
                marginTop: 30,
                textAlign: 'right',

                color: '#E94560',
              }}>
              Forgot Password?
            </Text>
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#E94560',
                marginLeft: 25,
                borderRadius: 20,
                marginTop: 30,
                padding: 15,
                width: 340,
              }}
              onPress={onLogin}>
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 15,
                }}>
                Login
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                marginHorizontal: 35,
                marginTop: 30,
                textAlign: 'center',

                // color: '#E94560',
              }}>
              OR CONNECT WITH
            </Text>
            {/* <TouchableOpacity
              style={{
                backgroundColor: 'orange',
                marginHorizontal: 25,
                marginTop: 20,
                padding: 10,
                width: 130,
              }}
              onPress={() => navigation.navigate('Register')}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
                Register
              </Text>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#533483',
                marginHorizontal: 25,
                marginTop: 45,
                padding: 15,
                borderRadius: 20,

                width: 150,
              }}
              onPress={() => navigation.navigate('Register')}>
              {/* <Icon name="facebook-square" size={20} color="white" /> */}

              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                FACEBOOK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#E94560',
                marginHorizontal: 25,
                marginTop: 45,
                padding: 15,
                width: 150,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('Register')}>

              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                GOOGLE
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 50,
              marginBottom:60,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Don't have an account!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{color: '#E94560', fontSize: 15, fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
