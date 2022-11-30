import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change5, up5 } from "../Redux/Actions";

const Quiz5 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])
    
    const dispatch = useDispatch()

    const ch5_1 = useSelector((state) => state.Change5_1)
    const ch5_2 = useSelector((state) => state.Change5_2)
    const ch5_3 = useSelector((state) => state.Change5_3)
    const [disable1, setdisable1] = useState(false);
    const [disable2, setdisable2] = useState(false);
    const [disable3, setdisable3] = useState(false);

    function button1() {
        if(ch5_1 == 0) { setdisable1(false) }
        else if(ch5_1 == 1) { setdisable1(true) }
    }
    useEffect(()=>{ button1() },[ch5_1])

    function button2() {
        if(ch5_2 == 0) { setdisable2(false) }
        else if(ch5_2 == 1) { setdisable2(true) }
    }
    useEffect(()=>{ button2() },[ch5_2])

    function button3() {
        if(ch5_3 == 0) { setdisable3(false) }
        else if(ch5_3 == 1) { setdisable3(true) }
    }
    useEffect(()=>{ button3() },[ch5_3])

    const [show,setShow] = useState(false);
    const showme = () => { setShow(true); }

    const check=()=>{
        dispatch(up5())
        dispatch(change5())
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
                                <Text style = {styles.quizText}>Mario is setting up a new tent during a camping trip.{"\n"}
                                    The tent came with 7 feet of rope.{"\n"}The instructions are to use 34.5 inches of the rope to tie a tarp on top of the tent.{"\n"} 
                                    Then, the remaining rope should be cut into 8¼-inch sections to tie the tent to stakes in the ground.{"\n"}  
                                    Mario will use all of the rope as instructed.{"\n"}{"\n"}  
                                    Write and solve an equation to determine the number of 8¼-inch sections of rope Mario can cut from the rope.
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
                                 title = "Write equations to solve the problem"
                                 onPress = {() => {props.navigation.navigate("Strate5_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable2}
                                 title = {"Add on from 34.5 inches" + "\n" + "until I use up all the rope"}
                                 onPress = {() => {props.navigation.navigate("Strate5_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 disabled = {disable3}
                                 title = "Subtract from the total until I get to 0"
                                 onPress = {() => {props.navigation.navigate("Strate5_3")}}/>
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

export default Quiz5