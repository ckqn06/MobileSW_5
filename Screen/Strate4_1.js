import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up4 } from "../Redux/Actions";

const Strate4_1 = (props) => {
    const dispatch = useDispatch()
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])
    
    const [count2, setCount1] = useState(2) 
    const [count3, setCount2] = useState(2) 
    const [count4, setCount3] = useState(2) 
    const decrease1 = () => { setCount1(count2-1); }                                
    const decrease2 = () => { setCount2(count3-1); } 
    const decrease3 = () => { setCount3(count4-1); } 

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [myTextInput1, setMyTextInput1] = useState("")
    const [myTextInput2_1, setMyTextInput2_1] = useState("")
    const [myTextInput2_2, setMyTextInput2_2] = useState("")
    const [myTextInput3, setMyTextInput3] = useState("")
    const [myTextInput4, setMyTextInput4] = useState("")

    const onChangeInput1 = (event) => { setMyTextInput1(event) }
    const onChangeInput2_1 = (event) => { setMyTextInput2_1(event) }
    const onChangeInput2_2 = (event) => { setMyTextInput2_2(event) }
    const onChangeInput3 = (event) => { setMyTextInput3(event) }
    const onChangeInput4 = (event) => { setMyTextInput4(event) }

    const correct1 = () => { setShow1(true) }

    const correct2 = () => {
        if (myTextInput2_1==myTextInput1*2 && myTextInput2_2==(Number(myTextInput1)+30)) {
            alert("next");
            setShow2(true) }
        else {
            if(count2 > 0) {
                decrease1();
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
    }

    const correct3 = () => {
        if (myTextInput3 == 114) {
            alert("next");
            setShow3(true) }
        else {
            if(count3 > 0) {
                decrease2();
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
                decrease3();
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
                               <Text style = {styles.header}>== PROMPT.1 ==</Text>
                                <Text style = {styles.quizText}>Ok, you want to guess-and-check.{"\n"}{"\n"} 
                                    How many points do you want to guess that Elena won?
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
                                    <Text style = {styles.header}>== PROMPT.2 ==</Text>
                                    <Text style = {styles.quizText}>Ok, you guessed [x] points for Elena.{"\n"}{"\n"}
                                        Then how many would Karla and Faye win?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Text style = {{fontSize:18}}>Karla:</Text>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput2_1}
                                     onChangeText = {onChangeInput2_1}
                                     maxLength = {6}/>

                                    <Text style = {{fontSize:18}}>Elena:</Text>
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
                                        Now, what do Elena’s, Karla’s and Faye’s scores add up to?
                                    </Text>
                                </View>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput3}
                                 onChangeText = {onChangeInput3}/>
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
                                    <Text style = {styles.quizText}>Nice work!{"\n"}{"\n"}
                                        The points for Elena, Karla, and Faye{"\n"}add up to 114, so that seems correct!{"\n"}{"\n"}
                                        So who scored the most?
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
        padding:5,
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

export default Strate4_1