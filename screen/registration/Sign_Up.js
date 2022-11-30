import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react'; 
import { SignUp } from "../../Auth/AuthFunctions";

const Sign_Up = (props) => {
    const [username,setUsername] = useState("")
    const onChangeName = (event => setUsername(event))

    const [email,setEmail] = useState("")
    const onChangeEmail = (event) => {setEmail(event)}

    const [myPWDInput,setmyPWDInput] = useState("")
    const onChangePWDInput = (event) => {setmyPWDInput(event)}

    const setEmpty = () => {
        setUsername(""),
        setEmail(""),
        setmyPWDInput("")    
    }

    //creates a new user with email and password
    const SignUpHandler = async() => {
        if (!username) { alert("Username is required") }
        else if (!email) { alert("Email is required") }
        else if (!myPWDInput) { alert("Password is required") }
        else {
            try {
                await SignUp(username, email, myPWDInput);
                console.log("new User created")
                props.navigation.navigate("Login")
                setEmpty();
            } catch(error){alert(error.message)}
        }
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
                             style = {{width:300, height:170}}
                             source = {require('../../assets/images/signup.png')}
                             resizeMode = "contain"/>
                        </View>
            
                        <View style = {styles.subView_2}>
                            <Text style = {styles.subText}>Name</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {username}
                             onChangeText = {onChangeName}
                             placeholder = "Insert your name"/>

                            <Text style = {styles.subText}>Email</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {email}
                             onChangeText = {onChangeEmail}
                             placeholder = "test@example.com"/>

                            <Text style = {styles.subText}>Password</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {myPWDInput}
                             onChangeText = {onChangePWDInput}
                             placeholder = "At least 6 characters"
                             secureTextEntry={true}/>
                        </View>

                        <View style = {styles.subView_3}>
                            <TouchableOpacity onPress = {SignUpHandler}>
                                <View style = {styles.button}>
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
        marginTop:56,
        marginBottom:40,
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
        marginTop:12,
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#d6d6d6',
        backgroundColor:'white',
        color:'#d6d6d6',
    },
    button: {
        alignItems:'center',
        marginTop:8,
        padding:10,
        marginLeft:14,
        marginRight:14,
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

export default Sign_Up