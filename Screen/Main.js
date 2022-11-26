import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { auth } from "../Auth/firebaseConfig";
import { db } from "../Auth/firebaseConfig";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux"

const Main = (props) => {
    
   // const  scorePercent  = props.route.params;
    
    //const scoreCounter = useSelector(state => state.scoreCounter) // 앱에서 어디든

    const [studentData, setStudentData] = useState({});

    useEffect(() => {
        // const fetchData = async () => {
        //     const docRef = await doc(db, "student", auth.currentUser.uid)
        //     await getDoc(docRef)
        //         .then((snapshot) => {
        //             console.log(snapshot.data());
        //             setStudentData(snapshot.data())
        //         }).catch(error => console.log(error.message))
        // };
        const fetchData = async () => {
            const docRef = await doc(db, "student", auth.currentUser.uid)
            await onSnapshot(docRef, (snapshot) => {
                console.log(snapshot.data());
                setStudentData(snapshot.data())
            })
        }

        fetchData();
    }, [])
    return (
        <View style = {styles.main}>
            <View style = {{padding:15, flexDirection:'row'}}>
                <Text style={styles.profileText}>Name: {studentData.Name}</Text>
                <Text style={styles.profileText}>Email: {studentData.Email} </Text>
            </View>

            <View style = {{marginBottom:15}}>
                <View style = {styles.subView_1}>
                    <Image
                     style = {{marginTop:30, marginBottom:30, width:150, height:150}}
                     source = {require('../assets/images/TodaysQuiz.png')}
                     resizeMode = "contain">
                    </Image>
                
                    <View style = {{marginLeft:10, marginRight:30, alignItems:'center'}}>
                        <Text style = {{marginBottom:5, fontSize:25}}>Today's Quiz</Text>
                        <Text style={{ marginBottom: 5, fontSize: 25 }}>0%</Text>
                        <Text style={{ marginBottom: 5, fontSize: 25 }}>{studentData.score}/24</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress = {() => {props.navigation.navigate("QuizList") }}>
                <View style = {styles.quizButton}>
                    <Text style = {styles.quizButtonText}>Quiz Start!</Text>
                </View>
            </TouchableOpacity>

            <View style = {styles.subView_2}>
                <View>
                    <Text style = {{marginBottom:10, fontSize:25, fontWeight:'bold'}}>ANALYSIS</Text>

                    <Text style = {{marginBottom:50, fontSize:25, color:'green'}}>Correct Answer</Text>
                    <Text style = {{marginBottom:50, fontSize:25, color:'red'}}>Wrong Answer</Text>
                    <Text style={{ marginBottom: 50, fontSize: 25, color: 'blue' }}
                        onPress={() => props.navigation.navigate("teacher")}
                    >Unfinished Answer</Text>
                </View>

                <View style = {styles.graph}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#eefbff'
    },
    profileText: {
        marginRight:10,
        fontSize:15
    },
    subView_1: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    subView_2: {
        flexDirection:'row',
        marginTop:30,
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


// {JSON.stringify(scorePercent)}