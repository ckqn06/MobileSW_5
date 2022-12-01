import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { up5, change5_1, cor, wrong, unquiz } from "../Redux/Actions";
import { Picker } from '@react-native-picker/picker';

const Strate5_1 = (props) => {
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
        if (myTextInput1_3==84 &&
            (myTextInput1_1==34.5 && (category == '+') && (myTextInput1_2=='8.25*m' || myTextInput1_2=='m*8.25' || myTextInput1_2=='8.25m' || myTextInput1_2=='m8.25')) ||
            (myTextInput1_2==34.5 && (category == '+') && (myTextInput1_1=='8.25*m' || myTextInput1_1=='m*8.25' || myTextInput1_1=='8.25m' || myTextInput1_1=='m8.25'))) {
            alert("next");
            setShow(true) }
        else {
            if(count1 > 0) {
                decrease1();
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                dispatch(change5_1())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz5")
            } }
    }

    const correct2 = () => {
        if (myTextInput2 == 6) {
            dispatch(up5())
            dispatch(change5_1())
            dispatch(cor())
            dispatch(unquiz())
            alert("Nice! Mario can cut 6 sections of rope. Let’s try a different method!");
            props.navigation.navigate("Quiz5") }
        else {
            if(count2 > 0) {
                decrease2();
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                dispatch(change5_1())
                dispatch(wrong())
                dispatch(unquiz())
                alert("miss you have no chance")
                props.navigation.navigate("Quiz5")
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
                                <Text style = {styles.quizText}>What equation will represent the situation?{"\n"}{"\n"}
                                    Use the letter “m” as your vairable
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_1}
                                 onChangeText = {onChangeInput1_1}
                                 maxLength = {6}/>
                                <View style = {{width:75,height:31,borderRadius:5, justifyContent:'center',
                                                borderWidth:1, borderColor: 'black', backgroundColor: 'white'}}>
                                <Picker
                                selectedValue = {category}
                                onValueChange = {(itemValue, itemIndex) => setCategory(itemValue)}
                                >
                                    <Picker.Item label = '+' value = "+"></Picker.Item>
                                    <Picker.Item label = '-' value = "-"></Picker.Item>
                                    <Picker.Item label = '*' value = "*"></Picker.Item>
                                    <Picker.Item label = '/' value = "/"></Picker.Item>
                                </Picker>
                                </View>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_2}
                                 onChangeText = {onChangeInput1_2}
                                 maxLength = {6}/>
                                <Text style = {{fontSize:18}}>=</Text>

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
                                    <Text style = {styles.quizText}>Nice job! That equation looks good.{"\n"}{"\n"}
                                        Now can you solve for “m”?
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <TextInput
                                     style = {styles.textInput}
                                     placeholder="Answer"
                                     value = {myTextInput2}
                                     onChangeText = {onChangeInput2}
                                     maxLength = {10}/>
                                    <Text style = {{fontSize:18}}>sections</Text>
                                </View>
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
        backgroundColor: '#eefbff'
    },
    header: {
        padding:5,
        fontSize:17
    },
    quizSpace: {
        padding:5,
        marginTop:10,
        marginBottom:10,
        marginLeft:5,
        marginRight:5,
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

export default Strate5_1