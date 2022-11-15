import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ImageBackground } from "react-native";
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
                <Text style = {styles.mainText}>Sunmoon School</Text>
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
                 title = "Start"
                 color = '#FF9933'
                 fontColor = 'black'
                 onPress = {() => { props.navigation.navigate("QuizList") }}
                />
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
        alignItems:'center',
        justifyContent:'center'
    },
    subView_2: {
        flex:1,
        alignItems:'left',
        justifyContent:'center',
        marginLeft:30,
        marginRight:30
    },
    subView_3: {
        flex:0.5,
        alignItems:'left',
        justifyContent:'center',
        marginLeft:160,
        marginRight:160
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
        backgroundColor:'#E0E0E0'
      }
});

export default Start