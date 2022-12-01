import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, ScrollView, TouchableOpacity} from "react-native";
import { db } from "../auth/firebaseConfig";
import { collection, doc, getDocs, onSnapshot, orderBy, query, waitForPendingWrites } from "firebase/firestore";
import { useState, useEffect } from "react";


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const ResultScreen = ({navigation}) => {

    // 파이어베이스 모두 정보 가져오며 저장하기
    const [studentRecord, setStudentRecord] = useState([]);

    // 학생들 평균 점수 저장하기
    const [scoreAverage, setScoreAverage] = useState(0)

    const [isLoading, setIsLoading] = useState(false)

    //학생들 모두 정보 가져오기 함수
    const fetchData = async () => {

        const q = query(collection(db, "student"), orderBy("score", "desc") ,) // q for collection reference

       const querySnapshot = await getDocs(q)

        let user = []

      await  querySnapshot.forEach((doc) => {
            user.push({
                ...doc.data(),
                id: doc.id
            })
            setStudentRecord(user)
        })
    }

    // 화면 처룸에 제시할때 useEffect 실행
    useEffect(() => {
        fetchData();
    }, [])


    const scoreSum = async () => {

        var sum = 0;

        for (let i = 0; i < studentRecord.length; i++)
        { sum += studentRecord[i].score}

       console.log("sum of score is: ", sum)

            if(studentRecord.length>0){
            var average = (sum / studentRecord.length).toFixed(2)
            
            console.log("The average score is: ", average)
            if(average === NaN){
                setScoreAverage(0)
            }else{
                setScoreAverage(average)
            }
        }
    }

    useEffect(() => {
        scoreSum()
    }, [])
    
    const onRefresh = React.useCallback(() => {
        setIsLoading(true);
        wait(2000).then(() => {
            fetchData()
            scoreSum()
            console.log("refresh control working")
            setIsLoading(false)
        })
    })

    return (
         <View style={styles.container}>
            
            <View style={styles.upperView}>
                <Text style={{fontSize: 28, color: 'white' }}>Quiz Results</Text>
                <View style={{backgroundColor: '#2C3333', marginTop: 20, padding: 16, borderWidth: 1, borderRadius: 10}}>
                <Text style={{fontSize: 22, color: 'white'}}>Score Average: {scoreAverage}</Text>
                </View>
            </View>
            
                <View style={styles.lowerView}>
                    <View style={{
                        flexDirection: 'row',
                         padding: 10, marginHorizontal: 5, borderRadius: 8,
                        
                    }}>
                        <View style={{alignItems: 'flex-start', flex: 1}}>
                        <Text style={{fontSize: 16, color: "#FCFDF2"}}>Name</Text>
                        </View>
                     
                        <View style={{alignItems: 'flex-end', flex: 1}}>
                        <Text style={{fontSize: 16, color: "#FCFDF2"}}>Score</Text>
                        </View>
                    </View>

                    {/* 각 학생 이름과 점수 표시*/}
                    <FlatList
                        data={studentRecord}
                        renderItem={({ item, index }) => (
                            item !== null ? <TouchableOpacity 
                                    style={styles.Item}
                                    onPress={() => {
                                        navigation.navigate('Student', {
                                            name: item.Name,
                                            email: item.Email,
                                            score: item.score,
                                            score1: item.score1,
                                            score2: item.score2,
                                            score3: item.score3,
                                            score4: item.score4,
                                            score5: item.score5,
                                            score6: item.score6,
                                            score7: item.score7,
                                            score8: item.score8
                                        })
                                    }}
                                    >
                                <View style={{ flex: 1, alignItems: "flex-start", flexDirection: 'row' }}>
                                    <Text style={{fontSize: 18, color: "#FFDE00"}}>{index+1}</Text>
                                    <Text style={{ fontSize: 18, marginLeft: 18, color: 'white'}}>{item.Name}</Text>
                                </View>
                               
                                <View style={{
                                    flex: 1, alignItems: "flex-end",}}>
                                <Text style={{fontSize: 20, color: 'white'}}>{item.score}</Text>
                                </View>
                            </TouchableOpacity> : <View> <Text> No Data...</Text></View>
                        )}
                        refreshing={isLoading}
                        onRefresh={onRefresh}
                        />
                </View>

            </View>
    )
}

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
        alignItems: 'center',
        backgroundColor: '#3F0071'     //'#f9c2ff'
    },
    upperView: {
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 12,
        padding: 16,
    },
    lowerView: {
        backgroundColor: '#22A39F',
        flex: 1,
        marginTop: 20,
        borderRadius: 8,
        padding: 12,
        marginBottom: 10
    },
    Item: {
        flex: 1,
        //alignItems: 'center',
        width: 300,
        backgroundColor: '#404258',
        padding: 15, 
        marginVertical: 2,
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: '#6ECCAF',
        borderRadius: 6,
       flexDirection: 'row'
    }

})
