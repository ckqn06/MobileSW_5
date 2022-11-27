import { View, Text, StyleSheet, Image, TouchableOpacity, BackHandler } from "react-native";
import { auth } from "../Auth/firebaseConfig";
import { db } from "../Auth/firebaseConfig";
import { doc, getDoc } from "firebase/firestore"
import { useState, useEffect } from "react";

const Welcome = (props) => {
    const [studentData, setStudentData] = useState({});

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    useEffect(() => {
        if (auth.currentUser) {
            let uid = auth.currentUser.uid
            const fetchData = async () => {
                const docRef = doc(db, "student", uid)
                await getDoc(docRef)
                .then((snapshot) => {
                    console.log(snapshot.data());
                    setStudentData(snapshot.data())
                })
                .catch(error => console.log(error.message))
            };
            fetchData(); }
    }, [auth])

    return (
        <TouchableOpacity onPress = {() => { props.navigation.navigate("Main") }}>
            <View style = {styles.main}>
                <Image
                 style = {styles.image}
                 source = {require('../assets/images/hand.png')}
                 resizeMode = "contain"/>
                <Text style = {styles.mainText}>Welcome</Text>
                <Text style = {styles.mainText}>'{studentData.Name}'!</Text>
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
        fontSize:50
    },
    subText: {
        marginTop:30,
        marginBottom:200,
        fontSize:27
    }
});

export default Welcome