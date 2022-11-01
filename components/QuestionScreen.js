import { useState } from 'react';
import {
    View, StyleSheet, Text, Button, Image, Pressable, Modal, Alert,
    ScrollView, SafeAreaView, ImageBackground, ImageStyle, TouchableOpacity
} from 'react-native';
import { useLinkProps, useNavigation } from '@react-navigation/native';
import ScreenAnswerA2 from '../screen/answerScreens/Answer1/Strategy1/AnswerScreenA2';

//const [btnTextColor, setBtnTextColor] = useState("#ffffff")

//onPressHandler={()=>setIsModalVisible(!isModalVisible)}



const QuestionScreen = (props) => {
    
    //const [isModalVisible, setIsModalVisible] = useState(false)

     //use react hook useState for button color
    const [btnColor, setBtnColor] = useState(true)
    
    //const BtnChangeColor = () => setBtnBackgroundColor("red")

    const navigation = useNavigation();
    return (
        
             <ScrollView>
                <ImageBackground
                    style={styles.screenContainer}
                    resizeMode="cover"
                    source={require("../assets/images/puzzle.jpg")}
                    imageStyle={styles.backgroundImg}
                >
    
    <View style={[styles.displayContainer, props.displayContainer]}>
        <Image
            style={styles.image}
            source= {require('../assets/images/question.jpeg')}
        />
        {/* <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 14 }}>Questions</Text> */}
           {props.questionText}
            <Text style={{ marginVertical: 6, color: "#E1FFB1", fontWeight: '800', fontSize: 16 }}>{props.headerInstruction}</Text>
    </View>
    <View>
        <View>
        <TouchableOpacity style={[styles.newBtn, {backgroundColor: btnColor ? "#47B5FF" : <ScreenAnswerA2 color="red"/>}]} onPress={props.toNavigateScreen1 } >
            <Text style={styles.btnText}>{props.instruction1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.newBtn, {backgroundColor: btnColor ? "#47B5FF" : <ScreenAnswerA2 color="red"/>}]} onPress={props.toNavigateScreen2}> 
            <Text style={styles.btnText}> {props.instruction2} </Text>
        </TouchableOpacity>
                
        <TouchableOpacity style={[styles.newBtn, {backgroundColor: btnColor ? "#47B5FF" : <ScreenAnswerA2 color="red"/>}]} onPress={props.toNavigateScreen3}>
            <Text style={styles.btnText}>{props.instruction3}</Text>
        </TouchableOpacity>
        </View>
    </View>
                    
        <View style={[styles.bottomButonContainer, props.bottomButtonContainer ]}>
        <TouchableOpacity style={styles.prevBtn} onPress={props.prevBtn}>
            <Text style={{fontSize: 22, color: "black"}}>prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={props.nextBtn}>
            <Text style={{fontSize: 22, color: "black"}}>next</Text>
        </TouchableOpacity>        
        </View> 
        
    </ImageBackground>  
        </ScrollView>
    )
}

export default QuestionScreen;

const styles = StyleSheet.create({

    screenContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#182747'  //182747
    },
    displayContainer: {
        paddingTop: 20,
        marginHorizontal: 18,
        marginTop: 26,
        alignItems: 'center',
        backgroundColor: '#790252',
        borderRadius: 8,
        width: "90%",
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 5
    },
    questions: {
        marginTop: 16,
        textAlign: "center",
        fontSize: 18,
        color: 'white'
    },
    newBtn: {
        alignItems: "center",
        marginTop: 18,
        marginHorizontal: 30,
        paddingVertical: 10,
        paddingHorizontal: 25,
        //backgroundColor:"#47B5FF",
        borderWidth: 2,
        borderRadius: 12,
        elevation: 2,
        marginBottom: 6
    },
    btnText: {
        fontSize: 16,
        color: '#ffffff'
    },
    bottomButonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 45,
        marginTop: 15
    },
    nextBtn: {
        alignItems: 'center',
        //marginTop: 15,
        paddingVertical: 2,
        paddingHorizontal: 16,
        marginLeft: 100,
        backgroundColor: "#FECD70",
        borderWidth: 2,
        borderRadius: 10,
        elevation: 2,
       // marginBottom: 10

    },
    prevBtn: {
        alignItems: 'center',
        //marginTop: 15,
        paddingVertical: 2,
        paddingHorizontal: 16,
        marginRight: 70,
        backgroundColor: "#FECD70",
        borderWidth: 2,
        borderRadius: 10,
        elevation: 2,
        //marginBottom: 10

    },
    backgroundImg:{opacity: 0.5}
})