import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert } from 'react-native';
import data, { myData } from "../../components/data"
import QuestionScreen from "../../components/QuestionScreen"


const Question6Screen = ({ navigation }) => {
    

    const id = Math.floor(Math.random() * 100)

    
    return (
        <QuestionScreen
        questionText = {myData.map((item) => <Text key={item.id} style={styles.questions}>{item.question6}</Text>) }
        headerInstruction="Which strategy do you want to use?"
        toNavigateScreen1= {()=> navigation.navigate("Answer 6A")}
        instruction1="Write an equation to solve it"
        toNavigateScreen2={()=> console.log("Answer Screen 3B")} //navigation.navigate("Answer2C")
        instruction2="Guess and check"
        toNavigateScreen3={()=> console.log("Answer Screen 3C")}
        instruction3="Use a diagram to understand the problem"
        nextBtn={() => navigation.navigate("Question7")}
        prevBtn={() => navigation.navigate("Question5")}
        displayContainer={{ marginTop: 45, marginBottom: 30, padding: 4 }}
        bottomButtonContainer={{marginTop: 24}}
    />
    )
}



export default Question6Screen;

const styles = StyleSheet.create({
    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 18,
        color: 'white'
    }
})