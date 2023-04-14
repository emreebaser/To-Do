import React, {useEffect, useState} from 'react';
import Input from './component/Input';
import Delete from './component/Delete';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [active,setActive] = useState(true)
  

  const add = () => {
    if (text.length > 0) {
      setList([...list, text]);
      setText('');
      setCounter(counter + 1);
    } else {
      Alert.alert('Lütfen görev giriniz');
    }
  };
  
  
  

   const remove = index => {
    Alert.alert('Tebrikler bu görevi tamamladınız');
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setCounter(counter - 1);
   
  }; 

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header_container}>
        <Text style={style.header_text}>Yapılacaklar</Text>
        <Text style={style.counter}>{counter}</Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <Delete item={item} index={index}  onLongPress={remove}  counter={counter} setCounter={setCounter}   />
          )}
          keyExtractor={item => item + Math.random()}
        />
        <Input add={add} value={text} onChangeText={setText} />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 5,
  },
  header_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500',
  },
});

export default App;
