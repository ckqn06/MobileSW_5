import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert } from 'react-native';
import data, { myData } from "../../components/data"
import QuestionScreen from '../../components/QuestionScreen';

const Question8Screen = ({ navigation }) => {

    const id = Math.floor(Math.random() * 100)
    
    return (
        <QuestionScreen
        questionText = {myData.map((item) => <Text key={item.id} style={styles.questions}>{item.question8}</Text>) }
        headerInstruction="Which strategy do you want to use?"
        toNavigateScreen1= {()=> console.log("Answer Screen A")}
        instruction1="Guess and check"
        toNavigateScreen2={()=> console.log("Answer Screen 3B")} //navigation.navigate("Answer2C")
        instruction2="Write an inequality to solve the problem"
        toNavigateScreen3={()=> console.log("Answer Screen 3C")}
        instruction3="Add up until I figure out the width of the garden."
        nextBtn={() => navigation.navigate("ResultScreen")}
        prevBtn={() => navigation.navigate("Question7")}
        displayContainer={{ marginTop: 38 }}
        bottomButtonContainer={{marginTop: 24}}    
    />
  
    )
}

export default Question8Screen;

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