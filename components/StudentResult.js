import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const StudentResult = ({route, navigation}) => {

    const {name, email, score, score1, score2, score3,
        score4, score5, score6, score7, score8 } = route.params;

    const DATA = [
        {score: JSON.stringify(score1)},
        {score: JSON.stringify(score2)},
        {score: JSON.stringify(score3)},
        {score: JSON.stringify(score4)},
        {score: JSON.stringify(score5)},
        {score: JSON.stringify(score6)},
        {score: JSON.stringify(score7)},
        {score: JSON.stringify(score8)},

    ]    
 
    const percent = (JSON.stringify(score) * 100 / (24)).toFixed(0) //student score in percentage
    const studentName = JSON.stringify(name).replace(/"/g,"") // student's name
    const studentEmail = JSON.stringify(email).replace(/"/g,"") // student's email


  return (
    <>
        <ScrollView>
        <View style={styles.item}>

<View style={styles.upperView}>
    <Text style={styles.upperText}>name: {studentName}</Text>
    <Text  style={styles.upperText}>email: {studentEmail}</Text>
</View>

  <View style={styles.lowerView}>

 <View style={styles.scoreView1}>
 <Text style={[styles.lowerText, {color: 'white', fontSize: 75}]}>{JSON.stringify(score)}</Text>
 <View style={{height: 2, width: 110, backgroundColor: 'white'}}/>
 <Text style={{color: 'white', marginTop: 15, marginLeft: 25, fontSize: 25}}>score</Text>
 </View>

 <View style={{marginLeft: 15}}>
 <View style={styles.scoreView2}>
  <Text style={styles.lowerText}>{percent} %</Text>
  </View>
  <View style={{height: 2, width: 110, backgroundColor: 'white', marginLeft: 45, marginTop: 12}}/>
  <Text style={{color: 'white', marginTop: 15, marginLeft: 30, fontSize: 23}}>completed</Text>
 </View>

  </View>

  <View style={styles.score}>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 1:  {JSON.stringify(score1)} / 3</Text></View>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 2:  {JSON.stringify(score2)} / 3</Text></View>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 3:  {JSON.stringify(score3)} / 3</Text></View>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 4:  {JSON.stringify(score4)} / 3</Text></View>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 5:  {JSON.stringify(score5)} / 3</Text></View>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 6:  {JSON.stringify(score6)} / 3</Text></View>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 7:  {JSON.stringify(score7)} / 3</Text></View>
  <View style={styles.scoreItem}><Text style={styles.ItemTxt}>Quiz 8:  {JSON.stringify(score8)} / 3</Text></View>
  </View>
</View>
        </ScrollView>
    </>
  )
}

export default StudentResult

const styles = StyleSheet.create({
    item:{
        flex: 1,
       alignItems: 'center',
       backgroundColor: '#3F0071'
       // justifyContent: 'center'
    },
    upperView:{
        marginTop: 18,
        marginLeft: 20,
        padding: 25,
        marginRight: 25,
        width: "90%",
        backgroundColor: '#80489C',
        borderRadius: 9
    },
    upperText:{
        fontSize: 20,
        marginVertical: 5,
        fontWeight: 'bold',
        color: 'white'
    },
    lowerView:{
        marginTop: 50,
        flexDirection: 'row',
        height: 250,
        width: '100%'

    },
    lowerText:{
        color: 'white',
        fontSize: 30
    },

    scoreView1:{
        marginTop: 30,
        marginLeft: 35
    },

    scoreView2:{
        marginTop: 20,
        marginLeft: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: "#22A39F",
        height: 100,
        width: 100,
        borderRadius: 100 / 2
    },
    score:{
        marginTop: 20,
        marginBottom: 10,
        width: '90%',
        backgroundColor: '#FCFDF2',
        padding: 12
    },
    scoreItem:{
        padding: 12,
        marginVertical: 3,
        backgroundColor: '#80489C',
        borderRadius: 5,
        alignItems: 'center'
    },
    ItemTxt:{
        color: 'white',
        fontSize: 18,
        fontWeight: '900'
    }
})  