import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import AnswerScreen from "../../../../components/AnswerScreen";

const ScreenAnswer2D = ({navigation}) => {

    return (
        <AnswerScreen
            instructionText = "Let’s subtract Jen’s miles from Monday through Friday from 22. How many miles does Jen have left to run?"
            expectedAnswer="5 7/8 miles"
            text1="Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal. Let’s try a different way to solve this problem!"
            text2 = "Would you like to move to the next question?"
            prevScreen="Answer2D"
            nextScreen = "Question3"
        />
    )
}

export default ScreenAnswer2D;