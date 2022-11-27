import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
          <Text style={styles.upperText}>Welcome</Text> 

          <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("ResultScreen")}
                >
            <Text style={styles.text}>Start</Text>    
          </TouchableOpacity>
          
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      //  justifyContent: 'center'
    },
    upperText: {
        marginTop: 180,
        fontSize: 75,
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: 'grey',
        marginTop: 120,
        paddingVertical: 16,
        paddingHorizontal: 36,
        borderRadius: 8
    },
    text: {
        fontSize : 25
    }
})