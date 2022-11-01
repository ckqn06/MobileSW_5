import { useState } from "react";
import {
    View, Text, TextInput, StyleSheet, Button, Image, Modal,
    ImageBackground, ImageStyle, TouchableOpacity, ScrollView
} from "react-native";
import ModalCustom from "../../../../components/ModalCustom";

const AnswerScreenC = ({ navigation }) => {
    
    const [isVisible, setIsModalVisible] = useState(false);

    const [nativeModalVisible, setNativeModalVisible] = useState(false)

    const changeModalVisible = (bool) => setIsModalVisible(bool)

    let instructionText = "OK. Start with $85.50. Subtract the shipping fee, then count how many times you have to subtract $7.50 to get to 0.";

    const [inputAnswer, setInputAnswer] = useState("")

    const inputTextHandler = (text) => setInputAnswer(text) 

    const checkAnswer = () => {
        console.log(inputAnswer)
        inputAnswer.trim() == "11" ?
            changeModalVisible(true) :
            //Alert.alert("Thats quite incorrect. Try again")
            setNativeModalVisible(true)
        
    }
    
    return (
        <ScrollView style={{flex: 1}}>
             <ImageBackground
            source={require("../../../../assets/images/puzzleImg.jpg")}
            resizeMode={"cover"}
            style={styles.answerContainer}
            imageStyle={styles.backgroundImg}
        >
            
            
            {/*when the input answer is correct this modal is set to appear*/}
            <ModalCustom 
                modalVisible={isVisible}
                modalNotVisible={() => changeModalVisible(false)}
                toNavigateScreen1="Game Screen"
                toNavigateScreen2="Question2"
                text1="Fantastic"
                text2 = "Would you like to move to the next question?"
            />
            {/*when the input answer is wrong this modal is set to appear*/}
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={nativeModalVisible}
                onRequestClose={()=> setNativeModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.ImageContainer}>
                        <Image
                            style={{ height: 100, width: 100 }}
                            source={require("../../../../assets/images/wrongIcon.png")}
                        />
                    <Text style={{fontSize: 24}}>That's not quite correct.</Text>
                    <Text style={{ fontSize: 20 }}>Try Again</Text>
                    </View>
                    <View style={{marginTop: 12}}>
                    <Button
                        title="OK"
                        onPress={()=> setNativeModalVisible(false)}
                    />
                   </View>
                </View>
            </Modal>
            
            <View style={styles.instructionContainer}>
                <Text style={styles.text}>{instructionText}</Text>
           </View>
            <TextInput 
                style={styles.input}
                onChangeText={inputTextHandler}
                value={inputAnswer}
                placeholder="What did you get"
                placeholderTextColor={"#9E7676"}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={checkAnswer}
            >
                <Text style={{color: "white", fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
            
        </ImageBackground>
        </ScrollView>
    )

}

export default AnswerScreenC;

const styles = StyleSheet.create({
    answerContainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
        backgroundColor: "#533483",
        height: "100%",
        width: "100%"
    },
    backgroundImg:{opacity: 0.4},
    instructionContainer:{
        marginTop: 100,
        backgroundColor: '#FF7777',
        paddingVertical: 25,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderWidth: 2,
        borderRadius: 8
    },
    text:{
        color: 'white',
        fontSize: 22,
        textAlign: 'center'

    },
    input:{
        marginVertical: 28,
        padding: 12,
        width: "75%",
        borderWidth: 2,
        borderColor: "#FAF7F0",
        borderRadius: 8,
        fontSize: 24,
        textAlign: 'center',
        color: 'white'

    },
    button: {
        marginTop: 4,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: '#5F9DF7',
        borderRadius: 7,
        marginBottom: 200
    },
    modalContainer: {
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        marginHorizontal: 16,
        marginTop: 175,
        borderRadius: 8,
        height: 250
    },
    ImageContainer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#81C6E8',
        width: "100%",
        borderRadius: 6
    }
})

