import { ScrollView, View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { doc, updateDoc } from "firebase/firestore"
import { auth } from "../Auth/firebaseConfig";
import { db } from "../Auth/firebaseConfig";

const QuizList = (props) => {

     const scoreCounter = useSelector(state => state.scoreCounter) // 앱에서 어디든 
 
    const Correct = require('../assets/images/QuizCorrect.png');   //해당 번호 모든 문제 해결한 경우
    const Wrong = require('../assets/images/QuizWrong.png');       //해결 못한 문제가 있는 경우
    const Yet = require('../assets/images/QuizYet.png');           //기본 대기 체크 모양

    const [icon1, setIcon1] = useState(Yet);
    const [icon2, setIcon2] = useState(Yet);
    const [icon3, setIcon3] = useState(Yet);
    const [icon4, setIcon4] = useState(Yet);
    const [icon5, setIcon5] = useState(Yet);
    const [icon6, setIcon6] = useState(Yet);
    const [icon7, setIcon7] = useState(Yet);
    const [icon8, setIcon8] = useState(Yet);
    //점수 값에 따라 해당 퀴즈 번호 사진들을 변경  (score == 0), (score != 0 || score !=3), (score == 3)

    //update student score
    const updateData = async () => {
        try {
            const docRef = doc(db, "student", auth.currentUser.uid);
            await updateDoc(docRef, {
                score: scoreCounter
            })
        }catch(error){alert(error.message)}
    }
    
    return(
        <ScrollView style ={styles.mainView}>
            <View style = {styles.mainText}>
                <Text style = {{fontSize:25}}>== QUIZ LIST ==</Text>
            </View>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz1")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.1</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon1}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz2")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.2</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {Yet}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz3")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.3</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {Yet}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz4")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.4</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {Yet}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz5")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.5</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {Yet}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz6")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.6</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {Yet}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz7")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.7</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {Yet}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz8")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.8</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {Yet}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                updateData(),
                    props.navigation.navigate('Main',
                        {scorePercent: Math.floor((scoreCounter * 100) / 20)}
                    )
            }}>
                <View style = {styles.subView}>
                    <Text style = {styles.submitbutton}>SUBMIT</Text>
                </View>
            </TouchableOpacity>

            <View>
                {/* <Text>Score1: {JSON.stringify(Score1)}</Text> */}
                {/*<Text>Current Score: {scoreCounter}</Text>*/}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        width:'100%',
        backgroundColor:'#eefbff'
    },
    subView: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        marginLeft:70,
        marginRight:70,
        marginTop:15,
        marginBottom:25,
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'steelblue'
    },
    mainText: {
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    button: {
        alignItems:'center',
        fontSize:30,
        color:'white'
    },
    submitbutton: {
        backgroundColor:'steelblue',
        color:'white',
        fontSize: 30
    },
    statusImage: {
        marginLeft:40,
        width:20,
        height:35,
        resizeMode:'contain'    
    }
}); 


export default QuizList;