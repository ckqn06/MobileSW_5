import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change1, up1 } from "../Redux/Actions";

const Quiz1 = (props) => {
    const dispatch = useDispatch()

    const ch1_1 = useSelector((state) => state.Change1_1)
    const ch1_2 = useSelector((state) => state.Change1_2)
    const ch1_3 = useSelector((state) => state.Change1_3)
    const [disable1, setdisable1] = useState(false);
    const [disable2, setdisable2] = useState(false);
    const [disable3, setdisable3] = useState(false);
    function button1() {
        if(ch1_1 == 0) {
            setdisable1(false)
        } else if(ch1_1 == 1) {
            setdisable1(true)
        }
    }
    useEffect(()=>{
        button1()
    },[ch1_1])

    function button2() {
        if(ch1_2 == 0) {
            setdisable2(false)
        } else if(ch1_2 == 1) {
            setdisable2(true)
        }
    }
    useEffect(()=>{
        button2()
    },[ch1_2])

    function button3() {
        if(ch1_3 == 0) {
            setdisable3(false)
        } else if(ch1_3 == 1) {
            setdisable3(true)
        }
    }
    useEffect(()=>{
        button3()
    },[ch1_3])


    const [show,setShow] = useState(false); //전략 선택 화면 상태 값 default는 false로 동작
    const showme = () => { setShow(true); }

    const check=()=>{
        dispatch(up1()) //점수 값 -1에서 0으로 변경
        dispatch(change1()) //submit버튼 누르면 해당 Quiz번호 버튼 비활성화 하기 위하여 reducers..change1.js state값 1 증가
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
                                <Text style = {styles.quizText}>Todd orders pictures from a photographer.{"\n"}
                                    Each picture costs $7.50.{"\n"}
                                    A one-time shipping fee of $3.25 is added{"\n"}to the cost of the order.{"\n"}
                                    The total cost of Todd’s order before tax is $85.75.{"\n"}{"\n"}
                                    How many pictures did Todd order?
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
                                 disabled = {disable1}
                                 title = "Write an equation to solve the problem"
                                 onPress = {() => {props.navigation.navigate("Strate1_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                disabled = {disable2}
                                 title = "Add on shipping fee until I get to $85.75"
                                 onPress = {() => {props.navigation.navigate("Strate1_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                disabled = {disable3}
                                 title = "Subtract away from $85,75 until I get to O"
                                 onPress = {() => {props.navigation.navigate("Strate1_3")}}/>
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

export default Quiz1