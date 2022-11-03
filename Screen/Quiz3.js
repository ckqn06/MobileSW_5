import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Quiz3 = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>Jennifer has 84.5 yards of fabric to make curtains. 
            She makes 6 identical curtains and has 19.7 yards of fabric remaining. {"\n"}{"\n"}
            How many yards of fabric does Jennifer use per curtain?
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
                    title = "subtract the extra yards and then figure out how much fabric she used for each curtain"
                    onPress ={() => {
                        props.navigation.navigate("")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Use a diagram to try to understand the problem"
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
        height: 180,
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

export default Quiz3