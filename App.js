import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import InputPlace from './Components/InputPlace/InputPlace';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';
import PlaceList from './Components/PlaceList/PlaceList';

export default function App() {
 
  const [inputValue,setInputValue] =useState("");
  const [placeList,setPlaceList] = useState([]);

  // listing all input values
  // const list = placeList.map((item,i)=>{
  //   return (
  //     <ListItem placeName={item} key={i} onItemPressed={()=>alert(item)}> </ListItem>
  //   )
  // })
  const [selectedPlace,setSelectedPlace] = useState(null);
  const handleSelectedPlace=key=>{
        const place= placeList.find(place=>{
          return place.key===key;
        });
        setSelectedPlace(place);
      }
       let placeDetail = null;
      if(selectedPlace !==null){
        placeDetail = <PlaceDetail
        place={selectedPlace} 
        handleHideModal={handleHideModal}
        handleDeleteItem={handleDeleteItem}
        ></PlaceDetail>
      }

  const hideModal =()=>{
    setSelectedPlace(null);
  }  
  const handleDeleteItem = key=>{
    setPlaceList(
      placeList.filter(place=>{
        place.key !==key
      })
    )
  }
  return (
    <View style={styles.container}>
      
    {/* <PlaceDetail></PlaceDetail> */}
    {placeDetail}
    <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeList={placeList}
        setPlaceList={setPlaceList}
    />

{/* <ScrollView style={{width:"100%"}}>
{list}
</ScrollView> */}

{/* Showing Place List*/}
 <PlaceList 
      placeList={placeList} 
      handleSelectedPlace={handleSelectedPlace}>
      </PlaceList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:'column',
  },
  textColors:{
    color:'blue',
  },

});
