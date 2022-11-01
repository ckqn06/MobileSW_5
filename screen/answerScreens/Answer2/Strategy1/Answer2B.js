import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import AnswerScreen from "../../../../components/AnswerScreen";


"Fantastic! You've found that Jen needs to run another 5 7/8 miles to reach her goal. Let's try a different way to solve this problem!",
"Would you like to try another strategy?"

const ScreenAnswer2B = ({navigation}) => {

    return (
        
        <AnswerScreen
        instructionText = "OK, if she ran 16 1/8 miles, how many more does she have to run to reach 22 miles?"
        expectedAnswer="57/8 miles"
        text1="Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal. Let’s try a different way to solve this problem!"
        text2 = "Would you like to try another strategy?"   
        prevScreen="Question2"
        nextScreen = "Question2"
    />
    )
}

export default ScreenAnswer2B;

