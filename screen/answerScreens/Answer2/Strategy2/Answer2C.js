import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import AnswerScreen from "../../../../components/AnswerScreen";


const ScreenAnswer2C = ({navigation}) => {

    return(
        <AnswerScreen
            instructionText="Your equation is equivalent to 16 1/8 + m = 22. Can you solve for m?"
            expectedAnswer="5 7/8 miles"
            text1="Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal. Let’s try a different way to solve this problem!"
            text2 = "Would you like to move to the next question?"
            prevScreen="Answer2C"
            nextScreen = "Question2"
       />
    )
}

export default ScreenAnswer2C;
