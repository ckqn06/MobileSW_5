import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up2 } from "../Redux/Actions";

const Strate2_3 = (props) => {
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    var count = 3;

    const [myTextInput, setMyTextInput] = useState("")

    const onChangeInput = (event) => { setMyTextInput(event) }

    const correct = () => {
        if (myTextInput == '5 7/8') {
            dispatch(up2()) //점수 추가 액션 불러오기
            alert("Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal.");
            props.navigation.navigate("Quiz2") } 
        else {
            if(count > 0) {
                count -= 1;
                alert("miss you have "+(count)+" chance");
            }
            else if(count == 0) {
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
                               <Text style = {styles.header}>PROMPT</Text>
                                <Text style = {styles.quizText}>Let’s subtract Jen’s miles from Monday through Friday from 22.{"\n"}{"\n"} 
                                    How many miles does Jen have left to run?
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput}
                                 onChangeText = {onChangeInput}
                                 maxLength = {10}/>
                                <Text style = {{fontSize:18}}>miles</Text>
                            </View>
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

export default Strate2_3