import { View, Text, Button, StyleSheet, TextInput, ScrollView,
    KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import {useState} from 'react'

const Quiz5 = (props) => {

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
        <ScrollView style = {{width:"100%"}}>
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>Mario is setting up a new tent during a camping trip. 
            The tent came with 7 feet of rope. The instructions are to use 34.5 inches of the rope to tie a tarp on top of the tent. 
            Then, the remaining rope should be cut into 8¼-inch sections to tie the tent to stakes in the ground. 
            Mario will use all of the rope as instructed. 
            Write and solve an equation to determine the number of 8¼-inch sections of rope Mario can cut from the rope.
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
                    title = "Write equations to solve the problem"
                    onPress ={() => {
                        props.navigation.navigate("Strate5_1")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Add on from 34.5 inches until i use up all the rope"
                    onPress ={() => {
                        props.navigation.navigate("Strate5_2")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Subtract from the total until i get to 0"
                    onPress ={() => {
                        props.navigation.navigate("Strate5_3")
                    }}
                />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "submit"
                    onPress ={() => {
                        props.navigation.navigate("QuizList")
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
        height: 340,
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



export default Quiz5