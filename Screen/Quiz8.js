import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change8, up8 } from "../Redux/Actions";

const Quiz8 = (props) => {
    const dispatch = useDispatch()
    const [show,setShow] = useState(false); //전략 선택 화면 상태 값 default는 false로 동작
    
    const showme = () => {
        dispatch(up8()) //점수 값 -1에서 0으로 변경
        setShow(true);
    }

    const check=()=>{
        dispatch(change8()) //submit버튼 누르면 해당 Quiz번호 버튼 비활성화 하기 위하여 reducers..change1.js state값 1 증가
        props.navigation.navigate("QuizList")
    }

    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.mainView}> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
                <ScrollView style ={{width:"100%"}}>
                    <View style = {styles.mainView}>
                        <View style = {styles.quizSpace}>
                            <View style = {{alignItems:'center'}}>
                                <Text style = {styles.header}>== QUIZ ==</Text>
                                <Text style = {styles.quizText}>Owen is designing a rectangular garden whose length is 25 feet.{"\n"}
                                    He needs to put fencing all around the exterior of the garden and wants to use less than 80 feet of fencing.{"\n"}{"\n"}
                                    How wide could the garden be?
                                </Text>
                            </View>
                        </View>

                        <View style = {styles.subSpace}>
                            <View style = {{alignItems:'center'}}>
                                <Text style = {styles.header}>== Open-ended Question ==</Text>
                                <Text style = {styles.subText}>What do you think the problem is asking you to do?</Text>
                            </View>
                        </View>

                        <TextInput
                         style = {styles.textInput}
                         placeholder = "Insert any answer">
                        </TextInput>

                        <View style = {styles.sendButton}>
                            <Button
                             title="send"
                             color='#8463ff'
                             onPress = {showme}/>
                        </View>
            
                        {show ? (
                        <View>
                            <View style = {{padding:10, alignItems:'center'}}>
                                <Text style = {styles.subText}>Which strategy do you want to use?</Text>
                            </View>
                            
                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Guess and check"
                                 onPress = {() => {props.navigation.navigate("Strate8_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Write an inequality to solve the problem"
                                 onPress = {() => {props.navigation.navigate("Strate8_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = {"Add up until I figure out" + "\n" + "the width of the garden"}
                                 onPress = {() => {props.navigation.navigate("Strate8_3")}}/>
                            </View>

                            <View style = {styles.sendButton}>
                                <Button
                                 title="submit"
                                 color='#8463ff'
                                 onPress ={check}/>
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
    mainView: {
        flex:1,
        paddingBottom:10,
        backgroundColor: '#eefbff'
    },
    header: {
        padding:3,
        fontSize:17
    },
    quizSpace: {
        padding:5,
        margin:10,
        borderRadius:5,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#EFEFEF'
    },
    quizText: {
        fontSize:17
    },
    subSpace: {
        padding:5,
        marginLeft:20,
        marginRight:20,
        borderRadius:15,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#EFEFEF'
    },
    subText: {
        fontSize:20
    },
    textInput: {
        marginTop:10,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        paddingHorizontal:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    sendButton: {
        marginLeft:100,
        marginRight:100,
        marginBottom:10,
        marginTop:10
    },
    strateButton: {
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
    }
});

export default Quiz8