import React from 'react';
import { Button, Image, Modal, Text, View } from 'react-native';


const PlaceDetail = props=>{
    return(
        <Modal>
            <View>
                <Image source={props.place.Image}
                style={
                    {height:"100%",
                    width:200,}
                }>

                </Image>
                <Text style={{
                    textAlign:'center',
                    fontSize:40,
                    
                }}>
                    {props.place.value}
                </Text>
                <View>
                    <Button title="delete " onPress={()=>{
                        props.handleDeleteItem(props.place.key);
                    }}></Button>
                    <Button title="Close" onPress={()=>{
                        props.handleHideModal();
                    }}></Button>
                </View>
            </View>
        </Modal>
    );
}
export default PlaceDetail;