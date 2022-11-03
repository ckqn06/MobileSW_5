import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Quiz1 = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>"Todd orders pictures from a photographer. Each picture costs $7.50.
            A one-time shipping fee of $3.25 is added to the cost of the order.
            The total cost of Todd’s order before tax is $85.75.
            {"\n"}{"\n"}
            How many pictures did Todd order?"
            </Text>
            </View>
            <View style = {styles.button}>
                <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                <Button
                    title = "Write an equation to solve"
                    onPress ={() => {
                        props.navigation.navigate("Strate1_1")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Add on shipping fee until i get to $85.75"
                    onPress ={() => {
                        props.navigation.navigate("Strate1_2")
                    }}
                />
            </View>
            <View style = {styles.button}>
            <Button
                    title = "Subtract away from $85.75 what did you get? unil i get to 0"
                    onPress ={() => {
                        props.navigation.navigate("Strate1_3")
                    }}
                />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "back"
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
        height: 220,
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

export default Quiz1