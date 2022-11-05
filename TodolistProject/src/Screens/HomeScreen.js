import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {deleteList} from './Redux/Actions';
// import {Button} from 'react-native-paper';
import {IconButton, MD3Colors} from 'react-native-paper';
import {useSelector} from 'react-redux';
const HomeScreen = ({navigation}) => {
  const taskList = useSelector(state => state.taskList);
  console.log('hello', taskList);

  const dispatch = useDispatch();

  return (
    <View>
      <Text>HomeScreen</Text>
      <SafeAreaView>
        <FlatList
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Create', {id: item.id})}>
                <Text>{item.task}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(deleteList(item.id))}
                style={{backgroundColor: 'blue', padding: 10}}>
                <Text>Delete</Text>
              </TouchableOpacity>
              {/* <IconButton
                icon="camera"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log('Pressed')}
              /> */}
            </View>
          )}
        />
      </SafeAreaView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Create')}>
        <Text style={{fontSize: 30}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    top: 500,
    height: 70,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
});
