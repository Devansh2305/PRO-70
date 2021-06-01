import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class WriteStoryScreen extends React.Component {
    constructor(){
      super();
    }

    
    render() {
    
        return(
          <View style={styles.container}>
            <View>
            <Text style={{textAlign: 'center', fontSize: 30}}>StoryHub</Text>
              
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Title of Story"/>
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Author of story"/>
            </View>
            <TextInput 
              style={styles.inputBox}
              placeholder="Write your story here"/>
          </View>
        );
      }
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputView:{
        flexDirection:'row',
        margin:20,
    },
    inputBox:{
        width:200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize:20,
        backgroundColor:'white',
        
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
  })