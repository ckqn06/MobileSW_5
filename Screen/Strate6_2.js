import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up6, change6_2, cor, wrong, unquiz } from "../Redux/Actions";

const Strate6_2 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch()

    const [count2, setCount1] = useState(2) 
    const [count4, setCount2] = useState(2) 
    const decrease1 = () => { setCount1(count2-1); }                                
    const decrease2 = () => { setCount2(count4-1); } 

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [myTextInput1, setMyTextInput1] = useState("")
    const [myTextInput2, setMyTextInput2] = useState("")
    const [myTextInput3, setMyTextInput3] = useState("")
    const [myTextInput4, setMyTextInput4] = useState("")

    const onChangeInput1 = (event) => { setMyTextInput1(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }
    const onChangeInput3 = (event) => { setMyTextInput3(event) }
    const onChangeInput4 = (event) => { setMyTextInput4(event) }

    const correct1 = () => {setShow1(true)}

    const correct2 = () => {
        if (myTextInput2 == (Number(myTextInput1) + 12)) {
            alert("next");
            setShow2(true) }
        else {
            if(count2 > 0) {
                decrease1();
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                dispatch(change6_2())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz6")
            } }
    }

    const correct3 = () => {
        if (myTextInput3 == 104) {
            dispatch(up6())
            dispatch(change6_2())
            dispatch(cor())
            dispatch(unquiz())
            alert("Nice! The width of the rectangle 20. Let’s try a different method!");
            props.navigation.navigate("Quiz6") }
        else {
            alert("next");
            setShow3(true) }
    }

    const correct4 = () => {
        if (myTextInput4 == 20) {
            dispatch(up6())
            dispatch(change6_2())
            dispatch(cor())
            dispatch(unquiz())
            alert("Nice! The width of the rectangle 20. Let’s try a different method!");
            props.navigation.navigate("Quiz6") }
        else {
            if(count4 > 0) {
                decrease2();
                alert("miss you have "+(count4)+" chance");
            }
            else if(count4 == 0) {
                dispatch(change6_2())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz6")
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
                                    How long do you think the width is?
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
                                    <Text style = {styles.quizText}>Cool, now let’s also guess the length of this rectangle.
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
                                    <Text style = {styles.quizText}>Ok, so you guessed that the width is{"\n"}[w] and the length is [w+12].{"\n"}{"\n"}
                                        Now let’s find the perimeter of the rectangle with these dimensions.
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
                                    <Text style = {styles.quizText}>Great!{"\n"}
                                        You got a perimeter of 104 inches.{"\n"}
                                        Now remember what you guessed.{"\n"}{"\n"}
                                        What is the width of the rectangle?
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
        margin:20,
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

export default Strate6_2