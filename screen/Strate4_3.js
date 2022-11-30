import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up4 } from "../Redux/Actions";

const Strate4_3 = (props) => {
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    var count1 = 3;
    var count2 = 3;
    var count3 = 3;
    var count4 = 3;

    const [show1, setShow1] = useState(false); //2번째 화면 상태 값 default는 false로 동작
    const [show2, setShow2] = useState(false); //3번째 화면 상태 값 default는 false로 동작
    const [show3, setShow3] = useState(false); //4번째 화면 상태 값 default는 false로 동작
    const [myTextInput1, setMyTextInput1] = useState("") //1번 답 저장 하는 공간
    const [myTextInput2, setMyTextInput2] = useState("") //2번 답 저장 하는 공간
    const [myTextInput3_1, setMyTextInput3_1] = useState("") //3번 답 저장 하는 공간
    const [myTextInput3_2, setMyTextInput3_2] = useState("") //3번 답 저장 하는 공간
    const [myTextInput4, setMyTextInput4] = useState("") //4번 답 저장 하는 공간

    const onChangeInput1 = (event) => { setMyTextInput1(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }
    const onChangeInput3_1 = (event) => { setMyTextInput3_1(event) }
    const onChangeInput3_2 = (event) => { setMyTextInput3_2(event) }
    const onChangeInput4 = (event) => { setMyTextInput4(event) }

    const correct1 = () => {
        if (myTextInput1 == 84) {
            alert("next");
            setShow1(true) }
        else {
            if(count1 > 0) {
                count1 -= 1;
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
    }

    const correct2 = () => {
        if (myTextInput2 == 21) {
            alert("next");
            setShow2(true) }
        else {
            if(count2 > 0) {
                count2 -= 1;
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
    }

    const correct3 = () => {
        if (myTextInput3_1 == 42 && myTextInput3_2 == 51) {
            alert("next");
            setShow3(true) }
        else {
            if(count3 > 0) {
                count3 -= 1;
                alert("miss you have "+(count3)+" chance");
            }
            else if(count3 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
    }

    const correct4 = () => {
        if (myTextInput4 == 'Faye') {
            dispatch(up4()) //점수 추가 액션 불러오기
            alert("Ok! It looks like Faye scored the most.");
            props.navigation.navigate("Quiz4") }
        else {
            if(count4 > 0) {
                count4 -= 1;
                alert("miss you have "+(count4)+" chance");
            }
            else if(count4 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
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
                               <Text style = {styles.header}>PROMPT.1</Text>
                                <Text style = {styles.quizText}>Each tall rectangle is equal to the number of points that Elena won.{"\n"}{"\n"}
                                    How many points are ALL of the tall rectangles together?
                                </Text>
                            </View>
                            <TextInput
                             style = {styles.textInput}
                             placeholder="Answer"
                             value = {myTextInput1}
                             onChangeText = {onChangeInput1}/>
                        </View >

                        <View style = {styles.checkButton}>
                            <Button
                             title="check & next"
                             color='#8463ff'
                             onPress = {correct1}/>
                        </View>
                    
                        {/* 조건 연산자 사용 Ex. {조건 ? view : null} 초기 값이 false이기 때문에 null값이 선택되었다가 true로 바뀌면 view출력 */}
                        {show1 ? (
                        <View>
                            <View style = {styles.quizSpace}>
                                <View style = {{alignItems:'center'}}>
                                    <Text style = {styles.header}>PROMPT.2</Text>
                                    <Text style = {styles.quizText}>Ok, so the four bars represent 84 points.{"\n"}{"\n"}
                                        Then how many points did Elena score?
                                    </Text>
                                </View>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput2}
                                 onChangeText = {onChangeInput2}/>
                            </View>

                            <View style = {styles.checkButton}>
                                <Button
                                 title="check & next"
                                 color='#8463ff'
                                 onPress = {correct2}/>
                            </View>
                        </View>
                        ): null}

                        {show2 ? (
                        <View>
                            <View style = {styles.quizSpace}>
                                <View style = {{alignItems:'center'}}>
                                    <Text style = {styles.header}>== PROMPT.3 ==</Text>
                                    <Text style = {styles.quizText}>That seems correct.{"\n"}{"\n"}
                                        So then, how many points did Karla and Faye score?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Text style = {{fontSize:18}}>Karla:</Text>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput3_1}
                                     onChangeText = {onChangeInput3_1}
                                     maxLength = {6}/>

                                    <Text style = {{fontSize:18}}>Faye:</Text>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput3_2}
                                     onChangeText = {onChangeInput3_2}
                                     maxLength = {6}/>
                                </View>
                            </View>

                            <View style = {styles.checkButton}>
                                <Button
                                 title="check & next"
                                 color='#8463ff'
                                 onPress = {correct3}/>
                            </View>
                        </View>
                        ): null}

                        {show3 ? (
                        <View>
                            <View style = {styles.quizSpace}>
                                <View style = {{alignItems:'center'}}>
                                    <Text style = {styles.header}>== PROMPT.4 ==</Text>
                                    <Text style = {styles.quizText}>So who scored the most?
                                    </Text>
                                </View>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput4}
                                 onChangeText = {onChangeInput4}/>
                            </View>

                            <View style = {styles.checkButton}>
                                <Button
                                 title="submit"
                                 color='#8463ff'
                                 onPress = {correct4}/>
                            </View>
                        </View>
                        ): null}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        paddingTop:15,
        paddingBottom:30,
        backgroundColor: '#eefbff'
    },
    header: {
        padding:12,
        fontSize:20,
        textDecorationLine:'underline'
    },
    quizSpace: {
        padding:4,
        margin:20,
        marginTop:10,
        borderRadius:10,
        borderWidth:0,
        borderColor:'black',
        backgroundColor:'#fbf3ff'
    },
    quizText: {
        fontSize:18
    },
    textInput: {
        marginTop:15,
        marginBottom:15,
        marginLeft:10,
        marginRight:10,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#d6d6d6',
        backgroundColor:'white',
    },
    checkButton: {
        marginLeft:100,
        marginRight:100,
        marginBottom:20,
        marginTop:10
    }
}); 

export default Strate4_3