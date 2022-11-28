import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Modal, Pressable,
    ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../Auth/firebaseConfig";
import { Signin } from "../../Auth/AuthFunctions";
import { BackHandler } from 'react-native';

const Login = (props) => {
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if(data) { props.navigation.replace("Welcome") }
            else { props.navigation.navigate("Login") }})
    }, [])

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    const [email,setEmail] = useState("")
    const onChangeEmail = (event) => {setEmail(event)}

    const [myPWDInput,setmyPWDInput] = useState("")
    const onChangePWDInput = (event) => {setmyPWDInput(event)}

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setmodalText] = useState("");
    const [modalImage, setmodalImage] = useState(require('../../assets/images/warning.png'));
    
    function changeMText() {
        if(!email && !myPWDInput) { setmodalText("Email and Password is required!") } 
        else if(!email || !myPWDInput) { setmodalText("Email or Password is required!") }
        else if(email && myPWDInput) { setmodalText("Logged In!") }
        else { setmodalText("d") }}
    useEffect(()=>{ changeMText() })

    function changeMImage() {
        if(email && myPWDInput) { setmodalImage(require('../../assets/images/enter.png')) }}
    useEffect(()=>{ changeMImage() })

    const loginHandler = () => {
        if (!email && !myPWDInput) { setModalVisible(!modalVisible) }
        else if (!email || !myPWDInput) { setModalVisible(!modalVisible) }
        else {
            setModalVisible(!modalVisible)
            Signin(email, myPWDInput)
            console.log("logged In")
            setEmpty(); }
    }

    const setEmpty = () => {
        setEmail("")
        setmyPWDInput("")} 

    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.main}> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                <ScrollView style ={{width:"100%"}}>
                    <View style = {styles.main}>
                        <View style = {styles.subView_1}>
                            <Image
                             style = {{width:500, height:300}}
                             source = {require('../../assets/images/cube2.png')}
                             resizeMode = "contain"/>
                        </View>
            
                        <View style = {styles.subView_2}>
                            <Text style = {styles.subText}>Email</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {email}
                             onChangeText = {onChangeEmail}
                             placeholder = "Insert your Email"/>

                            <Text style = {styles.subText}>PassWord</Text>
                            <TextInput
                             style = {styles.textInput}
                             value = {myPWDInput}
                             onChangeText = {onChangePWDInput}
                             placeholder = "Insert your Password"
                             secureTextEntry={true}/>
                        </View>

                        <View style = {styles.subView_3}>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <View style = {styles.loginButton}>
                                    <Text style = {styles.buttonText}>LOGIN</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress = {() => {props.navigation.navigate("Sign_Up")}}>
                                <View style = {styles.signUpButton}>
                                    <Text style = {styles.buttonText}>SIGN UP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Modal
                         animationType="slide"
                         transparent={true}
                         visible={modalVisible}
                         onRequestClose={() => { setModalVisible(!modalVisible); }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Image
                                     style = {{width:150, height:150}}
                                     source = {modalImage}
                                     resizeMode = "contain"/>
                                    <Text style={styles.modalText}>{modalText}</Text>
                                    <Pressable
                                        style={styles.modalButton}
                                        onPress={loginHandler}>
                                        <Text style={styles.modalButtonText}>C L O S E</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor: '#eefbff'
    },
    subView_1: {
        alignItems:'center'
    },
    subView_2: {
        justifyContent:'center',
        marginLeft:10,
        marginRight:30
    },
    subView_3: {
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10,
        marginBottom:45
    },
    mainText: {
        fontSize:40
    },
    subText: {
        marginLeft:10,
        fontSize:30
    },
    textInput: {
        height:40,
        marginTop:20,
        marginBottom:30,
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    loginButton: {
        alignItems:'center',
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        marginRight:15,
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'steelblue'
    },
    signUpButton: {
        alignItems:'center',
        padding:10,
        marginLeft:15,
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'steelblue'
    },
    buttonText: {
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },

    centeredView: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    modalView: {
        alignItems:"center",
        padding:30,
        elevation:5,
        shadowRadius:4,
        shadowOpacity:0.25,
        shadowColor:"#000",
        shadowOffset:{ width: 0, height: 2 },
        borderRadius:20,
        backgroundColor:"white"
    },
    modalText: {
        marginTop:10,
        marginBottom:20,
        fontSize:16
    },
    modalButton: {
        paddingTop:9,
        paddingBottom:9,
        paddingLeft:15,
        paddingRight:15,
        elevation:3,
        borderWidth:1,
        borderRadius:13,
        borderColor:'black',
        backgroundColor:'steelblue'
    },
    modalButtonText: {
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    }
});

export default Login