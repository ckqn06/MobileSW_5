import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up1 } from "../Redux/Actions";

const Strate1_2 = (props) => {
    const dispatch = useDispatch()
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const [count, setCount] = useState(2);
    const decrease = () => { setCount(count-1); }   
    
    const [myTextInput, setMyTextInput] = useState("")
    const onChangeInput = (event) => { setMyTextInput(event) }

    const correct = () => {
        if (myTextInput == 11) {
            dispatch(up1()) //점수 추가 액션 불러오기
            alert("Ok! If you’re right, then Todd bought 11 pictures.");
            props.navigation.navigate("Quiz1") } 
        else {
            if(count > 0) {
                decrease();
                alert("miss you have "+(count)+" chance");
            }
            else if(count == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz1")
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
                               <Text style = {styles.header}>== PROMPT ==</Text>
                                <Text style = {styles.quizText}>OK, let’s try that. Start from $3.25.{"\n"}{"\n"}   
                                    How many times do you have to add $7.50 to get to $85.75?
                                </Text>
                            </View>
                            <TextInput
                             style = {styles.textInput}
                             placeholder="Answer"
                             value = {myTextInput}
                             onChangeText = {onChangeInput}/>
                        </View >

                        <View style = {styles.checkButton}>
                            <Button
                             title="submit"
                             color='#8463ff'
                             onPress = {correct}/>
                        </View>
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
        margin:15,
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

export default Strate1_2