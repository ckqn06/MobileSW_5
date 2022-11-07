import { View, Text, Button, StyleSheet, TextInput, ScrollView } from "react-native";

const Quiz4 = (props) => {
    return (
        <ScrollView style ={{width:"100%"}}>
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>Elena, Karla, and Faye are playing a card game where they score points. 
            Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does. 
            The sum of their three scores is 114. {"\n"}{"\n"}Who scores more points, Karla or Faye?
            </Text>
            </View>
            <View style = {styles.button}>
            <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                <Button
                    title = "Guess the number of points and see if it works"
                    onPress ={() => {
                        props.navigation.navigate("Strate4_1")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Write equations to solve the problem"
                    onPress ={() => {
                        props.navigation.navigate("Strate4_2")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Use a diagram to try to understand the problem"
                    onPress ={() => {
                        props.navigation.navigate("Strate4_3")
                    }}
                />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "submit"
                    onPress ={() => {
                        props.navigation.navigate("QuizList")
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
        marginBottom: 10,
        marginTop: 10
    },
    textcon: {
        backgroundColor: 'white',
        height: 250,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    tt: {
        backgroundColor: '#DDA0DD',
        color: 'black',
        marginBottom: 5,
    },
}); 


export default Quiz4