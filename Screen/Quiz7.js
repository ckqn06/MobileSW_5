import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Quiz7 = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>Jim needs to rent a car. 
            A rental company charges $21.00 per day to rent a car and $0.10 for every mile driven. 
            He will travel 250 miles. He has $115.00 to spend. {"\n"}{"\n"}
            How many days can he rent the car for?
            </Text>
            </View>
            <View style = {styles.button}>
            <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                <Button
                    title = "Write an inequality to solve the problem"
                    onPress ={() => {
                        props.navigation.navigate("Strate7_1")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Guess and check"
                    onPress ={() => {
                        props.navigation.navigate("Strate7_2")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Add up until i find the number of days"
                    onPress ={() => {
                        props.navigation.navigate("Strate7_3")
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
        height: 195,
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



export default Quiz7