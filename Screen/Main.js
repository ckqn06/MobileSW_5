import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { auth } from "../Auth/firebaseConfig";
import { db } from "../Auth/firebaseConfig";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const Main = (props) => {
    const [studentData, setStudentData] = useState({});

    const corr = useSelector((state) => state.Correct)
    const wron = useSelector((state) => state.Wrong)
    const unquiz = useSelector((state) => state.UnQuiz)
    const progress = (corr + wron) / 24 * 100

    //onSnapshot 기능 사용해서 실사간으로 Quiz 점수 정보 갱신하기 
    //useEffect hook은 화면 실행할 떄 실행하기  
    const id = auth.currentUser.uid 
    useEffect(() => {
        const fetchData = async () => {
            const docRef = await doc(db, "student", id)
            onSnapshot(docRef, (snapshot) => {
                console.log(snapshot.data())
                setStudentData(snapshot.data())
            })
        };
        fetchData();
    }, [id, setStudentData])

    //onSnapshot 기능 사용해서 실사간으로 Quiz 점수 정보 갱신하기 
    //useEffect hook은 화면 실행할 떄 실행하기    
    useEffect(() => {
        const fetchData = async () => {
            const docRef = await doc(db, "student", auth.currentUser.uid)
            await getDoc(docRef)
            .then((snapshot) => {
                console.log(snapshot.data());
                setStudentData(snapshot.data())})
            .catch(error => console.log(error.message))
        };
        fetchData();
    }, [])

    const Caution = () => {
        Alert.alert("Please be aware of these!",
            "1. You must solve all the Quiz and Strategies before submitting.\n\n" +
            "2. The answer is case sensitive.\n\n" +
            "3. Be careful with spacing when writing your answers.\n\n" +
            "4. You can't go back while you're solving Strategy.\n\n" +
            "5. The prompt of the Strategy has three chances each.\n\n" +
            "6. All Quiz and Strategies cannot be solved again once submitted!\n\n" +
            "7. If you have solved all the Quiz, please press the Submit button on the Quiz List!")
    }

    const Analysis = () => {
        Alert.alert("ANALYSIS",
            "- Correct Answer: " + corr +
            "\n\n- Wrong Answer: " + wron +
            "\n\n- Unfinished Answer: " + unquiz)
    }

    return (
        <ScrollView style ={{width:"100%"}}>
            <View style = {styles.main}>
                <View style = {styles.profileView}>
                    <Text style = {styles.profileText}>NAME: {studentData.Name}</Text>
                    <Text style = {styles.profileText}>EMAIL: {studentData.Email}</Text>
                </View>

                <View style = {styles.subView_1}>
                   <Text style = {{marginBottom:10, fontSize:25}}>== QUIZ PROGRESS ==</Text>
                   <Image
                     style = {{marginTop:10, marginBottom:10, width:130, height:130}}
                     source = {require('../assets/images/options.png')}
                     resizeMode = "contain">
                    </Image>
                
                    <View style = {{marginLeft:10, marginRight:30}}>
                        <Text style = {{marginBottom:5, fontSize:25}}>Score: {studentData.score}/24</Text>
                        <Text style = {{marginBottom:5, fontSize:25}}>Progress: {progress.toFixed(0)}%</Text>
                    </View>
                </View>

                <View style = {{marginRight:80, marginLeft:80}}>
                    <TouchableOpacity onPress = {() => { props.navigation.navigate("QuizList") }}>
                        <View style = {styles.quizButton}>
                            <Text style = {styles.quizButtonText}>Quiz Start!</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {styles.subView_2}>
                    <TouchableOpacity onPress = {() => {Caution()}}>
                        <View style = {styles.quizButton2}>
                            <Text style = {styles.quizButtonText}>Caution for Quiz</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {Analysis()}}>
                        <View style = {styles.quizButton2}>
                            <Text style = {styles.quizButtonText}>Result analysis</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor:'#eefbff'
    },
    profileText: {
        padding:3,
        fontSize:17,
        fontWeight:'bold',
    },
    profileView: {
        justifyContent:'center',
        padding:8,
        marginBottom:15,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#93F5B0'
    },
    subView_1: {
        alignItems:'center',
        padding:10,
        paddingBottom:30,
        marginTop:10,
        marginLeft:25,
        marginRight:25,
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'white'
    },
    subView_2: {
        flex:1,
        paddingTop:10,
        marginTop:30,
        marginLeft:40,
        marginRight:40,
    },
    quizButton: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-20,
        padding:10,
        borderRadius:50,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#8463ff' 
    },
    quizButton2: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        marginBottom:20,
        borderRadius:20,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'steelblue' 
    },
    quizButtonText: {
        fontSize:30,
        marginLeft:15,
        marginRight:15,
        fontWeight:'bold',
        color:'white'
    }
});

export default Main