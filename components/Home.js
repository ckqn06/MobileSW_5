import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <ImageBackground
    style={styles.container}
    resizeMode="cover"
    source={require("../assets/images/puzzle.jpg")}
    imageStyle={styles.backgroundImg}
>

      <View style={{marginTop: 50}}>
      <Image
        style={styles.img}
        source={require('../assets/images/cube2.png')}
      />
      </View>
          <Text style={styles.upperText}>Welcome</Text> 

          <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("ResultScreen")}
                >
            <Text style={styles.text}>Check Results</Text>    
          </TouchableOpacity>
          
      </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3F0071'
      //  justifyContent: 'center'
    },
    upperText: {
        marginTop: 30,
        fontSize: 60,
        fontWeight: "bold",
        color: 'white'
    },
    btn: {
        backgroundColor: '#59C1BD',
        marginTop: 100,
        paddingVertical: 10,
        paddingHorizontal: 74,
        borderRadius: 10
    },
    text: {
        fontSize : 18,
        color: 'white'
    },
    img:{
        height: 200,
        width: 200
    },
    backgroundImg:{opacity: 0.3},
})