import React, {useEffect, useState} from 'react';
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Switch,
  Image,
  Dimensions,
  Button,
} from 'react-native';




const App = () => { 

const renderSong =({item})=><SongCard song={item} />;

const renderSeparator = () => <View style={styles.separator}></View>;

const handleSearch = (text) => {
  const filteredList = music_data.filter(song =>{
    const searchedText = text.toLowerCase();
    const currentTitle= song.title.toLowerCase();

   return currentTitle.indexOf(searchedText) > -1 ; //arama yaparken yazılan harf yoksa bize -1 değeri verdiği için koşulum aranan harfin indexinin -1 den büyük olması 

  });

  setList(filteredList);
};
const [list,setList] = useState(music_data);
    return(
        <SafeAreaView style={styles.container}>
          
         <SearchBar onSearch={handleSearch}/>
            <FlatList 
            keyExtractor={(item)=>item.id}
            data={list}
            renderItem={renderSong}
            ItemSeparatorComponent={renderSeparator}
            />
          
        
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  separator:{
    borderWidth:1,
    borderColor:'#e0e0e0'
  }
})

export default App;


