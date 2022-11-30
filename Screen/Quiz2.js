import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change2, up2 } from "../Redux/Actions";

const Quiz2 = (props) => {
    const dispatch = useDispatch()

    const ch2_1 = useSelector((state) => state.Change2_1)
    const ch2_2 = useSelector((state) => state.Change2_2)
    const ch2_3 = useSelector((state) => state.Change2_3)
    const [disable1, setdisable1] = useState(false);
    const [disable2, setdisable2] = useState(false);
    const [disable3, setdisable3] = useState(false);

    function button1() {
        if(ch2_1 == 0) { setdisable1(false) }
        else if(ch2_1 == 1) { setdisable1(true) }
    }
    useEffect(()=>{ button1() },[ch2_1])

    function button2() {
        if(ch2_2 == 0) { setdisable2(false) }
        else if(ch2_2 == 1) { setdisable2(true) }
    }
    useEffect(()=>{ button2() },[ch1_2])

    function button3() {
        if(ch2_3 == 0) { setdisable3(false) }
        else if(ch2_3 == 1) { setdisable3(true) }
    }
    useEffect(()=>{ button3() },[ch2_3])

    const [show,setShow] = useState(false);
    const showme = () => { setShow(true); }

    const check=()=>{
        dispatch(up2())
        dispatch(change2())
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
                                <Text style = {styles.quizText}>Jen wants to run a total of 22 miles in five days. 
                                    The table shows her log for the miles she ran on Monday, Tuesday, Wednesday, and Thursday. {"\n"}{"\n"}
                                    How many miles must Jen run on Friday to reach her goal?
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
                                 title = {"Add up her miles and then find out" + "\n" + "how many more she needs to get to 22 miles"}
                                 onPress = {() => {props.navigation.navigate("Strate2_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Write an equation to solve it"
                                 onPress = {() => {props.navigation.navigate("Strate2_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = {"Subtract her miles from 22" + "\n" + "and see how many are left"}
                                 onPress = {() => {props.navigation.navigate("Strate2_3")}}/>
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

export default Quiz2