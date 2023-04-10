import React from "react";
import { SafeAreaView,View,Text,FlatList, StyleSheet,TextInput } from "react-native";
import store_data from "./store.json";
import StoreCard from "./components/store/Store.Card";
const App =( ) =>{
 const renderStore =({item}) => <StoreCard store={item}/>;

return(
  <SafeAreaView style={style.container}>
    <Text style={style.title }>Patika Store</Text>
    <TextInput style={style.text_input} placeholder="Ara..."  ></TextInput>
    <FlatList 
     numColumns={2}
    data={store_data}
    renderItem={renderStore} 
    />

</SafeAreaView>
) }

const style=StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:'white',
    
 },
  title:{
     fontSize:30,
     fontWeight:'bold',
     color:'purple',
     marginTop:5,
     marginLeft:10,
  },
  text_input:{
    backgroundColor:'#E6E6E6',
    fontSize:15,
    fontWeight:'bold',
    borderWidth:1,
    borderRadius:10,
    margin:10,
    padding:10,
   
  },
  

})

export default App;