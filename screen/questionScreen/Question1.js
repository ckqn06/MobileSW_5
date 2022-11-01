import { useState } from 'react';
import { View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert, TouchableOpacity } from 'react-native';
import { myData } from "../../components/data"
import QuestionScreen from "../../components/QuestionScreen"

//onPressHandler={()=>setIsModalVisible(!isModalVisible)}

const GameScreen = ({ navigation }) => {
    

    const [isModalVisible, setIsModalVisible] = useState("true")
    
    const id = Math.floor(Math.random() * 100)
    //const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <View>
            <QuestionScreen
            questionText={myData.map((item) => <Text key={item.id} style={styles.questions}>{item.question1}</Text>)}
            headerInstruction="Which strategy do you want to use?"
            toNavigateScreen1= {()=> navigation.navigate("Answer A")}
            instruction1="Write and equation to solve"
            toNavigateScreen2={()=> navigation.navigate("Answer B")}
            instruction2="Add on the shopping fee until I get to 85.75$"
            toNavigateScreen3={()=> navigation.navigate("Answer C")}
            instruction3="Substract away from 85.75$. What did you get? Until I get to 0"
            nextBtn={()=> navigation.navigate("Question2")}
        />
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 18,
        color: 'white'
    },
})








