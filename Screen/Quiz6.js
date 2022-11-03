import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Quiz6 = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>A rectangle has a length that is unknown but is 12 inches longer than its width. 
            The perimeter of the rectangle is 104 inches. {"\n"}{"\n"}
            What is the width of the rectangle?
            </Text>
            </View>
            <View style = {styles.button}>
            <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                <Button
                    title = "Write an equation to solve"
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
                    title = "Try to use a diagram to understand"
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
        height: 175,
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



export default Quiz6