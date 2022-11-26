import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ImageBackground } from "react-native";
import { useState, useEffect } from 'react';
import { auth } from "../../Auth/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth"
import { Signin } from "../../Auth/AuthFunctions";


const LoginScreen = (props) => {

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if(data) {
                props.navigation.replace("Welcome")
            } else {
                props.navigation.navigate("LoginScreen")
           }
        })
    }, [])


    const [email, setEmail] = useState("")
    const onChangeEmail = (event) => {
        //console.log("event", event)
        setEmail(event)
    }

    const [myPWDInput,setmyPWDInput] = useState("")
    const onChangePWDInput = (event) => {
       // console.log("event", event)
        setmyPWDInput(event)
    }

    const setEmpty = () => {
        setEmail("")
        setmyPWDInput("")
    }

    const loginHandler = () => {
        if (!email && !myPWDInput)
        { alert("email and password is required") }
        else if (!email || !myPWDInput) {
            alert("email or password is required")
        }
        else {
            Signin(email, myPWDInput)
            console.log("logged In")
            setEmpty();
        }
       
    }



    return (
        <View style = {styles.main}>
            <View style = {styles.subView_1}>
                <Image
                 style = {{width:200, height:200}}
                 source = {require('../../assets/images/school.png')}
                 resizeMode = "contain">
                </Image>
                <Text style = {styles.mainText}>Sunmoon School</Text>
            </View>

            <View style={[styles.subView_2]}>
            
                <Text style = {styles.subText}>Email</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {email}
                 onChangeText = {onChangeEmail}
                 placeholder = "Insert your email"
                ></TextInput>

                <Text style = {styles.subText}>PassWord</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {myPWDInput}
                 onChangeText = {onChangePWDInput}
                    placeholder="Insert your password"
                    secureTextEntry={true}
                ></TextInput>
            </View>

            <View style = {styles.subView_3}>
                <Button
                 title = "LOG IN"
                 color = '#FF9933'
                 //fontColor = 'black' //font color not exist, try touchableOpacity
                 onPress = {loginHandler}
                />
            </View>

            <View style={{ alignItems: 'center', marginVertical: 8 }}>
                <Text style={{ marginVertical: 5, color: 'black' }}>Or</Text>
            </View>

            <View style = {[styles.subView_3, {marginBottom: 20}]}>
                <Button
                 title = "SIGN UP"
                 color = '#FF9933'
                 //fontColor = 'black' //font color not exist, try touchableOpacity
                 onPress = {() => { props.navigation.navigate("Start") }}
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
        justifyContent: 'center',
        marginBottom: 28
    },
    subView_2: {
        justifyContent:'center',
        marginLeft:30,
        marginRight:30,
        marginBottom: 75
    },
    subView_3: {
        //flex:0.5,
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

export default LoginScreen