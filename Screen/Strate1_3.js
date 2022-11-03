import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'

const Strate1_3 = (props) => {
    const [myTextInput, setMyTextInput] = useState("")
    const onChangeInput = (event) => {
        setMyTextInput(event)
    }
    const correct = () => {
        if (myTextInput == 11) {
            alert("맞췄습니다.");
            props.navigation.navigate("Quiz1")
        } else {
            alert("오답입니다.");
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
            placeholder="답을 입력해주세요."
            value = {myTextInput}
            onChangeText = {onChangeInput}
            />
            </View >
            <View style = {styles.button}>
                <Button
                    title = "정답 확인"
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