import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'

const Strate1_3 = (props) => {

    var score3 = 0;
    var count = 3;

    const [myTextInput, setMyTextInput] = useState("")
    const onChangeInput = (event) => {
        setMyTextInput(event)
    }
    const correct = () => {
        if (myTextInput == 11) {
            score3+=1;
            alert("Ok! If you’re right, then Todd bought 11 pictures.");
            props.navigation.navigate("Quiz1",
            {
                score3:score3
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
                    score3:score3
                })
            }
        }
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>"OK. Start with $85.50.
            Subtract the shipping fee, then count how many times you have to subtract
            $7.50 to get to 0."
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
        height: 100,
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

export default Strate1_3