import { useState } from "react";
import {
    View, Text, StyleSheet, TextInput, Pressable,
    Button, Alert, Modal, TouchableOpacity,
    Image, KeyboardAvoidingView, ScrollView,
    ImageBackground , ImageStyle
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
    
    //set the user input user name
    const [name, setName] = useState("");

    const [isModalVisible, setIsModalVisible] = useState(false)

    const userNameHandler = (inputName) => setName(inputName)

    //this function ensure the user to input a name before starting
    const checkTextInput = () => {
        if (!name.trim()) {
            Alert.alert("Please enter your name")
            return;

            //TODO 
            //add a modal custom when the user's entered name is not correct
        }

        setIsModalVisible(!isModalVisible);
    }
       

    return (
        <ImageBackground
            style={styles.screenContainer}
            resizeMode="cover"
            source={require("../assets/images/puzzle.jpg")}
            imageStyle={styles.backgroundImg}
        >
            
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={isModalVisible}
                onRequestClose={()=>Alert.alert("Modal has been closed")}
            >
                <View style={{
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    marginHorizontal: 16,
                    marginTop: 175,
                    borderRadius: 8

                }}>
                    <View style={styles.modalContainer}>
                    <Image
                        style={styles.image}
                        source = {require('../assets/images/welcomeAvatar.jpeg')}    
                    />
                    </View>
                <Text style={styles.modalText}>Welcome {name}</Text>    
                <TouchableOpacity
                    style={styles.modalBtn}
                        onPress={() => {
                            console.log("Modal Button Pressed")
                            navigation.navigate("Game Screen")
                            setIsModalVisible(!isModalVisible)
                    } } 
                >
                <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>        
                </View>
            </Modal>

            <ScrollView>
            <KeyboardAvoidingView style={{flex: 1}}>
                <View style={styles.titleContainer}>
                        <Image
                        style={styles.headerImage}
                        source={require('../assets/images/cube2.png')}/>       
                </View>
                <Text style={styles.title}>Crush The Numbers</Text>    
        <View style={styles.instructionContainer}>
            <Text style={styles.instruction}>Enter your name</Text>
        </View>
            <TextInput
                style={styles.inputText}
                onChangeText={userNameHandler}
                value={name}
                onSubmitEditing = {(e)=> setName("")}
                />

            <Pressable
                onPress={checkTextInput}
                android_ripple={{color: "red", borderless: false}}
                style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>
            </Pressable>
           </KeyboardAvoidingView>
            </ScrollView>

        </ImageBackground>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    screenContainer: {
    backgroundColor: '#533483',
    flex: 1,
    },
    backgroundImg:{opacity: 0.3},
    headerImage: {
        height: 200,
        width: "100%",
        borderRadius: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "#E1FFB1",
        paddingVertical: 8,
        textAlign: 'center'

    },
    titleContainer: {
        marginTop: 15,
        padding: 12,
        alignItems: 'center',
        // borderWidth: 1,
        //borderRadius: 50,
        marginHorizontal: 16,
    },
    instructionContainer: {
        alignItems: "flex-start",
        marginTop: 50,
        marginLeft: 28
    },
    instruction: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#E1FFB1", // E94560
    },
    inputText: {
        marginTop: 15,
        color: "#FAF7F0",
        borderColor: "#F1EFDC", // 222020
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 28,
        padding: 8,
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center"
    },
    btn: {
        alignItems: 'center',
        padding: 8,
        marginHorizontal: 120,
        marginTop: 30,
        marginBottom: 15,
        backgroundColor: "#246EE9",
        borderWidth: 2,
        borderRadius: 10,
        elevation: 1,

    },
    btnText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },

    modalContainer: {
        marginTop: 1,
        marginBottom: 40,
        width: "100%",
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: "#FFD384"
    },
    modalText: {
        color: "black",
        fontSize: 32,
        fontWeight: 'bold'
    },
    modalBtn: {
        marginTop: 50,
        padding: 12,
        backgroundColor: '#246EE9',
        borderRadius: 5,
        marginBottom: 10
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 50,
    }
})
