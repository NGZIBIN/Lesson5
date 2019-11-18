import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
const PET_DATA = {
  name: 'Gizmo',
  age: '5',
  image: require('./src/img/bird.jpg'),
};
const OWNER_DATA = {
  name: 'Daniyah Bai',
  contact: '97502219',
  membership: 'gold',
};

  const Lesson05quiz = () => {
    let petArr = [];
    for (let i = 0; i < PET_DATA.length; i++) {
      let pet = PET_DATA[i];
      console.log("Name:")
      petArr.push(<Text key={pet.name}>-------{pet.name}</Text>);
      console.log("Age:")
      petArr.push(<Text key={pet.age}>-------{pet.age}</Text>);
      console.log(petArr);

    };
    let ownerArr = [];
    for (let x = 0; x < OWNER_DATA.length; x++) {
      let owner = OWNER_DATA[x];
      console.log("Owner Information")
      console.log("-------")
      console.log("Name:")
      ownerArr.push(<Text key={owner.name}>-------{owner.name}</Text>);
      console.log("Contact:")
      ownerArr.push(<Text key={owner.contact}>-------{owner.contact}</Text>);
      console.log("Membership::")
      ownerArr.push(<Text key={owner.membership}>-------{owner.membership}</Text>);
  return (
      <ScrollView>
      <View>
      <View>{petArr}</View>
      </View>
      </ScrollView>
  );
};
export default Lesson05quiz;
