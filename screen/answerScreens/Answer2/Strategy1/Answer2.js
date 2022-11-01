import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import AnswerScreen from "../../../../components/AnswerScreen";

const ScreenAnswer2 = ({navigation}) => {
   
    return (
        <AnswerScreen
            instructionText = "Let's add up Jen's total from Monday through Thursday. How many miles has she run?"
            expectedAnswer="161/8 miles"
            text2 = "Would you like to move to the next question?"
            prevScreen="Answer2"
            nextScreen = "Answer2B"
        />
    )
}

export default ScreenAnswer2;

// const styles = StyleSheet.create({
//     answerContainer: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: 'white',
//         backgroundColor: "#31E1F7"
//     },
//     instructionContainer:{
//         marginTop: 20,
//         backgroundColor: '#FF7777',
//         paddingVertical: 25,
//         paddingHorizontal: 30,
//         marginHorizontal: 20,
//         borderWidth: 2,
//         borderRadius: 5
//     },
//     text:{
//         color: 'white',
//         fontSize: 16,

//     },
//     input:{
//         marginVertical: 36,
//         padding: 12,
//         width: "75%",
//         borderWidth: 2,
//         borderRadius: 8,
//         fontSize: 18
//     },
//     button: {
//         width: "50%",
//         borderRadius: 7
//     }
// })


// const [inputAnswer, setInputAnswer] = useState("")

// const [instructionText, setInstructionText] = useState(instruction1)

// const inputTextHandler = (text) => setInputAnswer(text) 


// const checkAnswer = () => {
//     console.log(inputAnswer)
//     if (inputAnswer.trim() == ) {
//         Alert.alert(
//             "Nice Job!",
//             "Would you like to move to the next step?",

//             [{text: 'Next',
//               onPress: ()=> navigation.navigate()}]
//         )
        
//     } else {
//         Alert.alert("Thats quite incorrect. Try again")
//     }
// }

// <View style={styles.answerContainer}>
// <View style={styles.instructionContainer}>
//      <Text style={styles.text}>{instructionText}</Text>
// </View>
//  <TextInput 
//      style={styles.input}
//      onChangeText={inputTextHandler}
//      value={inputAnswer}
//      placeholder="What did you get"
//  />
//  <View style={styles.button}>
//      <Button
//      title="Submit"
//      onPress={checkAnswer}
//  />
//  </View>
// </View>