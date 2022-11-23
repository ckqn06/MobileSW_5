import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
         ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from 'react'

const Quiz1 = (props) => {
    const [show,setShow] = useState(false); //전략 선택 화면 상태 값 default는 false로 동작
    const showme = () => { setShow(true); }

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
                                <Text style = {styles.quizText}>Todd orders pictures from a photographer.{"\n"}
                                    Each picture costs $7.50.{"\n"}
                                    A one-time shipping fee of $3.25 is added{"\n"}to the cost of the order.{"\n"}
                                    The total cost of Todd’s order before tax is $85.75.{"\n"}{"\n"}
                                    How many pictures did Todd order?
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
                                 title = "Write an equation to solve the problem"
                                 onPress = {() => {props.navigation.navigate("Strate1_1")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Add on shipping fee until I get to $85.75"
                                 onPress = {() => {props.navigation.navigate("Strate1_2")}}/>
                            </View>

                            <View style = {styles.strateButton}>
                                <Button
                                 title = "Subtract away from $85,75 until I get to O"
                                 onPress = {() => {props.navigation.navigate("Strate1_3")}}/>
                            </View>

                            <View style = {styles.sendButton}>
                                <Button
                                 title="submit"
                                 color='#8463ff'
                                 onPress ={() => {props.navigation.navigate("QuizList")}}/>
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

export default Quiz1