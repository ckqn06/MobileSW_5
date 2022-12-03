import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up8, change8_3, cor, wrong, unquiz } from "../Redux/Actions";

const Strate8_3 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch()

    const [count1, setCount1] = useState(2) 
    const [count2, setCount2] = useState(2) 
    const [count3, setCount3] = useState(2) 
    const decrease1 = () => { setCount1(count1-1); }
    const decrease2 = () => { setCount2(count2-1); }
    const decrease3 = () => { setCount3(count3-1); }

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [myTextInput1, setMyTextInput1] = useState("")
    const [myTextInput2, setMyTextInput2] = useState("")
    const [myTextInput3, setMyTextInput3] = useState("")

    const onChangeInput1 = (event) => { setMyTextInput1(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }
    const onChangeInput3 = (event) => { setMyTextInput3(event) }
    
    const correct1 = () => {
        if (myTextInput1 == 50) {
            alert("Correct! Let's solve the next prompt.");
            setShow1(true) }
        else {
            if(count1 > 0) {
                decrease1();
                alert("Wrong.. You have "+(count1)+" chance left.");
            }
            else if(count1 == 0) {
                dispatch(change8_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("Wrong.. \nYou've used up all the chance.")
                props.navigation.navigate("Quiz8")
            } }
    }

    const correct2 = () => {
        if (myTextInput2 == 30) {
            alert("Correct! Let's solve the next prompt.");
            setShow2(true) }
        else {
            if(count2 > 0) {
                decrease2();
                alert("Wrong.. You have "+(count2)+" chance left.");
            }
            else if(count2 == 0) {
                dispatch(change8_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("Wrong.. \nYou've used up all the chance.")
                props.navigation.navigate("Quiz8")
            } }
    }

    const correct3 = () => {
        if (myTextInput3 == 15) {
            dispatch(up8())
            dispatch(change8_3())
            dispatch(cor())
            dispatch(unquiz())
            alert("Nice work! That’s correct!");
            props.navigation.navigate("Quiz8") }
        else {
            if(count3 > 0) {
                decrease3();
                alert("Wrong.. You have "+(count3)+" chance left.");
            }
            else if(count3 == 0) {
                dispatch(change8_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("Wrong.. \nYou've used up all the chance.")
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
                                <Text style = {styles.quizText}>Ok, you want to try adding up.{"\n"}
                                    Let’s start by thinking about the two sides along the length of the garden.{"\n"}{"\n"}
                                    How much fence will Owen use for those sides?
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
                                    <Text style = {styles.quizText}>ll right, you say he’ll use 50 feet of fencing for the two sides along the length.{"\n"}{"\n"}
                                        Now, how much fencing can you add without going over 80 feet?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput2}
                                     onChangeText = {onChangeInput2}
                                     maxLength = {10}/>
                                    <Text style = {{fontSize:18}}>feet</Text>
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
                                    <Text style = {styles.quizText}>All right, so if you can add 30 feet of fencing before running out, then how wide could the garden be?
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
        backgroundColor:'#eefbff'
    },
    header: {
        padding:5,
        fontSize:20,
        textDecorationLine:'underline'
    },
    quizSpace: {
        padding:5,
        marginTop:10,
        marginBottom:10,
        marginLeft:15,
        marginRight:15,
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

export default Strate8_3