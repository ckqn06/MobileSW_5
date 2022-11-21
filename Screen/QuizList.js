import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"

const QuizList = (props) => {
    //const scoreCounter = useSelector(state => state.scoreCounter)

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
    

    return(
        <ScrollView style ={{width:"100%"}}>
        <View style ={styles.container}>
            <View style = {styles.main}>
                    <TouchableOpacity>
                    <Text
                    style = {styles.button}
                    onPress ={() => {
                        props.navigation.navigate("Quiz1")               
                    }}
                    >
                    Quiz.1
                    </Text>
                    </TouchableOpacity>
                    <Image
                    style = {{width:20, height:35}}
                    source = {icon1}
                    />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.button}
                 onPress ={() => {
                    props.navigation.navigate("Quiz2")               
                }}
                >
                Quiz.2
                </Text>
                </TouchableOpacity>
                <Image
                style = {{width:20, height:35}}
                source = {Yet}
                />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.button}
                 onPress ={() => {
                    props.navigation.navigate("Quiz3")               
                }}
                >
                Quiz.3
                </Text>
                </TouchableOpacity>
                <Image
                style = {{width:20, height:35}}
                source = {Yet}
                />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.button}
                 onPress ={() => {
                    props.navigation.navigate("Quiz4")               
                }}
                >
                Quiz.4
                </Text>
                </TouchableOpacity>
                <Image
                style = {{width:20, height:35}}
                source = {Yet}
                />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.button}
                 onPress ={() => {
                    props.navigation.navigate("Quiz5")               
                }}
                >
                Quiz.5
                </Text>
                </TouchableOpacity>
                <Image
                style = {{width:20, height:35}}
                source = {Yet}
                />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.button}
                 onPress ={() => {
                    props.navigation.navigate("Quiz6")               
                }}
                >
                Quiz.6
                </Text>
                </TouchableOpacity>
                <Image
                style = {{width:20, height:35}}
                source = {Yet}
                />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.button}
                 onPress ={() => {
                    props.navigation.navigate("Quiz7")               
                }}
                >
                Quiz.7
                </Text>
                </TouchableOpacity>
                <Image
                style = {{width:20, height:35}}
                source = {Yet}
                />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.button}
                 onPress ={() => {
                    props.navigation.navigate("Quiz8")               
                }}
                >
                Quiz.8
                </Text>
                </TouchableOpacity>
                <Image
                style = {{width:20, height:35}}
                source = {Yet}
                />
            </View>
            <View style = {styles.main}>
                <TouchableOpacity>
                <Text
                 style = {styles.submitbutton}
                 onPress ={() => {
                    props.navigation.navigate("Start")               
                }}
                >
                submit
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
                {/* <Text>Score1: {JSON.stringify(Score1)}</Text> */}
                
                {/*<Text>Current Score: {scoreCounter}</Text>*/}
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#DDA0DD',
        paddingTop: 30,
        paddingBottom: 30
    },
    main: {
        marginLeft: 10,
        marginRight: 40,
        marginBottom: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        width: 260,
        height: 40,
        backgroundColor: 'steelblue',
        color: 'white',
        margin: 20,
        fontSize: 25
    },
    submitbutton: {
        width: 300,
        height: 40,
        backgroundColor: 'steelblue',
        color: 'white',
        margin: 20,
        fontSize: 30
    },
}); 


export default QuizList;