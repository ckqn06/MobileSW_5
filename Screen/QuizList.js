import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

const QuizList = (props) => {
    const score1 = useSelector((state) => state.Score1)
    const score2 = useSelector((state) => state.Score2)
    const score3 = useSelector((state) => state.Score3)
    const score4 = useSelector((state) => state.Score4)
    const score5 = useSelector((state) => state.Score5)
    const score6 = useSelector((state) => state.Score6)
    const score7 = useSelector((state) => state.Score7)
    const score8 = useSelector((state) => state.Score8)

    const Correct = require('../assets/images/QuizCorrect.png'); //해당 번호 모든 문제 해결한 경우
    const Wrong = require('../assets/images/QuizWrong.png'); //3개 다 틀린 경우
    const Yet = require('../assets/images/QuizYet.png'); //기본 대기 체크 모양
    const Middle = require('../assets/images/QuizMiddle.png'); //1,2개 맞춘 경우

    const [icon1, setIcon1] = useState(Yet);
    const [icon2, setIcon2] = useState(Yet);
    const [icon3, setIcon3] = useState(Yet);
    const [icon4, setIcon4] = useState(Yet);
    const [icon5, setIcon5] = useState(Yet);
    const [icon6, setIcon6] = useState(Yet);
    const [icon7, setIcon7] = useState(Yet);
    const [icon8, setIcon8] = useState(Yet);
    //점수 값에 따라 해당 퀴즈 번호 사진들을 변경  (score == 0), (score != 0 || score !=3), (score == 3)
    
    function change1() {
        if(score1 == 0) { setIcon1(Yet) } 
        else if(score1 > 0 && score1 < 3) { setIcon1(Middle) }
        else if(score1 == 3) { setIcon1(Correct) } }

    function change2() {
        if(score2 == 0) { setIcon2(Yet) } 
        else if(score2 > 0 && score2 < 3) { setIcon2(Middle) }
        else if(score2 == 3) { setIcon2(Correct) } }

    function change3() {
        if(score3 == 0) { setIcon3(Yet) } 
        else if(score3 > 0 && score3 < 3) { setIcon3(Middle) }
        else if(score3 == 3) { setIcon3(Correct) } }

    function change4() {
        if(score4 == 0) { setIcon4(Yet) } 
        else if(score4 > 0 && score4 < 3) { setIcon4(Middle) }
        else if(score4 == 3) { setIcon4(Correct) } }

    function change5() {
        if(score5 == 0) { setIcon5(Yet) } 
        else if(score5 > 0 && score5 < 3) { setIcon5(Middle) }
        else if(score5 == 3) { setIcon5(Correct) } }

    function change6() {
        if(score6 == 0) { setIcon6(Yet) } 
        else if(score6 > 0 && score6 < 3) { setIcon6(Middle) }
        else if(score6 == 3) { setIcon6(Correct) } }

    function change7() {
        if(score7 == 0) { setIcon7(Yet) } 
        else if(score7 > 0 && score7 < 3) { setIcon7(Middle) }
        else if(score7 == 3) { setIcon7(Correct) } }

    function change8() {
        if(score8 == 0) { setIcon8(Yet) } 
        else if(score8 > 0 && score8 < 3) { setIcon8(Middle) }
        else if(score8 == 3) { setIcon8(Correct) } }

    useEffect(()=>{ change1() }, [score1])
    useEffect(()=>{ change2() }, [score2])
    useEffect(()=>{ change3() }, [score3])
    useEffect(()=>{ change4() }, [score4])
    useEffect(()=>{ change5() }, [score5])
    useEffect(()=>{ change6() }, [score6])
    useEffect(()=>{ change7() }, [score7])
    useEffect(()=>{ change8() }, [score8])

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
                     source = {icon2}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz3")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.3</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon3}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz4")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.4</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon4}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz5")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.5</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon5}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz6")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.6</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon6}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz7")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.7</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon7}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Quiz8")}}>
                <View style = {styles.subView}>
                    <Text style = {styles.button}>Quiz.8</Text>
                    <Image
                     style = {styles.statusImage}
                     source = {icon8}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => {props.navigation.navigate("Main")}}>
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