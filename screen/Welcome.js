import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { TouchableOpacity } from "react-native-web";

const Start = (props) => {
    return (
        <View style = {styles.main}>
            <View style = {styles.subView_1}>
                <Image
                 style = {{width:200, height:200}}
                 source = {require('../assets/images/hand.png')}
                 resizeMode = "contain">
                </Image>
                <Text style = {styles.mainText}>Welcome</Text>
                <Text style = {styles.mainText}>'LGH'!</Text>
            </View>

            <View style = {styles.subView_2}>
                <Text style = {styles.subText}>Touch anywhere to START</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        //backgroundColor: '#4A2F72'
    },
    subView_1: {
        marginTop:50,
        alignItems:'center',
        justifyContent:'center'
    },
    subView_2: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    mainText: {
        fontSize:40
    },
    subText: {
        fontSize:30
    },
    header:{
        backgroundColor:'pink',
        padding:5,
        alignItems:'center',
        width:'100%',
        justifyContent:'center'
    }
});

export default Start