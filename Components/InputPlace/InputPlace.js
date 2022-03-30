import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const InputPlace=props=>{
    return(
         <View style={styles.inputView}>
        <TextInput  style={
            {width:"70%",
            borderBottomWidth:1,
            borderColor:'green',
            padding:7 ,
        }}
        placeholder="Add a place..."
        value={props.inputValue}
        onChangeText={text=>props.setInputValue(text)}
        />
        <Button
                title="Add"
                style={{marginTop:5}}
                color="#f194ff"
                onPress={() =>{
                if(props.inputValue !== ""){
                //setPlaceList([...placeList,intputValue])};
                props.setPlaceList([...props.placeList,
                    {key:Math.random().toString(),
                        value:props.inputValue,
                        image:{
                            uri:"https://statemag.lab.prod.getusinfo.com/wp-content/uploads/2021/02/0321POM-29.jpg"
                        }
                    }]);
                    props.setInputValue("");
                // 
                }}
                }/>
</View>
    );
}

const styles = StyleSheet.create({

    inputView:{
      padding: 20,
      marginTop:50,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      
    }
  });

  export default InputPlace;