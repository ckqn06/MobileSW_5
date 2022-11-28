import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up7 } from "../Redux/Actions";

const Strate7_1 = (props) => {
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

    const [show1, setShow1] = useState(false);              //2번째 화면 상태 값 default는 false로 동작
    const [show2, setShow2] = useState(false);              //3번째 화면 상태 값 default는 false로 동작
    const [myTextInput1_1, setMyTextInput1_1] = useState("") //1번 답 저장 하는 공간
    const [myTextInput1_2, setMyTextInput1_2] = useState("") //1번 답 저장 하는 공간
    const [myTextInput1_3, setMyTextInput1_3] = useState("") //1번 답 저장 하는 공간
    const [myTextInput1_4, setMyTextInput1_4] = useState("") //1번 답 저장 하는 공간
    const [myTextInput2_1, setMyTextInput2_1] = useState("")    //2번 답 저장 하는 공간
    const [myTextInput2_2, setMyTextInput2_2] = useState("")    //2번 답 저장 하는 공간
    const [myTextInput3, setMyTextInput3] = useState("")    //3번 답 저장 하는 공간

    const onChangeInput1_1 = (event) => { setMyTextInput1_1(event) }
    const onChangeInput1_2 = (event) => { setMyTextInput1_2(event) }
    const onChangeInput1_3 = (event) => { setMyTextInput1_3(event) }
    const onChangeInput1_4 = (event) => { setMyTextInput1_4(event) }
    const onChangeInput2_1 = (event) => { setMyTextInput2_1(event) }
    const onChangeInput2_2 = (event) => { setMyTextInput2_2(event) }
    const onChangeInput3 = (event) => { setMyTextInput3(event) }
    
    const correct1 = () => {
        if ((myTextInput1_1=='21*d' || myTextInput1_1=='d*21' || myTextInput1_1=='21d' || myTextInput1_1=='d21') &&
            (myTextInput1_2==250 && (myTextInput1_3==0.10 || myTextInput1_3==0.1)) ||
            (myTextInput1_3==250 && (myTextInput1_2==0.10 || myTextInput1_2==0.1)) &&
            myTextInput1_4==115) {
            alert("next");
            setShow1(true) }
        else {
            if(count1 > 0) {
                count1 -= 1;
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz7")
            } }
    }

    const correct2 = () => {
        if (myTextInput2_1=='d' && myTextInput2_2=='4 2/7') {
            alert("next");
            setShow2(true) }
        else {
            if(count2 > 0) {
                count2 -= 1;
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz7")
            } }
    }

    const correct3 = () => {
        if (myTextInput3 == 4) {
            dispatch(up7()) //점수 추가 액션 불러오기
            alert("Fantastic! Jim can rent the car for 4 days!");
            props.navigation.navigate("Quiz7") }
        else {
            if(count3 > 0) {
                count3 -= 1;
                alert("miss you have "+(count3)+" chance");
            }
            else if(count3 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz7")
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
                               <Text style = {styles.header}>== PROMPT.1 ==</Text>
                                <Text style = {styles.quizText}>What inequality will represent the situation?{"\n"}{"\n"}
                                    Use the letter “d” as your vairable
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_1}
                                 onChangeText = {onChangeInput1_1}
                                 maxLength = {5}/>
                                <Text style = {{fontSize:18}}>+</Text>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_2}
                                 onChangeText = {onChangeInput1_2}
                                 maxLength = {5}/>
                                <Text style = {{fontSize:18}}>*</Text>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_3}
                                 onChangeText = {onChangeInput1_3}
                                 maxLength = {5}/>
                                <Text style = {{fontSize:18}}>{'<='}</Text>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_4}
                                 onChangeText = {onChangeInput1_4}
                                 maxLength = {5}/>
                            </View>
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
                                    <Text style = {styles.header}>== PROMPT.2 ==</Text>
                                    <Text style = {styles.quizText}>Nice job!{"\n"}
                                        That inequality looks good.{"\n"}{"\n"}
                                        Now can you solve for “d” and enter{"\n"}your answer as an inequality?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput2_1}
                                     onChangeText = {onChangeInput2_1}
                                     maxLength = {6}/>
                                    <Text style = {{fontSize:18}}>{'<='}</Text>

                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput2_2}
                                     onChangeText = {onChangeInput2_2}
                                     maxLength = {6}/>
                                </View>
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
                                    <Text style = {styles.quizText}>Great!{"\n"}{"\n"}
                                        Now based on that inequality, how many days can Jim rent the car for?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput3}
                                     onChangeText = {onChangeInput3}
                                     maxLength = {10}/>
                                    <Text style = {{fontSize:18}}>days</Text>
                                </View>
                            </View>

                            <View style = {styles.checkButton}>
                                <Button
                                 title="submit"
                                 color='#8463ff'
                                 onPress = {correct3}/>
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
        padding:5,
        fontSize:17
    },
    quizSpace: {
        padding:5,
        marginTop:10,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#EFEFEF'
    },
    quizText: {
        fontSize:18
    },
    textInput: {
        marginTop:15,
        marginBottom:15,
        marginLeft:5,
        marginRight:5,
        paddingHorizontal:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    checkButton: {
        marginLeft:100,
        marginRight:100,
        marginBottom:20,
        marginTop:10
    }
}); 

export default Strate7_1