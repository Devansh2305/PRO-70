import React, {Component} from 'react';
import {Text , View , Header , StyleSheet} from 'react-native';

export default class ReadStoryScreen extends Component{
    render(){
        return(
            <View style={{
            flex:1 , 
            justifyContent:'center' ,
            alignItems:'center'}}>
                <Text style={StyleSheet.header}>Read a Story</Text>
                <Text style={StyleSheet.header}>The Lion And The Mouse</Text>
                <Text style={StyleSheet.text}>
                      
                A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion’s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse desperately requested the lion to set him free. “I promise you, I will be of great help to you someday if you save me.” The lion laughed at the mouse’s confidence and let him go.

One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle.
                </Text>
            </View>
        )
    }
} 
const styles =StyleSheet.create({
    text:{
        flex:1,
        fontWeight:'bold',
        fontSize:10,
        alignItems:'center',
        justifyContent:'center',
    },
    header:{
        backgroundColor:'coral',
        fontSize:30,
    }
});