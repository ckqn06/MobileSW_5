import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up4, change4_3, cor, wrong, unquiz } from "../Redux/Actions";
import { Picker } from '@react-native-picker/picker';

const Strate4_3 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch()

    const [category, setCategory] = useState('Elena');

    const [count1, setCount1] = useState(2) 
    const [count2, setCount2] = useState(2) 
    const [count3, setCount3] = useState(2) 
    const [count4, setCount4] = useState(2) 
    const decrease1 = () => { setCount1(count1-1); }                                
    const decrease2 = () => { setCount2(count2-1); } 
    const decrease3 = () => { setCount3(count3-1); } 
    const decrease4 = () => { setCount4(count4-1); } 

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [myTextInput1, setMyTextInput1] = useState("")
    const [myTextInput2, setMyTextInput2] = useState("")
    const [myTextInput3_1, setMyTextInput3_1] = useState("")
    const [myTextInput3_2, setMyTextInput3_2] = useState("")
    const [myTextInput4, setMyTextInput4] = useState("")

    const onChangeInput1 = (event) => { setMyTextInput1(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }
    const onChangeInput3_1 = (event) => { setMyTextInput3_1(event) }
    const onChangeInput3_2 = (event) => { setMyTextInput3_2(event) }
    const onChangeInput4 = (event) => { setMyTextInput4(event) }

    const correct1 = () => {
        if (myTextInput1 == 84) {
            alert("next");
            setShow1(true) }
        else {
            if(count1 > 0) {
                decrease1();
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                dispatch(change4_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
    }

    const correct2 = () => {
        if (myTextInput2 == 21) {
            alert("next");
            setShow2(true) }
        else {
            if(count2 > 0) {
                decrease2();
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                dispatch(change4_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
    }

    const correct3 = () => {
        if (myTextInput3_1 == 42 && myTextInput3_2 == 51) {
            alert("next");
            setShow3(true) }
        else {
            if(count3 > 0) {
                decrease3();
                alert("miss you have "+(count3)+" chance");
            }
            else if(count3 == 0) {
                dispatch(change4_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            } }
    }

    const correct4 = () => {
        if (category == 'Faye') {
            dispatch(up4())
            dispatch(change4_3())
            dispatch(cor())
            dispatch(unquiz())
            alert("Ok! It looks like Faye scored the most.");
            props.navigation.navigate("Quiz4") }
        else {
            if(count4 > 0) {
                decrease4();
                alert("miss you have "+(count4)+" chance");
            }
            else if(count4 == 0) {
                dispatch(change4_3())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
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
                                <Text style = {styles.quizText}>Each tall rectangle is equal to the number of points that Elena won.{"\n"}{"\n"}
                                    How many points are ALL of the tall rectangles together?
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
                                    <Text style = {styles.quizText}>Ok, so the four bars represent 84 points.{"\n"}{"\n"}
                                        Then how many points did Elena score?
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
                                    <Text style = {styles.quizText}>That seems correct.{"\n"}{"\n"}
                                        So then, how many points did Karla and Faye score?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Text style = {{fontSize:18}}>Karla:</Text>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput3_1}
                                     onChangeText = {onChangeInput3_1}
                                     maxLength = {6}/>

                                    <Text style = {{fontSize:18}}>Faye:</Text>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput3_2}
                                     onChangeText = {onChangeInput3_2}
                                     maxLength = {6}/>
                                </View>
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
                                    <Text style = {styles.quizText}>So who scored the most?
                                    </Text>
                                </View>
                                <View style = {{width:125,height:31,borderRadius:5, justifyContent:'center', marginLeft: 100, marginTop:5,
                                                borderWidth:1, borderColor: 'black', backgroundColor: 'white'}}>
                                <Picker
                                selectedValue = {category}
                                onValueChange = {(itemValue, itemIndex) => setCategory(itemValue)}
                                >
                                    <Picker.Item label = 'Elena' value = "Elena"></Picker.Item>
                                    <Picker.Item label = 'Karla' value = "Karla"></Picker.Item>
                                    <Picker.Item label = 'Faye' value = "Faye"></Picker.Item>
                                </Picker>
                                </View>
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

export default Strate4_3