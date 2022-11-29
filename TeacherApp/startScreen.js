import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> navigation.navigate("Login")}
          >
        <Text style={{fontSize: 25, color: 'white'}}> Student</Text>      
          </TouchableOpacity>
          
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> navigation.navigate("teacher")}
          >
        <Text style={{fontSize: 25, color: 'white'}}>Teacher</Text>      
      </TouchableOpacity>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#ac6dff",
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
      margin: 12,
        paddingVertical: 12,
        paddingHorizontal: 45,
        borderRadius: 6,
        backgroundColor: '#bd96ff'
    }
})