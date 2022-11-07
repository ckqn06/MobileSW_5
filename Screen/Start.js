import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const Start = (props) => {
    return (
        <View style = {styles.main}>
            <Text style = {styles.text}>QUIZ TEST</Text>
            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("Register")
                }}
                >start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 130,
        backgroundColor: '#DDA0DD',
    },
    text: {
        margin: 70,
        fontSize: 40,
    },
    button: {
        margin: 40,
        backgroundColor: "skyblue",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 45,
        width: '100%',
        borderRadius: 20,
    },
});

export default Start