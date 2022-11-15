import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { useState } from 'react';

const Main = (props) => {
    return (
        <View style = {styles.main}>
            <Text style = {styles.subText}>Name: LGH</Text>
            <Text style = {styles.subText}>School ID: </Text>
            <Text style = {styles.subText}>Password: </Text>
            <View style = {styles.subView_1}>
                <Image
                 style = {{width:200, height:200}}
                 source = {require('../assets/images/class.png')}
                 resizeMode = "contain">
                </Image>
                <View style = {styles.subView_4}>
                 <Text style = {styles.mainText}>Today's Quiz</Text>
                 <View style = {styles.subView_5}>
                    <Text style = {styles.mainText}>10/20</Text>
                 </View>
                </View>
            </View>

            <View style = {styles.subView_2}>
                <Button
                 title = "Quiz Start"
                 color = '#00CC66'
                 fontColor = 'black'
                 onPress = {() => { props.navigation.navigate("QuizList") }}
                />
            </View>

            <View style = {styles.subView_3}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        //backgroundColor: '#4A2F72'
    },
    subView_1: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#E0E0E0'
    },
    subView_2: {
        alignItems:'left',
        justifyContent:'center',
        padding:20,
        marginLeft:160,
        marginRight:160
    },
    subView_3: {
        flex:0.5,
        alignItems:'left',
        justifyContent:'center',
        marginLeft:160,
        marginRight:160
    },
    subView_4: {
        alignItems:'left',
        justifyContent:'center'
    },
    subView_5: {
        flexDirection:'row',
        alignItems:'left',
        justifyContent:'center'
    },
    mainText: {
        fontSize:30,
        padding:20
    },
    subText: {
        fontSize:20,
        padding:5,
        marginLeft:20
    }
});

export default Main