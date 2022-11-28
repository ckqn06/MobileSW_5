import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up2 } from "../Redux/Actions";

const Strate2_2 = (props) => {
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.
    const [count1, setCount1] = useState(3)     //11-28추가
    const [count2, setCount2] = useState(3)     //11-28추가
    const decrease1 = () => {                   //11-28추가
        setCount1(count1-1);                    //11-28추가
    }                                           //11-28추가
    const decrease2 = () => {                   //11-28추가
        setCount2(count2-1);                    //11-28추가
    }                                           //11-28추가

    const [show, setShow] = useState(false);                //2번째 화면 상태 값 default는 false로 동작
    const [myTextInput1, setMyTextInput1] = useState("")    //1번 답 저장 하는 공간
    const [myTextInput2, setMyTextInput2] = useState("")    //2번 답 저장 하는 공간
    const onChangeInput1 = (event) => {
        setMyTextInput1(event)
    }
    const onChangeInput2 = (event) => {
        setMyTextInput2(event)
    }
    const correct1 = () => {
        if (myTextInput1 == 11) {
            alert("next");
            setShow(true)
        } else {
            if(count1 > 0) {
                decrease1();                    //11-28추가
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz2")
            }
        }
    }
    const correct2 = () => {
        if (myTextInput2 == 11) {
            dispatch(up2()) //점수 추가 액션 불러오기
            alert("Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal!");
            props.navigation.navigate("Quiz2")
        } else {
            if(count2 > 0) {
                decrease2();                    //11-28추가
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
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
                <Text style = {styles.text}>What equation will represent the situation? 
                Use the letter “m” as your vairable
                </Text>
                <TextInput
                style = {styles.input}
                placeholder="answer"
                value = {myTextInput1}
                onChangeText = {onChangeInput1}
                />
                </View >
                <View style = {styles.button}>
                    <Button
                        title = "check"
                        onPress = {correct1}
                    />
                </View>
                {/* 조건 연산자 사용 Ex. {조건 ? view : null} 초기 값이 false이기 때문에 null값이 선택되었다가 true로 바뀌면 view출력 */}
                {show ? (
                <View>
                    <View style = {styles.textcon2}>
                    <Text style = {styles.text}>"Your equation is equivalent to 16  1/8 + m = 22.
                    Can you solve for m?"
                    </Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="answer."
                    value = {myTextInput2}
                    onChangeText = {onChangeInput2}
                    />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title = "check"
                            onPress = {correct2}
                        />
                    </View>
                </View>
                ): null}
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
    textcon2: {
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

export default Strate2_2