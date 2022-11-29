import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView, ScrollView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up8, change8_3, cor, wrong, unquiz } from "../Redux/Actions";

const Strate8_3 = (props) => {
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    const [count1, setCount1] = useState(3)     //11-28추가
    const [count2, setCount2] = useState(3)     //11-28추가
    const [count3, setCount3] = useState(3)     //11-28추가
    const decrease1 = () => {                   //11-28추가
        setCount1(count1-1);                    //11-28추가
    }                                           //11-28추가
    const decrease2 = () => {                   //11-28추가
        setCount2(count2-1);                    //11-28추가
    }                                           //11-28추가
    const decrease3 = () => {                   //11-28추가
        setCount3(count3-1);                    //11-28추가
    }                                           //11-28추가

    const [show1, setShow1] = useState(false);              //2번째 화면 상태 값 default는 false로 동작
    const [show2, setShow2] = useState(false);              //3번째 화면 상태 값 default는 false로 동작
    const [myTextInput1, setMyTextInput1] = useState("")    //1번 답 저장 하는 공간
    const [myTextInput2, setMyTextInput2] = useState("")    //2번 답 저장 하는 공간
    const [myTextInput3, setMyTextInput3] = useState("")    //3번 답 저장 하는 공간
    const onChangeInput1 = (event) => {
        setMyTextInput1(event)
    }
    const onChangeInput2 = (event) => {
        setMyTextInput2(event)
    }
    const onChangeInput3 = (event) => {
        setMyTextInput3(event)
    }
    const correct1 = () => {
        if (myTextInput1 == 11) {
            alert("next");
            setShow1(true)
        } else {
            if(count1 > 0) {
                decrease1();            //11.28추가
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                dispatch(change8_3())          //11-28(2)추가
                dispatch(wrong());          //11-29추가
                dispatch(unquiz());         //11-29추가
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
            }
        }
    }
    const correct2 = () => {
        if (myTextInput2 == 11) {
            alert("next");
            setShow2(true)
        } else {
            if(count2 > 0) {
                decrease2();            //11.28추가
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                dispatch(change8_3())          //11-28(2)추가
                dispatch(wrong());          //11-29추가
                dispatch(unquiz());         //11-29추가
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
            }
        }
    }
    const correct3 = () => {
        if (myTextInput3 == 11) {
            dispatch(change8_3())          //11-28(2)추가
            dispatch(up8()) //점수 추가 액션 불러오기
            dispatch(cor());          //11-29추가
            dispatch(unquiz());         //11-29추가
            alert("Nice work! That’s correct!");
            props.navigation.navigate("Quiz8")
        } else {
            if(count3 > 0) {
                decrease3();            //11.28추가
                alert("miss you have "+(count3)+" chance");
            }
            else if(count3 == 0) {
                dispatch(change8_3())          //11-28(2)추가
                dispatch(wrong());          //11-29추가
                dispatch(unquiz());         //11-29추가
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
            }
        }
    }
    return (
        
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style ={{width:"100%"}}>    
            <View style = {styles.container}>
                <View style = {styles.textcon}>
                <Text style = {styles.text}>Ok, you want to try adding up. 
                Let’s start by thinking about the two sides along the length of the garden. 
                How much fence will Owen use for those sides?
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
                {show1 ? (
                <View>
                    <View style = {styles.textcon2}>
                    <Text style = {styles.text}>
                    ll right, you say he’ll use 50 feet of fencing for the two sides along the length. 
                    Now, how much fencing can you add without going over 80 feet?
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
                {show2 ? (
                    <View>
                    <View style = {styles.textcon3}>
                    <Text style = {styles.text}>
                    All right, so if you can add 30 feet of fencing before running out, then how wide could the garden be?
                    </Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="answer."
                    value = {myTextInput3}
                    onChangeText = {onChangeInput3}
                    />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title = "check"
                            onPress = {correct3}
                        />
                    </View>
                </View>
                ):null}
            </View>
            </ScrollView>
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
        height: 120,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    textcon2: {
        backgroundColor: 'white',
        height: 120,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    textcon3: {
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

export default Strate8_3