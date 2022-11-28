import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up8 } from "../Redux/Actions";

const Strate8_1 = (props) => {
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    var count1 = 3;
    var count3 = 3;
    var count4 = 3;

    const [show1, setShow1] = useState(false); //2번째 화면 상태 값 default는 false로 동작
    const [show2, setShow2] = useState(false); //3번째 화면 상태 값 default는 false로 동작
    const [show3, setShow3] = useState(false); //4번째 화면 상태 값 default는 false로 동작
    const [myTextInput1, setMyTextInput1] = useState("") //1번 답 저장 하는 공간
    const [myTextInput2, setMyTextInput2] = useState("") //2번 답 저장 하는 공간
    const [myTextInput3, setMyTextInput3] = useState("") //3번 답 저장 하는 공간
    const [myTextInput4, setMyTextInput4] = useState("") //4번 답 저장 하는 공간

    const onChangeInput1 = (event) => { setMyTextInput1(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }
    const onChangeInput3 = (event) => { setMyTextInput3(event) }
    const onChangeInput4 = (event) => { setMyTextInput4(event) }

    const correct1 = () => {
        if (myTextInput1 == 50) {
            alert("next");
            setShow1(true) }
        else {
            if(count1 > 0) {
                count1 -= 1;
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
            } }
    }

    const correct2 = () => {setShow2(true)}

    const correct3 = () => {
        if (myTextInput3 == myTextInput2 * 2) {
            alert("next");
            setShow3(true) }
        else {
            if(count3 > 0) {
                count3 -= 1;
                alert("miss you have "+(count3)+" chance");
            }
            else if(count3 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz8")
            } }
    }

    const correct4 = () => {
        if (myTextInput4 == 80) {
            dispatch(up8()) //점수 추가 액션 불러오기
            alert("Hey, that’s exactly 80 feet of fencing! It seems that 15 feet is a reasonable answer!");
            props.navigation.navigate("Quiz8") }
        else {
            if(count4 > 0) {
                count4 -= 1;
                alert("miss you have "+(count4)+" chance");
            }
            else if(count4 == 0) {
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
                                <Text style = {styles.quizText}>Ok, you want to guess and check.{"\n"}{"\n"}
                                    First, how much fencing will he need for the two sides of the fence that go along the length of the garden?
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1}
                                 onChangeText = {onChangeInput1}
                                 maxLength = {10}/>
                                <Text style = {{fontSize:18}}>feet</Text>
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
                                    <Text style = {styles.quizText}>Ok, you said he will need 50 feet of fencing for the sides that go along the length of the garden.{"\n"}{"\n"}
                                        So, what is the widest garden that you think he could make?
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
                                    <Text style = {styles.quizText}>Ok, so you’re guessing the garden would be [x] feet wide.{"\n"}{"\n"}
                                        How much fencing would he need to make the two sides that go along the width?
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
                                    <Text style = {styles.quizText}>Ok, if that’s true, then how much fencing would he use all together to make his rectangular garden fence? work!
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

export default Strate8_1