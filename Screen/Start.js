import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
         ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
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
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.main}> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                <ScrollView style ={{width:"100%"}}>
                    <View style = {styles.main}>
                        <View style = {styles.subView_1}>
                            <Image
                             style = {{width:500, height:300}}
                             source = {require('../assets/images/cube2.png')}
                             resizeMode = "contain"/>
                        </View>
            
                        <View style = {styles.subView_2}>
                            <Text style = {styles.subText}>Name</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {mySIDInput}
                             onChangeText = {onChangeSIDInput}
                             placeholder = "Insert your Name"/>

                            <Text style = {styles.subText}>Password{'('}e-mail{')'}</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {myPWDInput}
                             onChangeText = {onChangePWDInput}
                             placeholder = "Insert your Password"/>
                        </View>

                        <View style = {styles.subView_3}>
                            <TouchableOpacity onPress = {() => {props.navigation.navigate("Welcome")}}>
                                <View style = {styles.button}>
                                    <Text style = {styles.buttonText}>LOGIN</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor: '#eefbff'
    },
    subView_1: {
        alignItems:'center'
    },
    subView_2: {
        justifyContent:'center',
        marginLeft:10,
        marginRight:30
    },
    subView_3: {
        justifyContent:'center',
        marginLeft:100,
        marginRight:100,
        marginTop:10,
        marginBottom:45
    },
    mainText: {
        fontSize:40
    },
    subText: {
        marginLeft:10,
        fontSize:30
    },
    textInput: {
        height:40,
        marginTop:20,
        marginBottom:30,
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    button: {
        alignItems:'center',
        padding:10,
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'steelblue'
    },
    buttonText: {
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
});

export default Start