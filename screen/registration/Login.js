import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../Auth/firebaseConfig";
import { Signin } from "../../Auth/AuthFunctions";
import { BackHandler } from 'react-native';

const Login = (props) => {
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if(data) { props.navigation.replace("Welcome") }
            else { props.navigation.navigate("Login") }})
    }, [])

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const [email,setEmail] = useState("")
    const onChangeEmail = (event) => {setEmail(event)}

    const [myPWDInput,setmyPWDInput] = useState("")
    const onChangePWDInput = (event) => {setmyPWDInput(event)}

    const setEmpty = () => {
        setEmail("")
        setmyPWDInput("")}

    const loginHandler = () => {
        if (!email && !myPWDInput) { alert("email and password is required") }
        else if (!email || !myPWDInput) { alert("email or password is required") }
        else {
            Signin(email, myPWDInput)
            console.log("logged In")
            setEmpty(); }
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
                             source = {require('../../assets/images/cube2.png')}
                             resizeMode = "contain"/>
                        </View>
            
                        <View style = {styles.subView_2}>
                            <Text style = {styles.subText}>Email</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {email}
                             onChangeText = {onChangeEmail}
                             placeholder = "Insert your Email"/>

                            <Text style = {styles.subText}>Password</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {myPWDInput}
                             onChangeText = {onChangePWDInput}
                             placeholder = "Insert your Password"
                             secureTextEntry={true}/>
                        </View>

                        <View style = {styles.subView_3}>
                            <TouchableOpacity onPress = {loginHandler}>
                                <View style = {styles.loginButton}>
                                    <Text style = {styles.buttonText}>LOGIN</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress = {() => {props.navigation.navigate("Sign_Up")}}>
                                <View style = {styles.signUpButton}>
                                    <Text style = {styles.buttonText}>SIGN UP</Text>
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
        alignItems:'center',
        marginTop:44,
        marginBottom:20,
    },
    subView_2: {
        justifyContent:'center',
        marginLeft:10,
        marginRight:30
    },
    subView_3: {
        justifyContent:'center',
        flexDirection:'row',
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
        marginTop:12,
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#d6d6d6',
        backgroundColor:'white'
    },
    loginButton: {
        alignItems:'center',
        marginTop:4,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        marginRight:15,
        borderRadius:10,
        borderWidth:0,
        borderColor:'black',
        backgroundColor:'#ade6ff'
    },
    signUpButton: {
        alignItems:'center',
        marginTop:4,
        padding:10,
        paddingLeft:12,
        paddingRight:12,
        marginLeft:15,
        borderRadius:10,
        borderWidth:0,
        borderColor:'black',
        backgroundColor:'#ade6ff'
    },
    buttonText: {
        fontSize:14,
        fontWeight:'bold',
        color:'white'
    }
});

export default Login