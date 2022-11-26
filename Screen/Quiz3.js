import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { change3, up3 } from "../Redux/Actions";

const Quiz3 = (props) => {
    const dispatch = useDispatch()
    const [show,setShow] = useState(false); //전략 선택 화면 상태 값 default는 false로 동작
    
    const showme = () => {
        dispatch(up3()) //점수 값 -1에서 0으로 변경
        setShow(true);
    }

    const check=()=>{
        dispatch(change3()) //submit버튼 누르면 해당 Quiz번호 버튼 비활성화 하기 위하여 reducers..change1.js state값 1 증가
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
                                <Text style = {styles.quizText}>Jennifer has 84.5 yards of fabric to make curtains. 
                                    She makes 6 identical curtains and has 19.7 yards of fabric remaining. {"\n"}{"\n"}
                                    How many yards of fabric does Jennifer use per curtain?
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
                                 title = {"subtract the extra yards and then" + "\n" + "figure out how much fabric she used for" + "\n" +  "each curtain"}
                                 onPress = {() => {props.navigation.navigate("Strate3_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Write an equation to solve it"
                                 onPress = {() => {props.navigation.navigate("Strate3_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = {"Use a diagram to try and understand" + "\n" + "the problem"}
                                 onPress = {() => {props.navigation.navigate("Strate3_3")}}/>
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

export default Quiz3