import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import {useState} from 'react'


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
   
    return(
        <ScrollView style ={{width:"100%"}}>
        <View style ={styles.container}>
            {/* {ButtonList} */}
            <View style = {styles.button}>
                <Button
                title = "Quiz.1"
                onPress ={() => {
                    props.navigation.navigate("Quiz1")               
                }}
                />
            </View>
                <View style = {styles.button}>
                <Button
                title = "Quiz.2"
                onPress ={() => {
                    props.navigation.navigate("Quiz2")
                }}
                />
            </View>
                <View style = {styles.button}>
                <Button
                title = "Quiz.3"
                onPress ={() => {
                    props.navigation.navigate("Quiz3")
                }}
                />
            </View>
                <View style = {styles.button}>
                <Button
                title = "Quiz.4"
                onPress ={() => {
                    props.navigation.navigate("Quiz4")
                }}
                />
            </View>
                <View style = {styles.button}>
                <Button
                title = "Quiz.5"
                onPress ={() => {
                    props.navigation.navigate("Quiz5")
                }}
                />
            </View>
                <View style = {styles.button}>
                <Button
                title = "Quiz.6"
                onPress ={() => {
                    props.navigation.navigate("Quiz6")
                }}
                />
            </View>
                <View style = {styles.button}>
                <Button
                title = "Quiz.7"
                onPress ={() => {
                    props.navigation.navigate("Quiz7")
                }}
                />
            </View>
                <View style = {styles.button}>
                <Button
                title = "Quiz.8"
                onPress ={() => {
                    props.navigation.navigate("Quiz8")
                }}
                />
            </View>
            <View style = {styles.button}>
                <Button
                title ="submit"
                onPress ={() => {
                    props.navigation.navigate("Start")
                }}
                />
            </View>
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
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10
    },
}); 


export default QuizList;