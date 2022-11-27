import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react'; 
import { SignUp } from "../../Auth/AuthFunctions";

const Sign_Up =  (props) =>{
    const [username,setUsername] = useState("")
    const onChangeName = (event => setUsername(event))

    const [email,setEmail] = useState("")
    const onChangeEmail = (event) => {
        //console.log("event", event)
        setEmail(event)
    }

    const [myPWDInput,setmyPWDInput] = useState("")
    const onChangePWDInput = (event) => {
        //console.log("event", event)
        setmyPWDInput(event)
    }

    const setEmpty = () => {
        setUsername(""),
        setEmail(""),
        setmyPWDInput("")    
    }

    //creates a new user with email and password
    const SignUpHandler = async () => {
        
        if (!username) { alert("Username is required") }
        else if (!email) { alert("Email is required") }
        else if (!myPWDInput) { alert("Password is required") }
        else {
            try {
                await SignUp(username, email, myPWDInput);
                console.log("new User created")
                props.navigation.navigate("Login")
                setEmpty();
            }catch(error){alert(error.message)}
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
                            <Text style = {styles.subText}>Username</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {username}
                             onChangeText = {onChangeName}
                             placeholder = "Insert your Username"/>

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
        marginTop:20,
        marginBottom:10
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
        marginBottom:20,
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

export default Sign_Up