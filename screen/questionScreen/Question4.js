import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert } from 'react-native';
import { myData } from "../../components/data"
import QuestionScreen from '../../components/QuestionScreen';

const Question4Screen = ({ navigation }) => { 

    const id = Math.floor(Math.random() * 100)
    
    return (
        <QuestionScreen
            questionText = {myData.map((item) => <Text key={item.id} style={styles.questions}>{item.question4}</Text>) }
            headerInstruction="Which strategy do you want to use?"
            toNavigateScreen1= {()=> console.log("Answer Screen A")}
            instruction1="Guess the number of points and see if it works."
            toNavigateScreen2={()=> console.log("Answer Screen 3B")} //navigation.navigate("Answer2C")
            instruction2="Write an equation to solve it"
            toNavigateScreen3={()=> console.log("Answer Screen 3C")}
            instruction3="Use a diagram to try and understand the problem"
            nextBtn={() => navigation.navigate("Question5")}
            prevBtn={()=> navigation.navigate("Question3")}
        />
    )
}



export default Question4Screen;

const styles = StyleSheet.create({

    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 18,
        color: 'white'
    },
})