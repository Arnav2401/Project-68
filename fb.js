import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Facebook extends React.Component{
  render(){
    return(
        <View style={{alignItems:'center',marginTop:200}}>
     <Image source={require('./assets/facebook.png')}/>
    </View>
     )
  }
}
