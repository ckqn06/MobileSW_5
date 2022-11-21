import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../Redux/Actions";

const Strate2_3 = (props) => {
    const scoreCounter = useSelector(state => state.scoreCounter) // 앱에서 어디든 
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.
    var coun = 3;
    const [myTextInput, setMyTextInput] = useState("")
    const onChangeInput = (event) => {
        setMyTextInput(event)
    }
    const correct = () => {
        if (myTextInput == 11) {
            dispatch(increment()) //점수 추가 액션 불러오기
            alert("Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal.");
            props.navigation.navigate("Quiz2")
        } else {
            if(count > 0) {
                count -= 1;
                alert("miss you have "+(count)+" chance");
            }
            else if(count == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz2")
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
            <Text style = {styles.text}>Let’s subtract Jen’s miles from Monday through Friday from 22. 
            How many miles does Jen have left to run?
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

export default Strate2_3