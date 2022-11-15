import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Welcome = (props) => {
    return (
        <View style = {styles.main}>
            <View style = {styles.subView_1}>
                <TouchableOpacity style={styles.button}>
                    <Image
                     style = {{width:300, height:300}}
                     source = {require('../assets/images/hand.png')}
                     resizeMode = "contain"
                     onPress = {() => { props.navigation.navigate("QuizList") }}>
                    </Image>
                </TouchableOpacity>
                <Text style = {styles.mainText}>Welcome</Text>
                <Text style = {styles.mainText}>'LGH'!</Text>
            </View>

            <View style = {styles.subView_2}>
                <Text style = {styles.subText}>Touch hand to START</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        //backgroundColor: '#4A2F72'
    },
    subView_1: {
        marginTop:50,
        alignItems:'center',
        justifyContent:'center'
    },
    subView_2: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    mainText: {
        fontSize:40
    },
    subText: {
        fontSize:35
    },
    button: {
        margin: 10
    }
});

export default Welcome