import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up1, change1_2, cor, wrong, unquiz } from "../Redux/Actions";

const Strate1_2 = (props) => {
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    const [count, setCount] = useState(3);  //11-28추가
    const decrease = () => {                //11-28추가
        setCount(count-1);                  //11-28추가
    }                                       //11-28추가

    const [myTextInput, setMyTextInput] = useState("")
    const onChangeInput = (event) => {
        setMyTextInput(event)
    }
    const correct = () => {
        if (myTextInput == 11) {
            dispatch(change1_2())           //11-28(2)추가
            dispatch(up1()) //점수 추가 액션 불러오기
            dispatch(cor());            //11-29추가
            dispatch(unquiz());         //11-29추가
            alert("Ok! If you’re right, then Todd bought 11 pictures.");
            props.navigation.navigate("Quiz1")
        } else {
            if(count > 0) {
                decrease();   //11-28추가
                alert("miss you have "+(count)+" chance");
            }
            else if(count == 0) {
                dispatch(change1_2())           //11-28(2)추가
                dispatch(wrong());          //11-29추가
                dispatch(unquiz());         //11-29추가
                alert("miss you have no chance")
                props.navigation.navigate("Quiz1")
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