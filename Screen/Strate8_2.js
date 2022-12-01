import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up8, change8_2, cor, wrong, unquiz } from "../Redux/Actions";
import { Picker } from '@react-native-picker/picker';

const Strate8_2 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch()

    const [category1, setCategory1] = useState('+');
    const [category2, setCategory2] = useState('<');

    const [count1, setCount1] = useState(2) 
    const [count2, setCount2] = useState(2) 
    const [count3, setCount3] = useState(2) 
    const decrease1 = () => { setCount1(count1-1); }
    const decrease2 = () => { setCount2(count2-1); }
    const decrease3 = () => { setCount3(count3-1); }

    const [show1, setShow1] = useState(false);              //2번째 화면 상태 값 default는 false로 동작
    const [show2, setShow2] = useState(false);              //3번째 화면 상태 값 default는 false로 동작
    const [myTextInput1_1, setMyTextInput1_1] = useState("") //1번 답 저장 하는 공간
    const [myTextInput1_2, setMyTextInput1_2] = useState("") //1번 답 저장 하는 공간
    const [myTextInput1_3, setMyTextInput1_3] = useState("") //1번 답 저장 하는 공간
    const [myTextInput2_1, setMyTextInput2_1] = useState("")    //2번 답 저장 하는 공간
    const [myTextInput2_2, setMyTextInput2_2] = useState("")    //2번 답 저장 하는 공간
    const [myTextInput3, setMyTextInput3] = useState("")    //3번 답 저장 하는 공간

    const onChangeInput1_1 = (event) => { setMyTextInput1_1(event) }
    const onChangeInput1_2 = (event) => { setMyTextInput1_2(event) }
    const onChangeInput1_3 = (event) => { setMyTextInput1_3(event) }
    const onChangeInput2_1 = (event) => { setMyTextInput2_1(event) }
    const onChangeInput2_2 = (event) => { setMyTextInput2_2(event) }
    const onChangeInput3 = (event) => { setMyTextInput3(event) }
    
    const correct1 = () => {
        if (myTextInput1_2==50 && myTextInput1_3==80 && 
            (myTextInput1_1=='2*w' || myTextInput1_1=='w*2' || myTextInput1_1=='2w' || myTextInput1_1=='w2')) {
            alert("next");
            setShow1(true) }
        else {
            if(count1 > 0) {
                decrease1();
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                dispatch(change8_2())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
            } }
    }

    const correct2 = () => {
        if (myTextInput2_1=='w' && myTextInput2_2==15) {
            alert("next");
            setShow2(true) }
        else {
            if(count2 > 0) {
                decrease2();
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                dispatch(change8_2())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
            } }
    }

    const correct3 = () => {
        if (myTextInput3 == 15) {
            dispatch(up8())
            dispatch(change8_2())
            dispatch(cor())
            dispatch(unquiz())
            alert("Nice work! That’s correct!");
            props.navigation.navigate("Quiz8") }
        else {
            if(count3 > 0) {
                decrease3();
                alert("miss you have "+(count3)+" chance");
            }
            else if(count3 == 0) {
                dispatch(change8_2())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
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
                                    Use the letter w as your variable.
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_1}
                                 onChangeText = {onChangeInput1_1}
                                 maxLength = {6}/>
                                 <View style = {{width:75,height:31,borderRadius:5, justifyContent:'center',
                                                borderWidth:1, borderColor: 'black', backgroundColor: 'white'}}>
                                <Picker
                                selectedValue = {category1}
                                onValueChange = {(itemValue, itemIndex) => setCategory1(itemValue)}
                                >
                                    <Picker.Item label = '+' value = "+"></Picker.Item>
                                    <Picker.Item label = '-' value = "-"></Picker.Item>
                                    <Picker.Item label = '*' value = "*"></Picker.Item>
                                    <Picker.Item label = '/' value = "/"></Picker.Item>
                                </Picker>
                                </View>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_2}
                                 onChangeText = {onChangeInput1_2}
                                 maxLength = {6}/>
                                 <View style = {{width:75,height:31,borderRadius:5, justifyContent:'center',
                                                borderWidth:1, borderColor: 'black', backgroundColor: 'white'}}>
                                <Picker
                                selectedValue = {category2}
                                onValueChange = {(itemValue, itemIndex) => setCategory2(itemValue)}
                                >
                                    <Picker.Item label = '<' value = "<"></Picker.Item>
                                    <Picker.Item label = '>' value = ">"></Picker.Item>
                                    <Picker.Item label = '<=' value = "<="></Picker.Item>
                                    <Picker.Item label = '>=' value = ">="></Picker.Item>
                                </Picker>
                                </View>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_3}
                                 onChangeText = {onChangeInput1_3}
                                 maxLength = {6}/>
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
                                    <Text style = {styles.quizText}>Great! That inequality makes sense.{"\n"}{"\n"}
                                        Now, solve for w and enter your answer as an inequality
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
                                    <Text style = {styles.quizText}>Nice work!{"\n"}{"\n"}
                                        If that’s correct, then how wide could the fence be?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput3}
                                     onChangeText = {onChangeInput3}
                                     maxLength = {10}/>
                                    <Text style = {{fontSize:18}}>feet</Text>
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
        marginLeft:10,
        marginRight:10,
        paddingHorizontal:10,
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

export default Strate8_2