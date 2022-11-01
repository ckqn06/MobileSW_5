import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert } from 'react-native';
import { myData } from "../../components/data"
import QuestionScreen from '../../components/QuestionScreen';


const Question7Screen = ({ navigation }) => {

    const id = Math.floor(Math.random() * 100)

    return (

        <QuestionScreen
        questionText = {myData.map((item) => <Text style={styles.questions}>{item.question7}</Text>) }
        headerInstruction="Which strategy do you want to use?"
        toNavigateScreen1= {()=> navigation.navigate("Answer 7A")}
        instruction1="Write an inequality to solve the problem"
        toNavigateScreen2={()=> console.log("Answer Screen 3B")} //navigation.navigate("Answer2C")
        instruction2="Guess and check"
        toNavigateScreen3={()=> navigation.navigate("Answer 73A")}
        instruction3="Add up until I find the number of days"
        nextBtn={() => navigation.navigate("Question8")}
        prevBtn={() => navigation.navigate("Question6")}
        displayContainer={{ marginTop: 38 }}//using props to overwrite the styles for this screen
        bottomButtonContainer={{marginTop: 24}}
    />
    )
}

export default Question7Screen;

const styles = StyleSheet.create({

    screenContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#182747'
    },
    
    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 18,
        color: 'white'
    }
})