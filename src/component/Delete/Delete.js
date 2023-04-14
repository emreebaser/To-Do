import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import style from './Delete.style';


const Delete = props => {
    console.log(props.counter);
    const [active, setActive] = useState(true);
    
   
 


  return (
    <View>
      <TouchableOpacity
        style={ active ? style.container :style.container2 }
        onPress={ () => setActive(!active)} 
        onLongPress={() => props.onLongPress(props.index)}>
        <Text style={  active ? style.text :style.text2 } >{props.item}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Delete;
