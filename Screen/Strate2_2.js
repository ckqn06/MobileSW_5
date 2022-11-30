import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up2, change2_2, cor, wrong, unquiz } from "../Redux/Actions";

const Strate2_2 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch()
    
    const [count1, setCount1] = useState(2)
    const [count2, setCount2] = useState(2)
    const decrease1 = () => { setCount1(count1-1); }
    const decrease2 = () => { setCount2(count2-1); }

    const [show, setShow] = useState(false); 
    const [myTextInput1_1, setMyTextInput1_1] = useState("") 
    const [myTextInput1_2, setMyTextInput1_2] = useState("") 
    const [myTextInput1_3, setMyTextInput1_3] = useState("") 
    const [myTextInput2, setMyTextInput2] = useState("") 

    const onChangeInput1_1 = (event) => { setMyTextInput1_1(event) }
    const onChangeInput1_2 = (event) => { setMyTextInput1_2(event) }
    const onChangeInput1_3 = (event) => { setMyTextInput1_3(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }

    const correct1 = () => {
        if (myTextInput1_3==22 && (myTextInput1_1=='16 1/8' && myTextInput1_2=='m') || (myTextInput1_1=='m' && myTextInput1_2=='16 1/8')) {
            alert("next");
            setShow(true) }
        else {
            if(count1 > 0) {
                decrease1();
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                dispatch(change2_2())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz2")
            } }
    }

    const correct2 = () => {
        if (myTextInput2 == '5 7/8') {
            dispatch(up2())
            dispatch(change2_2())
            dispatch(cor())
            dispatch(unquiz())
            alert("Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal!");
            props.navigation.navigate("Quiz2") }
        else {
            if(count2 > 0) {
                decrease2();
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                dispatch(change2_2())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz2")
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
                                <Text style = {styles.quizText}>What equation will represent the situation?{"\n"}{"\n"} 
                                    Use the letter “m” as your vairable
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_1}
                                 onChangeText = {onChangeInput1_1}
                                 maxLength = {6}/>
                                <Text style = {{fontSize:18}}>+</Text>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_2}
                                 onChangeText = {onChangeInput1_2}
                                 maxLength = {6}/>
                                <Text style = {{fontSize:18}}>=</Text>

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
                        {show ? (
                        <View>
                            <View style = {styles.quizSpace}>
                                <View style = {{alignItems:'center'}}>
                                    <Text style = {styles.header}>== PROMPT.2 ==</Text>
                                    <Text style = {styles.quizText}>Your equation is equivalent to{"\n"}16  1/8 + m = 22.{"\n"}{"\n"}
                                        Can you solve for m?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput2}
                                     onChangeText = {onChangeInput2}
                                     maxLength = {10}/>
                                    <Text style = {{fontSize:18}}>miles</Text>
                                </View>
                            </View>

                            <View style = {styles.checkButton}>
                                <Button
                                 title="submit"
                                 color='#8463ff'
                                 onPress = {correct2}/>
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
        marginLeft:30,
        marginRight:30,
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

export default Strate2_2