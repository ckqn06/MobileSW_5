import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change4, up4 } from "../Redux/Actions";

const Quiz4 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])
    
    const dispatch = useDispatch()

    const ch4_1 = useSelector((state) => state.Change4_1)
    const ch4_2 = useSelector((state) => state.Change4_2)
    const ch4_3 = useSelector((state) => state.Change4_3)
    const [disable1, setdisable1] = useState(false);
    const [disable2, setdisable2] = useState(false);
    const [disable3, setdisable3] = useState(false);

    function button1() {
        if(ch4_1 == 0) { setdisable1(false) }
        else if(ch4_1 == 1) { setdisable1(true) }
    }
    useEffect(()=>{ button1() },[ch4_1])

    function button2() {
        if(ch4_2 == 0) { setdisable2(false) }
        else if(ch4_2 == 1) { setdisable2(true) }
    }
    useEffect(()=>{ button2() },[ch4_2])

    function button3() {
        if(ch4_3 == 0) { setdisable3(false) }
        else if(ch4_3 == 1) { setdisable3(true) }
    }
    useEffect(()=>{ button3() },[ch4_3])

    const [show,setShow] = useState(false);
    const showme = () => { setShow(true); }

    const check=()=>{
        dispatch(up4())
        dispatch(change4())
        props.navigation.navigate("QuizList")
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
                                <Text style = {styles.header}>== QUIZ ==</Text>
                                <Text style = {styles.quizText}>Elena, Karla, and Faye are playing a card game where they score points.{"\n"} 
                                    Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does.{"\n"} 
                                    The sum of their three scores is 114. {"\n"}{"\n"}Who scores more points, Karla or Faye?
                                </Text>
                            </View>
                        </View>

                        <View style = {styles.subSpace}>
                            <View style = {{alignItems:'center'}}>
                                <Text style = {styles.header}>== Open-ended Question ==</Text>
                                <Text style = {styles.subText}>What do you think the problem is asking you to do?</Text>
                            </View>
                        </View>

                        <TextInput
                         style = {styles.textInput}
                         placeholder = "Insert any answer">
                        </TextInput>

                        <View style = {styles.sendButton}>
                            <Button
                             title="send"
                             color='#8463ff'
                             onPress = {showme}/>
                        </View>
            
                        {show ? (
                        <View>
                            <View style = {{padding:10, alignItems:'center'}}>
                                <Text style = {styles.subText}>Which strategy do you want to use?</Text>
                            </View>
                            
                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable1}
                                 title = {"Guess the number of points" + "\n" + "and see if it works."}
                                 onPress = {() => {props.navigation.navigate("Strate4_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable2}
                                 title = "Write equations to solve the problem"
                                 onPress = {() => {props.navigation.navigate("Strate4_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable3}
                                 title = {"Use a diagram to try" + "\n" + "and understand the problem"}
                                 onPress = {() => {props.navigation.navigate("Strate4_3")}}/>
                            </View>

                            <View style = {styles.sendButton}>
                                <Button
                                 title="submit"
                                 color='#8463ff'
                                 onPress ={check}/>
                            </View>
                        </View>
                        ):null}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        paddingBottom:10,
        backgroundColor: '#eefbff'
    },
    header: {
        padding:3,
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
        fontSize:17
    },
    subSpace: {
        padding:5,
        marginLeft:20,
        marginRight:20,
        borderRadius:15,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#EFEFEF'
    },
    subText: {
        fontSize:20
    },
    textInput: {
        marginTop:10,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        paddingHorizontal:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    sendButton: {
        marginLeft:100,
        marginRight:100,
        marginBottom:10,
        marginTop:10
    },
    strateButton: {
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
    }
});

export default Quiz4