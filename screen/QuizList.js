import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {useState} from 'react'
import Correct from '../assets/QuizCorrect.png';
import Wrong from '../assets/QuizWrong.png';
import Yet from '../assets/QuizYet.png';
import ListImage from '../assets/QuizListImage.png';
import { BorderlessButton } from "react-native-gesture-handler";


const QuizList = (props) => {
    // const quizName = ["Quiz1","Quiz2","Quiz3","Quiz4","Quiz5","Quiz6","Quiz7","Quiz8"];
    // const ButtonList = quizName.map((item)=>{
    //     return(
    //         <View style = {styles.button}>
    //         <Button
    //             title = {item}
    //             onPress ={() => {
    //                 props.navigation.navigate({item})
    //             }}
    //         />
    //         </View>
    //     )
    // })
    const {params} = props.route
    var score1 = params? params.score1:0;
    
    return(
        <ScrollView style ={{width:"100%"}}>
        <View style ={styles.container}>
            {/* {ButtonList} */}
            <View style = {styles.LImage}>
                <img height={200} width={200} src={ListImage}/>
            </View>
            {/* <View style = {styles.QuizC}>
                <img height={20} width={20} src={Correct}/>
            </View>
            <View style = {styles.QuizW}>
                <img height={20} width={20} src={Wrong}/>
            </View>
                <View style = {styles.QuizY}>
                <img height={20} width={20} src={Yet}/>
            </View> */}
            
            {/* <View style = {styles.button}>
                <Button
                title = "Quiz.1"
                onPress ={() => {
                    props.navigation.navigate("Quiz1")               
                }}
                />
            </View> */}
            
            <View style = {styles.Qstatus1}>
                <img height={20} width={20} src={Correct}/>
            </View>

            <View style = {styles.Qstatus2}>
                <img height={20} width={20} src={Yet}/>
            </View>

            <View style = {styles.Qstatus3}>
                <img height={20} width={20} src={Wrong}/>
            </View>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz1")
                }}
                >Quiz1</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.line}
                    >----------------------------------------------------------------
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz2")
                }}
                >Quiz2</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.line}
                    >----------------------------------------------------------------
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz3")
                }}
                >Quiz3</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.line}
                    >----------------------------------------------------------------
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz4")
                }}
                >Quiz4</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.line}
                    >----------------------------------------------------------------
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz5")
                }}
                >Quiz5</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.line}
                    >----------------------------------------------------------------
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz6")
                }}
                >Quiz6</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.line}
                    >----------------------------------------------------------------
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz7")
                }}
                >Quiz7</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.line}
                    >----------------------------------------------------------------
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Quiz8")
                }}
                >Quiz8</Text>
            </TouchableOpacity>

            
            
        </View>
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eefbff',
        paddingTop: 30,
        paddingBottom: 30
    },

    LImage: {
        position:'relative',
        top:-20,
        left:28,
    },

    Qstatus1: {
        position:'absolute',
        marginLeft:340,
        marginTop:216,
    },

    Qstatus2: {
        position:'absolute',
        marginLeft:340,
        marginTop:272,
    },

    Qstatus3: {
        position:'absolute',
        marginLeft:340,
        marginTop:328,
    },

    button: {
        position:'relative',
        height:16,
        width:96,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal:16,
        fontSize: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        fontWeight:'bold',
    },

    line: {
        position:'relative',
        alignItems: 'center',
        justifyContent: 'center',
        margin:-20,
        marginLeft: 30,
        marginRight: 30,
        marginTop:-12,
    },
}); 


export default QuizList;