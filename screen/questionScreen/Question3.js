import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert } from 'react-native';
import { myData } from "../../components/data"
import QuestionScreen from '../../components/QuestionScreen';

const Question3Screen = ({ navigation }) => {

    const id = Math.floor(Math.random() * 100)

    return (
        <QuestionScreen
            questionText = {myData.map((item) => <Text key={item.id} style={styles.questions}>{item.question3}</Text>) }
            headerInstruction="Which strategy do you want to use?"
            toNavigateScreen1= {()=> navigation.navigate("Answer 3A")}
            instruction1="Subtract the extra yards and then figure out how much fabric she used for each curtain"
            toNavigateScreen2={()=> navigation.navigate("Answer 32A")} //navigation.navigate("Answer2C")
            instruction2="Write an equation to solve it"
            toNavigateScreen3={()=> console.log("Answer Screen 3C")}
            instruction3="Use a diagram to try and understand the problem"
            nextBtn={() => navigation.navigate("Question4")}
            prevBtn={() => navigation.navigate("Question2")}
            
            //overriding the styles for this screen
            displayContainer={{ marginTop: 32 }}
            bottomButtonContainer={{marginTop: 28}}  
        />
    )
}

export default Question3Screen;

const styles = StyleSheet.create({
    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 18,
        color: 'white'
    },
})