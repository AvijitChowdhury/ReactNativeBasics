import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

 

const ListItem= props=>{
    return (
    <TouchableHighlight onLongPress={props.onItemPressed}>
     <View style={styles.listItem} >
         <Image source={props.image}
         style={{
             height:50,
             width:50,
         }}></Image>
         <Text style={{paddingLeft:15}}>{props.placeName}</Text>
         
     </View>
     </TouchableHighlight>
    )
}
const styles= StyleSheet.create({
    listItem:{
        width:"100%",
        padding:10,
        backgroundColor:'#eee',
        margin:5,
        flexDirection:'row'
    }
})
export default ListItem;