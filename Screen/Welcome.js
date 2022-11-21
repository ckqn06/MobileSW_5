import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Welcome = (props) => {
    return (
        <TouchableOpacity onPress = {() => { props.navigation.navigate("Main") }}>
            <View style = {styles.main}>
                <Image
                 style = {styles.image}
                 source = {require('../assets/images/hand.png')}
                 resizeMode = "contain"/>
                <Text style = {styles.mainText}>Welcome</Text>
                <Text style = {styles.mainText}>'LGH'!</Text>
                <Text style = {styles.subText}>Touch anywhere to START</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main: {
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#eefbff'
    },
    image: {
        marginTop:50,
        marginBottom:50,
        width:300,
        height:300
    },
    mainText: {
        marginBottom:15,
        fontSize:40
    },
    subText: {
        marginTop:30,
        marginBottom:200,
        fontSize:27
    }
});

export default Welcome