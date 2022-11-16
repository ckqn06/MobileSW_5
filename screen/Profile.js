import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import TodayImage from '../assets/TodaysQuiz.png';

const Profile = (props) => {
    return (
        <View style = {styles.main}>
            <img height={200} src={TodayImage}/>
            <TouchableOpacity>
                <Text
                style = {{fontSize:60,textAlign:'center',marginTop:30, height:50}
                }
                >USA Study</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("QuizList")
                }}
                >Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 120,
        backgroundColor: '#eefbff',
    },

    text: {
        margin: 60,
        fontSize: 40,
    },

    button: {
        position:'relative',
        top:160,
        height:40,
        margin:0,
        backgroundColor: '#8463ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal:16,
        fontSize: 24,
        width: '100%',
        borderRadius: 5,
        fontWeight:'bold',
        borderColor: '#8463ff',
    },

});

export default Profile;