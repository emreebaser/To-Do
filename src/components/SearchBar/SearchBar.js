import React from "react";
import {View,TextInput} from 'react-native';
import styles from "./SearchBar.styles"
const SearcBar = (props)=>{
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder="Ara.."
            onChangeText={props.onSearch}
            />

         
        </View>
    )
}
export default SearcBar;