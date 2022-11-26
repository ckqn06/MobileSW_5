import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> navigation.navigate("LoginScreen")}
          >
        <Text> Student</Text>      
          </TouchableOpacity>
          
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> navigation.navigate("teacher")}
          >
        <Text>Teacher</Text>      
      </TouchableOpacity>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        margin: 12,
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#9F73AB'
    }
})