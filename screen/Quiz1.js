import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const Quiz1 = (props) => {
    
    const {params} = props.route
    var score1 = params? params.score1:0;
    var score2 = params? params.score2:0;
    var score3 = params? params.score3:0;
    
    var sumScore = score1 + score2 + score3;

    return (
        <View style = {styles.container}>
            <View style = {styles.textcon}>
            <Text style = {styles.text}>"Todd orders pictures from a photographer. Each picture costs $7.50.
            A one-time shipping fee of $3.25 is added to the cost of the order.
            The total cost of Todd’s order before tax is $85.75.
            {"\n"}{"\n"}
            How many pictures did Todd order?"
            </Text>
            </View>

            <View style = {styles.container1}>
              <Text style = {styles.tt}>Which strategy do you want to use?</Text>
                </View>

                <View style = {styles.container2}>

                <TouchableOpacity>
                    <Text
                    style = {styles.button}
                    onPress ={() =>{
                        props.navigation.navigate("Strate1_1")
                    }}
                    >Write an equation to solve the problem</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text
                    style = {styles.button}
                    onPress ={() =>{
                        props.navigation.navigate("Strate1_2")
                     }}
                    >Add on shipping fee until i get to $85.75</Text>
                </TouchableOpacity>   

                <TouchableOpacity>
                    <Text
                    style = {styles.button}
                    onPress ={() =>{
                        props.navigation.navigate("Strate1_3")
                    }}
                    >Subtract away from $85.75 what did you get? unil i get to 0</Text> 
                 </TouchableOpacity>
            </View>

            <View style = {styles.button}>
                <Button
                    title = "submit"
                    onPress ={() => {
                        props.navigation.navigate("QuizList",
                        {
                            score1:sumScore
                        })
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eefbff',
        paddingTop: 30,
        paddingBottom: 30
    },
    // button: {
    //     marginLeft: 30,
    //     marginRight: 30,
    //     marginBottom: 10,
    //     marginTop: 10
    // },

    container1: {
        marginLeft:20,
        marginRight:20,
        marginTop:8,
        marginBottom:20,
        backgroundColor: '#d9fffc',
        height:160,
        position:'relative',
        marginBottom: 24,
        borderTopStartRadius:16,
        borderTopEndRadius:16,
        borderColor:'#efefef',
        borderWidth:1,
        
    },

    container2: {
        marginLeft:20,
        marginRight:20,
        marginTop:8,
        marginBottom:20,
        backgroundColor: '#ffffff',
        top:-60,
        position:'relative',
        marginBottom: 24,
        borderRadius:0,
        borderBottomStartRadius:16,
        borderBottomEndRadius:16,
        borderColor:'#efefef',
        borderWidth:1,
    },
    
    tt: {
        marginTop:32,
        left : 20,
        width: 400,
        position:'relative',
        flex: 0,
        color: 'black',
        marginBottom: 24,
        fontSize:24,
    },

    button: {
        marginLeft:16,
        marginRight:20,
        marginTop:8,
        marginBottom:20,
        position:'relative',
        backgroundColor: '#f7f7f7',
        paddingVertical: 0,
        paddingHorizontal:12,
        marginTop: 16,
        fontSize: 20,
        borderRadius: 8,
        borderColor: '#8463ff',
    },

    textcon: {
        backgroundColor: '#d9fffc',
        marginLeft:20,
        marginRight:20,
        marginTop:8,
        marginBottom:20,
        borderRadius:8,
        borderColor:'#efefef',
        borderWidth:1,
    },
    text: {
        marginLeft:12,
        marginRight:12,
        marginTop:12,
        marginBottom:12,
        fontSize: 20,
        color: 'black',
    },
    
}); 

export default Quiz1