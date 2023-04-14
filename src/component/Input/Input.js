
import React,{useState} from "react";
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import style from './Input.style'
const Input = (props) =>{
  
    
    return(
        <View style ={style.container}>
       <TextInput 
       style={style.input}
       value={props.value}
       onChangeText={props.onChangeText}
       placeholder="Yapılacaklar"
       placeholderTextColor={'black'}
       />
       <View style={style.seperator}></View>
       <TouchableOpacity
       style={ props.value.length>0 ? style.button2 : style.button }
       
       onPress={props.add}>
        <Text style={style.button_text}>Kaydet</Text>
       </TouchableOpacity>
 
       
       </View>
    )
}
export default Input;