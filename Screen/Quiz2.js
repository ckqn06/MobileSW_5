import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Quiz2 = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>Jen wants to run a total of 22 miles in five days. 
            The table shows her log for the miles she ran on Monday, Tuesday, Wednesday, and Thursday. {"\n"}{"\n"}
            How many miles must Jen run on Friday to reach her goal?
            </Text>
            </View>
            <View style = {styles.button}>
            <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                <Button
                    title = "Add up her miles and then find out how many more she needs to get to 22 miles"
                    onPress ={() => {
                        props.navigation.navigate("Strate2_1")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Write an equation to solve it"
                    onPress ={() => {
                        props.navigation.navigate("Strate2_2")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Subtract her miles from 22 and see how many are left"              
                    onPress ={() => {
                        props.navigation.navigate("Strate2_3")
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



export default Quiz2