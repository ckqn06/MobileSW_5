import { View, Text, Button, StyleSheet, TextInput, ScrollView,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import {useState} from 'react'

const Quiz1 = (props) => {
    const {params} = props.route
    var score1 = params? params.score1:0;
    var score2 = params? params.score2:0;
    var score3 = params? params.score3:0;
    
    var sumScore = score1 + score2 + score3;


    const [show, setShow] = useState(false);                //전략 선택 화면 상태 값 default는 false로 동작
    const showme = () => {
        setShow(true);
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
        <ScrollView style ={{width:"100%"}}>
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>"Todd orders pictures from a photographer. Each picture costs $7.50.
            A one-time shipping fee of $3.25 is added to the cost of the order.
            The total cost of Todd’s order before tax is $85.75.
            {"\n"}{"\n"}
            How many pictures did Todd order?"
            </Text>
            </View>

            <View style = {styles.simpletext}>
                <Text style = {styles.text}>
                What do you think the problem is asking you to do?
                </Text>
                <TextInput
                style = {styles.input}
                placeholder="give me any strategy"
                />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "send"
                    onPress = {showme}
                />
            </View>
            {show ? (
            <View>
                <View style = {styles.button}>
                    <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                    <Button
                        title = "Write an equation to solve the problem"
                        onPress ={() => {
                        props.navigation.navigate("Strate1_1")
                        }}
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "Add on shipping fee until i get to $85.75"
                        onPress ={() => {
                        props.navigation.navigate("Strate1_2")
                        }}
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "Subtract away from $85.75 what did you get? unil i get to 0"
                        onPress ={() => {
                        props.navigation.navigate("Strate1_3")
                        }}
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "submit"
                        onPress ={() => {
                        props.navigation.navigate("QuizList",
                            {
                                score1:sumScore
                            })
                        }}
                    />
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
    container: {
        flex:1,
        backgroundColor: '#DDA0DD',
        paddingBottom: 10
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        marginTop: 10
    },
    textcon: {
        backgroundColor: 'white',
        height: 220,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    tt: {
        backgroundColor: '#DDA0DD',
        color: 'black',
        marginBottom: 5,
    },
    input: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: 'white',
    },
    simpletext: {
        backgroundColor: 'white',
        height: 60,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        borderRadius: 3,
    },
}); 

export default Quiz1