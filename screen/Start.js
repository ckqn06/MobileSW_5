import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import { ScreenContainer } from "react-native-screens";
import icon from '../assets/school.png'

const Start = (props) => {
    return (
        <View style = {styles.main}>
            <Image
             style={{width:300, height:300}}
             source={icon}
             resizeMode="contain"
            />
            <Text style = {styles.text}>Sunmoon School</Text>
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