import {View, Text, StyleSheet, Image,
    Button, TextInput, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
//import Study from './assets/study.jpg';

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
            <Text style={styles.header}>Header</Text>
            <TextInput placeholder="name" style={styles.textInput} />
            <View style={styles.btnContainer}>
              <Button title="Submit" onPress ={() => {
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
        backgroundColor: '#DDA0DD'
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
        fontSize: 36,
        marginBottom: 48
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 25
      },
      btnContainer: {
        backgroundColor: "white",
        marginTop: 8
      }
});

export default Register