import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up1, change1_3, cor, wrong, unquiz } from "../Redux/Actions";

const Strate1_3 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch()

    const [count, setCount] = useState(2);
    const decrease = () => { setCount(count-1); }  

    const [myTextInput, setMyTextInput] = useState("")
    const onChangeInput = (event) => { setMyTextInput(event) }

    const correct = () => {
        if (myTextInput == 11) {
            dispatch(up1())
            dispatch(change1_3())
            dispatch(cor())
            dispatch(unquiz())
            alert("Ok! If you’re right, then Todd bought 11 pictures.");
            props.navigation.navigate("Quiz1") }
        else {
            if(count > 0) {
                decrease();
                alert("Wrong.. You have "+(count)+" chance left.");
            }
            else if(count == 0) {
                dispatch(change1_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("Wrong.. \nYou've used up all the chance.")
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
                                <Text style = {styles.quizText}>OK. Start with $85.50.{"\n"}{"\n"}
                                    Subtract the shipping fee, then count how many times you have to subtract
                                    $7.50 to get to 0.
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
        backgroundColor:'#eefbff'
    },
    header: {
        padding:5,
        fontSize:20,
        textDecorationLine:'underline'
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

export default Strate1_3