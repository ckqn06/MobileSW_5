import {View, Text, StyleSheet, Image,
    Button, TextInput, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native";
//import Study from './assets/study.jpg';
import LoginImage from '../assets/LoginImage.png';

const Register = (props) => {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
        {/* 키보드랑 UI 겹쳐지는 현상 해결*/}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        {/* 빈공간 클릭 시 키보드 내려감 */}
          <View style={styles.inner}>
            {/* <Image style = {styles.pic}
             source ={Study}
             resizeMode ="contain"
             /> */}
            <img height={240} width={240} src={LoginImage}/>
            <Text style={styles.header}>Login</Text>
            <TextInput placeholder="Enter your ID" style={styles.textInput} />
            <TextInput placeholder="Enter your PW" style={styles.textInputPW} />
            {/* <View style={styles.Button}>
              <Button title="Login" onPress ={() => {
                        props.navigation.navigate("QuizList")
                    }} />
            </View> */}
            <TouchableOpacity>
                <Text
                style = {styles.button}
                onPress ={() =>{
                    props.navigation.navigate("QuizList")
                }}
                >Login</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eefbff',
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
      },
      // pic: {
      //   width:100,
      //   height:100,
      //   marginBottom: 48
      // },
      header: {
        fontSize: 48,
        marginBottom: 48,
        fontWeight:'bold',
        marginTop:-20,
      },
      textInput: {
        position:'relative',
        top: -40,
        height: 40,
        fontSize: 24,
        color: '#afafaf',
        borderBottomWidth: 1,
        
      },
      textInputPW: {
        position:'relative',
        top: -40,
        height: 40,
        fontSize: 24,
        color: '#afafaf',
        borderBottomWidth: 1,
        marginTop: -20,
        marginBottom: 32,
      },
      button: {
        position:'relative',
        top:-68,
        height:40,
        width:96,
        margin:0,
        backgroundColor: '#8463ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal:16,
        fontSize: 24,
        borderRadius: 5,
        fontWeight:'bold',
        borderColor: '#8463ff',
    },
});

export default Register