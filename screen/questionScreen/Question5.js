import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert } from 'react-native';
import { myData } from "../../components/data"
import QuestionScreen from "../../components/QuestionScreen"

const Question5Screen = ({ navigation }) => {
    
    const id = Math.floor(Math.random() * 100)
    return (
        <QuestionScreen
        questionText = {myData.map((item) => <Text key={item.id} style={styles.questions}>{item.question5}</Text>) }
        headerInstruction="Wich Strategy do you want to use?"
        toNavigateScreen1= {()=> navigation.navigate("Answer 5A")}
        instruction1="Write equations to solve the problem"
        toNavigateScreen2={()=> navigation.navigate("Answer 52A")} //navigation.navigate("Answer2C")
        instruction2="Add on from 34.5 inches until I use up all the rope"
        toNavigateScreen3={()=> navigation.navigate("Answer 53A")}
        instruction3="Subtract from the total until I get to 0"
        nextBtn={() => navigation.navigate("Question6")}
        prevBtn={() => navigation.navigate("Question4")}
        displayContainer={{marginTop: 8}}
    />
    )
}


export default Question5Screen;

const styles = StyleSheet.create({

    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 16,
        color: 'white'
    },
})