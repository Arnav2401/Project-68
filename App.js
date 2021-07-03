import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './fb';
import Instagram from './insta';



export default class App extends React.Component{
render(){
  return(
    <SafeAreaProvider>
      <View style={{flex:1}}>
    <Text style={{marginTop:50,textAlign:'center',backgroundColor:'lightblue',height:50,fontWeight:'bold',fontSize:20}}>Buzz App</Text>
    <Container/>
    </View>
    </SafeAreaProvider>
)
}
}

const tab = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})

const Container = createAppContainer(tab)