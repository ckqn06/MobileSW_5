import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../Redux/Actions";

const Strate1_2 = (props) => {
    const scoreCounter = useSelector(state => state.scoreCounter)
    const dispatch = useDispatch()

    var score2 = 0;
    var count = 3;

    const [myTextInput, setMyTextInput] = useState("")
    const onChangeInput = (event) => {
        setMyTextInput(event)
    }
    const correct = () => {
        if (myTextInput == 11) {
            //score2+=1;
            dispatch(increment())
            console.log("new second scoreCounter", scoreCounter)
            alert("Ok! If you’re right, then Todd bought 11 pictures.");
            props.navigation.navigate("Quiz1",
            {
                score2:score2
            })
        } else {
            if(count > 0) {
                count -= 1;
                alert("miss you have "+(count)+" chance");
            }
            else if(count == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz1", 
                {
                    score2:score2
                })
            }
        }
    }

    //onPress={Keyboard.dismiss}
    
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        > 
        <TouchableWithoutFeedback >    
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>OK, let’s try that. Start from $3.25. 
            How many times do you have to add $7.50 to get to $85.75?
            </Text>
            <TextInput
            style = {styles.input}
            placeholder="answer"
            value = {myTextInput}
            onChangeText = {onChangeInput}
            />
            </View >
            <View style = {styles.button}>
                <Button
                    title = "check"
                    onPress = {correct}
                />
            </View>
        </View>
        </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#DDA0DD',
        paddingTop: 30,
        paddingBottom: 30
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        marginTop: 20
    },
    textcon: {
        backgroundColor: 'white',
        height: 80,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    tt: {
        backgroundColor: '#DDA0DD',
        color: 'black',
        marginBottom: 5,
    },
    input: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: 'white',

    },
}); 

export default Strate1_2