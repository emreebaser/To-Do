import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#E6E6E6',
     margin:10,
     marginTop:0,
     padding:10,
     borderRadius:10,
   
    },
    image:{
     height:Dimensions.get('window').height / 4,
     resizeMode:'contain',
     borderRadius:10,
    },
    title:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
     },
     price:{
        fontSize:15,
        fontWeight:'bold',
        color:'gray',
        marginTop:3,
     },
     stock:{
        color:'red',
        fontSize:15,
        fontWeight:'900',
     }
})