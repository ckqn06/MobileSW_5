import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler, 
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up1, change1_1, cor, wrong, unquiz } from "../Redux/Actions";
import { Picker } from '@react-native-picker/picker';

const Strate1_1 = (props) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const dispatch = useDispatch() 

    const [category, setCategory] = useState('+');

    const [count1, setCount1] = useState(2) 
    const [count2, setCount2] = useState(2) 
    const decrease1 = () => { setCount1(count1-1); }
    const decrease2 = () => { setCount2(count2-1); }

    const [show, setShow] = useState(false); 
    const [myTextInput1_1, setMyTextInput1_1] = useState("") 
    const [myTextInput1_2, setMyTextInput1_2] = useState("") 
    const [myTextInput1_3, setMyTextInput1_3] = useState("")
    const [myTextInput2, setMyTextInput2] = useState("")

    const onChangeInput1_1 = (event) => { setMyTextInput1_1(event) }
    const onChangeInput1_2 = (event) => { setMyTextInput1_2(event) }
    const onChangeInput1_3 = (event) => { setMyTextInput1_3(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }
    
    const correct1 = () => {
        if (myTextInput1_1==85.75 && myTextInput1_2==3.25 && category=='+' &&
            (myTextInput1_3=='7.5*p' || myTextInput1_3=='p*7.5' || myTextInput1_3=='7.5p' || myTextInput1_3=='p7.5')) {
            alert("Correct! Let's solve the next prompt.");
            setShow(true)}
        else if (myTextInput1_1==85.75 && myTextInput1_3==3.25 && category=='+' &&
            (myTextInput1_2=='7.5*p' || myTextInput1_2=='p*7.5' || myTextInput1_2=='7.5p' || myTextInput1_2=='p7.5')) {
            alert("Correct! Let's solve the next prompt.");
            setShow(true)}
        else {
            if(count1 > 0) {
                decrease1()
                alert("Wrong.. You have "+(count1)+" chance left.");
            }
            else if(count1 == 0) {
                dispatch(change1_1())
                dispatch(wrong())
                dispatch(unquiz())
                alert("Wrong.. \nYou've used up all the chance.")
                props.navigation.navigate("Quiz1")
            } }
    }

    const correct2 = () => {
        if (myTextInput2 == 11) {
            dispatch(up1())
            dispatch(change1_1())
            dispatch(cor())
            dispatch(unquiz())
            alert("Ok! If you’re right, then Todd bought 11 pictures.");
            props.navigation.navigate("Quiz1") }
        else {
            if(count2 > 0) {
                decrease2();
                alert("Wrong.. You have "+(count2)+" chance left.");
            }
            else if(count2 == 0) {
                dispatch(change1_1())
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
                               <Text style = {styles.header}>== PROMPT.1 ==</Text>
                                <Text style = {styles.quizText}>OK. Using p to represent the number of pictures, 
                                    write an equation that represents how p, $7.50 per picture,{"\n"} 
                                    and the $3.25 shipping fee combine to make $85.75
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_1}
                                 onChangeText = {onChangeInput1_1}
                                 maxLength = {6}/>
                                <Text style = {{fontSize:18}}>=</Text>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_2}
                                 onChangeText = {onChangeInput1_2}
                                 maxLength = {6}/>

                                <View style = {styles.selection}>
                                    <Picker
                                        selectedValue = {category}
                                        onValueChange = {(itemValue) => setCategory(itemValue)}>
                                        <Picker.Item label = '+' value = "+"></Picker.Item>
                                        <Picker.Item label = '-' value = "-"></Picker.Item>
                                        <Picker.Item label = '*' value = "*"></Picker.Item>
                                        <Picker.Item label = '/' value = "/"></Picker.Item>
                                    </Picker>
                                </View>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_3}
                                 onChangeText = {onChangeInput1_3}
                                 maxLength = {6}/>
                            </View>
                        </View >

                        <View style = {styles.checkButton}>
                            <Button
                             title="check & next"
                             color='#8463ff'
                             onPress = {correct1}/>
                        </View>
                    
                        {/* 조건 연산자 사용 Ex. {조건 ? view : null} 초기 값이 false이기 때문에 null값이 선택되었다가 true로 바뀌면 view출력 */}
                        {show ? (
                        <View>
                            <View style = {styles.quizSpace}>
                                <View style = {{alignItems:'center'}}>
                                    <Text style = {styles.header}>== PROMPT.2 ==</Text>
                                    <Text style = {styles.quizText}>Ok, your equation is equivalent to{"\n"} 
                                        3.25 + 7.50p = 85.75{"\n"}{"\n"} 
                                        Can you solve to find the value of p?
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
                                 title="submit"
                                 color='#8463ff'
                                 onPress = {correct2}/>
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
        marginTop:15,
        marginBottom:15,
        marginLeft:8,
        marginRight:8,
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
    },
    selection: {
        justifyContent:'center',
        width:75,
        height:30,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    }
}); 

export default Strate1_1