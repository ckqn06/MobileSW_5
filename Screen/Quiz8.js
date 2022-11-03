import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Quiz8 = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>Owen is designing a rectangular garden whose length is 25 feet. 
            He needs to put fencing all around the exterior of the garden and wants to use less than 80 feet of fencing.{"\n"}{"\n"}
            How wide could the garden be?
            </Text>
            </View>
            <View style = {styles.button}>
            <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                <Button
                    title = "Write an inequality to solve the problem"
                    onPress ={() => {
                        props.navigation.navigate("")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Guess and check"
                    onPress ={() => {
                        props.navigation.navigate("")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Add up until i figure out the width of the garden"
                    onPress ={() => {
                        props.navigation.navigate("")
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
        height: 200,
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



export default Quiz8