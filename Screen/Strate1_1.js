import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'

const Strate1_1 = (props) => {
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
            alert("맞췄습니다.");
            setShow(true)
        } else {
            alert("오답입니다.");
        }
    }
    const correct2 = () => {
        if (myTextInput2 == 11) {
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
                <Text style = {styles.text}>OK. Using p to represent the number of pictures, 
                write an equation that represents how p, $7.50 per picture, 
                and the $3.25 shipping fee combine to make $85.75
                </Text>
                <TextInput
                style = {styles.input}
                placeholder="식을 입력해주세요."
                value = {myTextInput1}
                onChangeText = {onChangeInput1}
                />
                </View >
                <View style = {styles.button}>
                    <Button
                        title = "정답 확인"
                        onPress = {correct1}
                    />
                </View>
                {/* 조건 연산자 사용 Ex. {조건 ? view : null} 초기 값이 false이기 때문에 null값이 선택되었다가 true로 바뀌면 view출력 */}
                {show ? (
                <View>
                    <View style = {styles.textcon}>
                    <Text style = {styles.text}>OK. Using p to represent the number of pictures, 
                    write an equation that represents how p, $7.50 per picture, 
                    and the $3.25 shipping fee combine to make $85.75
                    </Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="답을 입력해주세요."
                    value = {myTextInput2}
                    onChangeText = {onChangeInput2}
                    />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title = "정답 확인"
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
        height: 150,
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

export default Strate1_1