import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change8, up8 } from "../Redux/Actions";

const Quiz8 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch()

    const ch8_1 = useSelector((state) => state.Change8_1)
    const ch8_2 = useSelector((state) => state.Change8_2)
    const ch8_3 = useSelector((state) => state.Change8_3)

    const [disable1, setdisable1] = useState(false);
    const [disable2, setdisable2] = useState(false);
    const [disable3, setdisable3] = useState(false);

    function button1() {
        if(ch8_1 == 0) { setdisable1(false) }
        else if(ch8_1 == 1) { setdisable1(true) }
    }
    useEffect(()=>{ button1() },[ch8_1])

    function button2() {
        if(ch8_2 == 0) { setdisable2(false) }
        else if(ch8_2 == 1) { setdisable2(true) }
    }
    useEffect(()=>{ button2() },[ch8_2])

    function button3() {
        if(ch8_3 == 0) { setdisable3(false) }
        else if(ch8_3 == 1) { setdisable3(true) }
    }
    useEffect(()=>{ button3() },[ch8_3])

    const [show,setShow] = useState(false);
    const showme = () => { setShow(true); }

    const check=()=>{
        if(ch8_1!=1 || ch8_2!=1 || ch8_3!=1) {
            alert("There is a strategy that has not been solved yet! \n\nPlease solve all the strategy and submit.") }
        else {
            dispatch(up8())
            dispatch(change8())
            props.navigation.navigate("QuizList")
            alert("Successfully submitted!")}
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
                                <Text style = {styles.quizText}>Owen is designing a rectangular garden whose length is 25 feet.{"\n"}
                                    He needs to put fencing all around the exterior of the garden and wants to use less than 80 feet of fencing.{"\n"}{"\n"}
                                    How wide could the garden be?
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
                                 title = "Guess and check"
                                 onPress = {() => {props.navigation.navigate("Strate8_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable2}
                                 title = "Write an inequality to solve the problem"
                                 onPress = {() => {props.navigation.navigate("Strate8_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable3}
                                 title = {"Add up until I figure out" + "\n" + "the width of the garden"}
                                 onPress = {() => {props.navigation.navigate("Strate8_3")}}/>
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
        backgroundColor:'#eefbff'
    },
    header: {
        padding:3,
        fontSize:20,
        textDecorationLine:'underline'
    },
    quizSpace: {
        padding:5,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:0,
        borderWidth:1.5,
        borderColor:'black',
        backgroundColor:'#EFEFEF'
    },
    quizText: {
        fontSize:17
    },
    subSpace: {
        padding:5,
        marginLeft:10,
        marginRight:10,
        borderRadius:15,
        borderWidth:1.5,
        borderTopStartRadius:0,
        borderTopEndRadius:0,
        borderColor:'black',
        backgroundColor:'#EFEFEF'
    },
    subText: {
        padding:7,
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
        marginTop:10
    },
    strateButton: {
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    }
});

export default Quiz8