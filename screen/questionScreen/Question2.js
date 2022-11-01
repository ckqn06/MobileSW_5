import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert } from 'react-native';
import QuestionScreen from '../../components/QuestionScreen';
import data, { myData } from "../../components/data"
import ScreenAnswerA from '../answerScreens/Answer1/Strategy1/ScreenAnswerA';
  

const Question2Screen = ({ navigation }) => {

    const id = Math.floor(Math.random() * 100)
    //const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <QuestionScreen
            questionText= {myData.map((item) => <Text key={item.id} style={styles.questions}>{item.question2}</Text>)}
            headerInstruction="Which strategy do you want to use?"
            toNavigateScreen1= {()=> navigation.navigate("Answer2")}
            instruction1="Add up her miles and then find out how many more she needs to get to 22 miles"
            toNavigateScreen2={()=> navigation.navigate("Answer2C")}
            instruction2="Write an equation to solve it"
            toNavigateScreen3={()=> navigation.navigate("Answer2D")}
            instruction3="Subtract her miles from 22 and see how many are left"
            nextBtn={() => navigation.navigate("Question3")}
            prevBtn={()=> navigation.navigate("Game Screen")}
        />
    )
}


export default Question2Screen;

const styles = StyleSheet.create({

    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 18,
        color: 'white'
    },
})