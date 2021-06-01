import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends Component {
 render(){
   return(
    <AppContainer/>
   )
 }
}
const TabNavigator= createBottomTabNavigator({
  ReadStory:{screen:ReadStoryScreen},
  WriteStory:{screen:WriteStoryScreen}
},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      console.log(routeName);
      if(routeName=== "ReadStory"){
        return(
        <ImageBackground style={{width:40, height:40}} source = {require("./assets/read.png")}> </ImageBackground>)
      }
       else if(routeName=== "WriteStory"){
         return(
         <ImageBackground style={{width:40 , height:40}} source={require("./assets/write.png")}></ImageBackground>)
       }
    }
  })
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
