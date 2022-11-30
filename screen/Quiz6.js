import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change6, up6 } from "../Redux/Actions";

const Quiz6 = (props) => {
    const dispatch = useDispatch()
    const [show,setShow] = useState(false); //전략 선택 화면 상태 값 default는 false로 동작
    
    const showme = () => { setShow(true); }
    
    const check=()=>{
        dispatch(up6()) //점수 값 -1에서 0으로 변경
        dispatch(change6()) //submit버튼 누르면 해당 Quiz번호 버튼 비활성화 하기 위하여 reducers..change1.js state값 1 증가
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
                                <Text style = {styles.header}>QUIZ</Text>
                                <Text style = {styles.quizText}>A rectangle has a length that is unknown but is 12 inches longer than its width.
                                    The perimeter of the rectangle is 104 inches.{"\n"}{"\n"} 
                                    What is the width of the rectangle?
                                </Text>
                            </View>
                        </View>

                        <View style = {styles.subSpace}>
                            <View style = {{alignItems:'center'}}>
                                <Text style = {styles.header}>Open-ended Question</Text>
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
                                 title = "Write an equation to solve it"
                                 color='#bd96ff'
                                 onPress = {() => {props.navigation.navigate("Strate6_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Guess and check"
                                 color='#bd96ff'
                                 onPress = {() => {props.navigation.navigate("Strate6_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Use a diagram to understand the problem"
                                 color='#bd96ff'
                                 onPress = {() => {props.navigation.navigate("Strate6_3")}}/>
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
        fontSize:20,
        textDecorationLine:'underline'
    },
    quizSpace: {
        padding:4,
        margin:20,
        borderRadius:32,
        borderWidth:0,
        borderColor:'black',
        backgroundColor:'#fbf3ff',
        paddingBottom:60,
    },
    quizText: {
        fontSize:18
    },
    subSpace: {
        padding:5,
        bottom:60,
        paddingTop:24,
        paddingBottom:24,
        marginLeft:20,
        marginRight:20,
        borderRadius:32,
        borderWidth:0,
        borderTopStartRadius:0,
        borderTopEndRadius:0,
        borderColor:'black',
        backgroundColor:'#ffffff'
    },
    subText: {
        padding:10,
        paddingLeft:24,
        paddingRight:24,
        fontSize:18,
        borderRadius:8,
        backgroundColor:'#ffffff',
    },
    textInput: {
        marginTop:0,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#d6d6d6',
        backgroundColor:'white',
        
    },
    sendButton: {
        marginLeft:100,
        marginRight:100,
        marginBottom:10,
        marginTop:10,
    },
    strateButton: {
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
    }
}); 

export default Quiz6