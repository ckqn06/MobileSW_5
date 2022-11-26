import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { doc, updateDoc } from "firebase/firestore"
import { auth } from "../Auth/firebaseConfig";
import { db } from "../Auth/firebaseConfig";

const QuizList = (props) => {

     //점수 값에 따라 해당 퀴즈 번호 사진들을 변경  (score == 0), (score != 0 || score !=3), (score == 3)

    
    const score1 = useSelector((state) => state.Score1)
    const score2 = useSelector((state) => state.Score2)
    const score3 = useSelector((state) => state.Score3)
    const score4 = useSelector((state) => state.Score4)
    const score5 = useSelector((state) => state.Score5)
    const score6 = useSelector((state) => state.Score6)
    const score7 = useSelector((state) => state.Score7)
    const score8 = useSelector((state) => state.Score8)

    const ch1 = useSelector((state) => state.Change1)
    const ch2 = useSelector((state) => state.Change2)
    const ch3 = useSelector((state) => state.Change3)
    const ch4 = useSelector((state) => state.Change4)
    const ch5 = useSelector((state) => state.Change5)
    const ch6 = useSelector((state) => state.Change6)
    const ch7 = useSelector((state) => state.Change7)
    const ch8 = useSelector((state) => state.Change8)

    const Correct = require('../assets/images/QuizCorrect.png'); //해당 번호 모든 문제 해결한 경우
    const Wrong = require('../assets/images/QuizWrong.png'); //3개 다 틀린 경우
    const Yet = require('../assets/images/QuizYet.png'); //기본 대기 체크 모양
    const Middle = require('../assets/images/QuizMiddle.png'); //1,2개 맞춘 경우

    //점수 값에 따라 해당 퀴즈 번호 사진들을 변경  (score == 0), (score != 0 || score !=3), (score == 3)
    const [icon1, setIcon1] = useState(Yet);
    const [icon2, setIcon2] = useState(Yet);
    const [icon3, setIcon3] = useState(Yet);
    const [icon4, setIcon4] = useState(Yet);
    const [icon5, setIcon5] = useState(Yet);
    const [icon6, setIcon6] = useState(Yet);
    const [icon7, setIcon7] = useState(Yet);
    const [icon8, setIcon8] = useState(Yet);

    //reducers -> change1~8 각각의 값들이 0이면 flase, 1이 되면 true로 해당 버튼이 비활성화 됨
    const [disable1, setdisable1] = useState(false);
    const [disable2, setdisable2] = useState(false);
    const [disable3, setdisable3] = useState(false);
    const [disable4, setdisable4] = useState(false);
    const [disable5, setdisable5] = useState(false);
    const [disable6, setdisable6] = useState(false);
    const [disable7, setdisable7] = useState(false);
    const [disable8, setdisable8] = useState(false);

    //여기 함수는 버튼 활성화 비활성화
    function button1() {
        if(ch1 == 0) { setdisable1(false) }
        else if(ch1 == 1) { setdisable1(true) }}
    useEffect(() => {button1()},[ch1])

    function button2() {
        if(ch2 == 0) { setdisable2(false) }
        else if(ch2 == 1) { setdisable2(true) }}
    useEffect(() => {button2()},[ch2])

    function button3() {
        if(ch3 == 0) { setdisable3(false) }
        else if(ch3 == 1) { setdisable3(true) }}
    useEffect(() => {button3()},[ch3])

    function button4() {
        if(ch4 == 0) { setdisable4(false) }
        else if(ch4 == 1) { setdisable4(true) }}
    useEffect(() => {button4()},[ch4])

    function button5() {
        if(ch5 == 0) { setdisable5(false) }
        else if(ch5 == 1) { setdisable5(true) }}
    useEffect(() => {button5()},[ch5])

    function button6() {
        if(ch6 == 0) { setdisable6(false) }
        else if(ch6 == 1) { setdisable6(true) }}
    useEffect(() => {button6()},[ch6])

    function button7() {
        if(ch7 == 0) { setdisable7(false) }
        else if(ch7 == 1) { setdisable7(true) }}
    useEffect(()=>{button7()},[ch7])

    function button8() {
        if(ch8 == 0) { setdisable8(false) }
        else if(ch8 == 1) { setdisable8(true) }}
    useEffect(()=>{button8()},[ch8])

    //여기 아래는 점수 별로 사진 변경
    function change1() {
        if(score1 == 0) { setIcon1(Wrong) } 
        else if(score1 > 0 && score1 < 3) { setIcon1(Middle) }
        else if(score1 == 3) { setIcon1(Correct) } }

    function change2() {
        if(score2 == 0) { setIcon2(Wrong) } 
        else if(score2 > 0 && score2 < 3) { setIcon2(Middle) }
        else if(score2 == 3) { setIcon2(Correct) } }

    function change3() {
        if(score3 == 0) { setIcon3(Wrong) } 
        else if(score3 > 0 && score3 < 3) { setIcon3(Middle) }
        else if(score3 == 3) { setIcon3(Correct) } }

    function change4() {
        if(score4 == 0) { setIcon4(Wrong) } 
        else if(score4 > 0 && score4 < 3) { setIcon4(Middle) }
        else if(score4 == 3) { setIcon4(Correct) } }

    function change5() {
        if(score5 == 0) { setIcon5(Wrong) } 
        else if(score5 > 0 && score5 < 3) { setIcon5(Middle) }
        else if(score5 == 3) { setIcon5(Correct) } }

    function change6() {
        if(score6 == 0) { setIcon6(Wrong) } 
        else if(score6 > 0 && score6 < 3) { setIcon6(Middle) }
        else if(score6 == 3) { setIcon6(Correct) } }

    function change7() {
        if(score7 == 0) { setIcon7(Wrong) } 
        else if(score7 > 0 && score7 < 3) { setIcon7(Middle) }
        else if(score7 == 3) { setIcon7(Correct) } }

    function change8() {
        if(score8 == 0) { setIcon8(Wrong) } 
        else if(score8 > 0 && score8 < 3) { setIcon8(Middle) }
        else if(score8 == 3) { setIcon8(Correct) } }

    useEffect(()=>{ change1() }, [score1])
    useEffect(()=>{ change2() }, [score2])
    useEffect(()=>{ change3() }, [score3])
    useEffect(()=>{ change4() }, [score4])
    useEffect(()=>{ change5() }, [score5])
    useEffect(()=>{ change6() }, [score6])
    useEffect(()=>{ change7() }, [score7])
    useEffect(() => { change8() }, [score8])
    
    const studentScore = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8
    console.log(studentScore)

    //update student score
    const updateData = async () => {
        try {
            const docRef = doc(db, "student", auth.currentUser.uid);
            await updateDoc(docRef, {
                score: studentScore
            })
        }catch(error){alert(error.message)}
    }

    return(
        <ScrollView style ={styles.mainView}>
            <View style = {styles.mainText}>
                <Text style = {{fontSize:25}}>== QUIZ LIST ==</Text>
            </View>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz1")}} disabled = {disable1}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.1</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon1}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz2")}} disabled = {disable2}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.2</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon2}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz3")}} disabled = {disable3}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.3</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon3}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz4")}} disabled = {disable4}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.4</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon4}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz5")}} disabled = {disable5}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.5</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon5}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz6")}} disabled = {disable6}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.6</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon6}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz7")}} disabled = {disable7}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.7</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon7}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz8")}} disabled = {disable8}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.8</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon8}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                updateData()
                props.navigation.navigate("Main")
            }}>
                <View style = {styles.subView}>
                    <Text style = {styles.submitbutton}>SUBMIT</Text>
                </View>
            </TouchableOpacity>

            <View style = {styles.mainText}>
                <Text style = {{fontSize:25}}>Score1: {score1}</Text>
                <Text style = {{fontSize:25}}>Score2: {score2}</Text>
                <Text style = {{fontSize:25}}>Score3: {score3}</Text>
                <Text style = {{fontSize:25}}>Score4: {score4}</Text>
                <Text style = {{fontSize:25}}>Score5: {score5}</Text>
                <Text style = {{fontSize:25}}>Score6: {score6}</Text>
                <Text style = {{fontSize:25}}>Score7: {score7}</Text>
                <Text style = {{fontSize:25}}>Score8: {score8}</Text>
                <Text style = {{fontSize:25}}>Change1: {ch1}</Text>
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
        width:35,
        height:35,
        resizeMode:'contain'    
    }
}); 


export default QuizList;