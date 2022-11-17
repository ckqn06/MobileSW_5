import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from 'react'; 
import { SignUp } from "../../Auth/AuthFunctions";

const Start = (props) => {

    const [username, setUsername] = useState("")
    const onChangeName =  (event => setUsername(event))

    const [email, setEmail] = useState("")
    const onChangeEmail = (event) => {
        console.log("event", event)
        setEmail(event)
    }

    const [myPWDInput,setmyPWDInput] = useState("")
    const onChangePWDInput = (event) => {
        console.log("event", event)
        setmyPWDInput(event)
    }

    const setEmpty = () => {
        setUsername(""),
        setEmail(""),
        setmyPWDInput("")    
    }

    //creates a new user with email and password
    const SignUpHandler = () => {
        if (!username) { alert("username is required") }
        else if (!email) { alert("email is required") }
        else if (!myPWDInput) { alert("password is required") }
        else {
            SignUp(
                username,
                email,
                myPWDInput
            );
            console.log("new user created")
            props.navigation.navigate("Login")
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
            <Text style = {styles.subText}>Username</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {username}
                 onChangeText = {onChangeName}
                 placeholder = "Insert your username"
                ></TextInput>

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
                 title = "SIGN UP"
                 color = '#FF9933'
                 //fontColor = 'black' //font color not exist, try touchableOpacity
                 onPress = {SignUpHandler}
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
       // flex:1,
        //alignItems: 'left',
        justifyContent:'center',
        marginLeft:30,
        marginRight:30
    },
    subView_3: {
      //  flex:0.5,
        alignItems:'left',
        justifyContent:'center',
        marginLeft:160,
        marginRight:160,
        marginTop: 15
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