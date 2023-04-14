import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#808080',
        margin:8,
        padding:6,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'flex-end',
        

        
    },
    input:{
        height:30,
        width:350,
        backgroundColor:'#808080',
        margin:3,
        padding:5,
        color:'white'
    },
    seperator:{
        borderWidth:1,
        width:350,
        borderColor:'#7C96AB',
        margin:3
    },
    button:{
        backgroundColor:'#808080',
        borderBottomColor:'black',
        width:300,
        height:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    button2:{
        backgroundColor:'orange',
        borderBottomColor:'black',
        width:300,
        height:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    button_text:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
    }
})