import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addList} from './Redux/Actions';
// import { useSelector } from 'react-redux';
import {useRoute} from '@react-navigation/native';
const CreateScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  // const id = navigation.getParam('id');
  // console.log('Edit id', id);
  // const route = useRoute();
  // const id = route.params.id;
  // console.log(id);

  const textChangeHandler = text => {
    setText(text);

    console.log(text);
  };

  const submitButtonHandler = () => {
    // alert('Submit');
    dispatch(addList(text));
    navigation.navigate('Home', {text});
  };

  return (
    <View
      style={{
        flex: 1,
        top: 30,
      }}>
      <View style={{paddingHorizontal: 30}}>
        <Text>Add Task</Text>
        <TextInput
          label="Enter the task"
          value={text}
          onChangeText={textChangeHandler}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            paddingVertical: 15,
            paddingLeft: 20,
          }}
          onPress={submitButtonHandler}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
