import {View, Image, Text, TextInput, StyleSheet, Button, TouchableOpacity} from "react-native";
import { useState } from 'react';

const Start = (props) => {
    const [mySIDInput,setmySIDInput] = useState("")
    const onChangeSIDInput = (event) => {
        console.log("event", event)
        setmySIDInput(event)
    }

    const [myPWDInput,setmyPWDInput] = useState("")
    const onChangePWDInput = (event) => {
        console.log("event", event)
        setmyPWDInput(event)
    }

    return (
        <View style = {styles.main}>
            <View style = {styles.subView_1}>
                <Image
                 style = {{width:200, height:200}}
                 source = {require('../assets/images/school.png')}
                 resizeMode = "contain">
                </Image>
            </View>

            <View style = {styles.subView_2}>
                <Text style = {styles.subText}>School ID</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {mySIDInput}
                 onChangeText = {onChangeSIDInput}
                 placeholder = "Insert your school ID"
                ></TextInput>

                <Text style = {styles.subText}>PassWord</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {myPWDInput}
                 onChangeText = {onChangePWDInput}
                 placeholder = "Insert your password"
                ></TextInput>
            </View>

            <View style = {styles.subView_3}>
                <Button
                 title = "LOGIN"
                 color = '#8463ff'
                 fontColor = 'black'
                 onPress = {() => { props.navigation.navigate("Welcome") }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#eefbff'
    },
    subView_1: {
        alignItems:'center',
        justifyContent:'center'
    },
    subView_2: {
        flex:1.5,
        justifyContent:'center',
        marginLeft:10,
        marginRight:30
    },
    subView_3: {
        flex:0.5,
        justifyContent:'center',
        marginLeft:100,
        marginRight:100
    },
    mainText: {
        fontSize:40
    },
    subText: {
        fontSize:30
    },
    textInput: {
        height:40,
        marginTop:20,
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
});

export default Start