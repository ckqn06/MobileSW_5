import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView, ScrollView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'


const Strate3_3 = (props) => {
    const [show1, setShow1] = useState(false);              //2번째 화면 상태 값 default는 false로 동작
    const [show2, setShow2] = useState(false);              //3번째 화면 상태 값 default는 false로 동작
    const [myTextInput1, setMyTextInput1] = useState("")    //1번 답 저장 하는 공간
    const [myTextInput2, setMyTextInput2] = useState("")    //2번 답 저장 하는 공간
    const [myTextInput3, setMyTextInput3] = useState("")    //2번 답 저장 하는 공간
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
            alert("miss");
        }
    }
    const correct2 = () => {
        if (myTextInput2 == 11) {
            alert("next");
            setShow2(true)
        } else {
            alert("miss");
        }
    }
    const correct3 = () => {
        if (myTextInput3 == 11) {
            alert("Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!");
            props.navigation.navigate("Quiz3")
        } else {
            alert("miss");
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
                <Text style = {styles.text}>The shorter rectangles are the curtains. 
                The longer one is the left over fabric. 
                How long is the longer rectangle?
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
                    Great job! Can you find out how long all 6 of the shorter rectangles are combined?
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
                    Fantastic! Now let’s find how long each of those shorter rectangles are.
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
        height: 100,
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
    textcon3: {
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

export default Strate3_3