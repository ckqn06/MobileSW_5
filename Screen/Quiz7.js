import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change7, up7 } from "../Redux/Actions";

const Quiz7 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])
    
    const dispatch = useDispatch()

    const ch7_1 = useSelector((state) => state.Change7_1)
    const ch7_2 = useSelector((state) => state.Change7_2)
    const ch7_3 = useSelector((state) => state.Change7_3)

    const [disable1, setdisable1] = useState(false);
    const [disable2, setdisable2] = useState(false);
    const [disable3, setdisable3] = useState(false);

    function button1() {
        if(ch7_1 == 0) { setdisable1(false) }
        else if(ch7_1 == 1) { setdisable1(true) }
    }
    useEffect(()=>{ button1() },[ch7_1])

    function button2() {
        if(ch7_2 == 0) { setdisable2(false) }
        else if(ch7_2 == 1) { setdisable2(true) }
    }
    useEffect(()=>{ button2() },[ch7_2])

    function button3() {
        if(ch7_3 == 0) { setdisable3(false) }
        else if(ch7_3 == 1) { setdisable3(true) }
    }
    useEffect(()=>{ button3() },[ch7_3])

    const [show,setShow] = useState(false);
    const showme = () => { setShow(true); }
    
    const check=()=>{
        if(ch7_1!=1 || ch7_2!=1 || ch7_3!=1) {
            alert("There is a strategy that has not been solved yet! \n\nPlease solve all the strategy and submit.") }
        else {
            dispatch(up7())
            dispatch(change7())
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
                                <Text style = {styles.quizText}>Jim needs to rent a car.{"\n"}
                                    A rental company charges $21.00 per day to rent a car and $0.10 for every mile driven.
                                    He will travel 250 miles. He has $115.00 to spend.{"\n"}{"\n"}
                                    How many days can he rent the car for?
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
                                 title = "Write an inequality to solve the problem"
                                 onPress = {() => {props.navigation.navigate("Strate7_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable2}
                                 title = "Guess and check"
                                 onPress = {() => {props.navigation.navigate("Strate7_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable3}
                                 title = "Add up until I find the number of days"
                                 onPress = {() => {props.navigation.navigate("Strate7_3")}}/>
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

export default Quiz7