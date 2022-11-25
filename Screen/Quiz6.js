import { View, Text, Button, StyleSheet, TextInput, ScrollView,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change6, up6 } from "../Redux/Actions";

const Quiz6 = (props) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);                //전략 선택 화면 상태 값 default는 false로 동작
    const showme = () => {
        dispatch(up6()) //점수 값 -1에서 0으로 변경
        setShow(true);
    }
    const check=()=>{
        dispatch(change6()) //submit버튼 누르면 해당 Quiz번호 버튼 비활성화 하기 위하여 reducers..change1.js state값 1 증가
        props.navigation.navigate("QuizList")
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
            <Text style = {styles.text}>A rectangle has a length that is unknown but is 12 inches longer than its width. 
            The perimeter of the rectangle is 104 inches. {"\n"}{"\n"}
            What is the width of the rectangle?
            </Text>
            </View>

            <View style = {styles.simpletext}>
                <Text style = {styles.text}>
                What do you think the problem is asking you to do?
                </Text>
                <TextInput
                style = {styles.input}
                placeholder="give me any strategy"
                />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "send"
                    onPress = {showme}
                />
            </View>
            {show ? (
            <View>
            <View style = {styles.button}>
            <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                <Button
                    title = "Write an equation to solve it"
                    onPress ={() => {
                        props.navigation.navigate("Strate6_1")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Guess and check"
                    onPress ={() => {
                        props.navigation.navigate("Strate6_2")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Try to use a diagram to understand"
                    onPress ={() => {
                        props.navigation.navigate("Strate6_3")
                    }}
                />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "submit"
                    onPress ={check}
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
        paddingBottom: 10
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        marginTop: 10
    },
    textcon: {
        backgroundColor: 'white',
        height: 175,
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
    simpletext: {
        backgroundColor: 'white',
        height: 60,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        borderRadius: 3,
    },
}); 



export default Quiz6