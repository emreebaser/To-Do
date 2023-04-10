import React from "react";
import {View,Text,StyleSheet, Image} from 'react-native';
import styles from "./Store.Card.Style"
const StoreCard = ({store}) =>{
    
   return(
    <View style={styles.container}>
        <Image style={styles.image}
        source={{
            uri:store.imgURL
        }}
        />
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
             {store.inStock === false && <Text style={styles.stock}>Stokta yok</Text>} 
    </View>
   )
}

export default StoreCard;