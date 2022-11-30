import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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

    return (
        <View style = {styles.main}>
            <View style = {styles.profileView}>
                <Text style = {styles.profileText}>NAME: {studentData.Name}</Text>
                <Text style = {styles.profileText}>EMAIL: {studentData.Email}</Text>
            </View>

            <View style = {{marginRight:80, marginLeft:80}}>
                <TouchableOpacity onPress = {() => { props.navigation.navigate("QuizList") }}>
                    <View style = {styles.quizButton}>
                        <Text style = {styles.quizButtonText}>Quiz Start!</Text>
                    </View>
                </TouchableOpacity>
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
                    <Text style = {{marginBottom:5, fontSize:25}}>Progress: 0%</Text>
                </View>
            </View>

            <View style = {styles.subView_2}>
                <View>
                    <Text style = {{marginBottom:10, fontSize:25, fontWeight:'bold'}}>ANALYSIS</Text>
                    <Text style = {{marginBottom:10, fontSize:25, color:'green'}}>Correct Answer: {corr}</Text>
                    <Text style = {{marginBottom:10, fontSize:25, color:'red'}}>Wrong Answer: {wron}</Text>
                    <Text style = {{marginBottom:10, fontSize:25, color:'blue'}}>Unfinished Answer: {unquiz}</Text>
                </View>
            </View>
        </View>
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
        marginTop:20,
        marginLeft:25,
        marginRight:25,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    subView_2: {
        marginTop:15,
        marginLeft:30,
    },
    quizButton: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#8463ff' 
    },
    quizButtonText: {
        fontSize:30,
        marginLeft:15,
        marginRight:15,
        fontWeight:'bold',
        color:'white'
    },
    graph: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        marginLeft:45,
        marginRight:45,
        marginBottom:30,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'blue'
    }
});

export default Main