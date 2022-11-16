import {View, Text, StyleSheet, Image,
    Button, TextInput, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
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
            <img height={300} width={300} src={LoginImage}/>
            <Text style={styles.header}>Login</Text>
            <TextInput placeholder="Enter your Name" style={styles.textInput} />
            <View style={styles.Button}>
              <Button title="Login" onPress ={() => {
                        props.navigation.navigate("QuizList")
                    }} />
            </View>
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
      },
      textInput: {
        height: 40,
        fontSize: 24,
        color: '#afafaf',
        borderBottomWidth: 1,
        marginBottom: 24,
      },
      Button: {
        position:'relative',
        top:-32,
        height:32,
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

export default Register