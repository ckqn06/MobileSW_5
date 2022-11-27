import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator} from "react-native";
import { db } from "../auth/firebaseConfig";
import { collection, doc, getDocs, onSnapshot, orderBy, query, waitForPendingWrites } from "firebase/firestore";
import { useState, useEffect } from "react";


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const ResultScreen = () => {

    const [studentRecord, setStudentRecord] = useState([]);

    const [scoreAverage, setScoreAverage] = useState(0)

    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {

        const q = query(collection(db, "student"), orderBy("score", "desc") ,) // q for collection reference

       const querySnapshot = await getDocs(q)

        let user = []

        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            console.log(doc.id, "==>", { ...doc.data(), })
            user.push({
                ...doc.data(),
                id: doc.id
            })
            console.log("user =>", user)

            setStudentRecord(user)
        })

    //    await onSnapshot(q, (snapshot) => {
    //         snapshot.docs.forEach((doc) => {
    //             console.log(doc.data())
    //             user.push({
    //                 ...doc.data(),
    //                 key: doc.id
    //             })
    //             console.log(user)

    //             setStudentRecord(user)
    //         })
    //     })
    }

    useEffect(() => {
        fetchData();
    }, [])



    const scoreSum = async () => {

        var sum = 0;

        console.log(studentRecord)

        for (let i = 0; i < studentRecord.length; i++){

            console.log(studentRecord[i].score)

            sum += studentRecord[i].score
        }

        console.log("sum of score is: ", sum)

         var average = (sum / studentRecord.length).toFixed(2)
        
        console.log("The average score is: ", average)

       setScoreAverage(average)

    }

    useEffect(() => {
        scoreSum()
    }, [])
    
    const onRefresh = React.useCallback(() => {
        setIsLoading(true);
        wait(2000).then(() => {
            scoreSum()
            fetchData()
            console.log("refresh control working")
            setIsLoading(false)
        })
    })


    //const renderItem = ({item}) => <Item name={item.name} email={item.email} />

    return (
        <View style={styles.container}>
            
            <View style={styles.upperView}>
                
            <Text style={{ color: 'grey', fontSize: 28, color: '#2C3333' }} onPress={scoreSum}>Quiz Results</Text>
                
                <View style={{backgroundColor: '#2C3333', marginTop: 25, padding: 16, borderWidth: 1, borderRadius: 4}}>
                <Text style={{fontSize: 22, color: 'white'}}>Score Average: {scoreAverage}</Text>
                </View>
                
            </View>
            
                <View style={styles.lowerView}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1, padding: 12, marginHorizontal: 5, borderRadius: 8
                    }}>
                        <View style={{alignItems: 'flex-start', flex: 1}}>
                        <Text style={{fontSize: 16, color: "#FCFDF2"}}>Name</Text>
                        </View>
                     
                        <View style={{alignItems: 'flex-end', flex: 1}}>
                        <Text style={{fontSize: 16, color: "#FCFDF2"}}>Score</Text>
                        </View>
                    </View>
                    <FlatList
                        data={studentRecord}
                        renderItem={({ item, index }) => (
                            item ? <View style={styles.Item}>
                                <View style={{ flex: 1, alignItems: "flex-start", flexDirection: 'row' }}>
                                    <Text style={{fontSize: 18, color: "#FFDE00"}}>{index+1}</Text>
                                    <Text style={{ fontSize: 18, marginLeft: 18, color: 'white'}}>{item.Name}</Text>
                                </View>
                               
                                <View style={{
                                    flex: 1, alignItems: "flex-end",}}>
                                <Text style={{fontSize: 20, color: 'white'}}>{item.score}</Text>
                                </View>
                            </View> : <View> <Text> No Data...</Text></View>
                        )}
                       // keyExtractor={(item) => item.id}
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
        backgroundColor: '#f9c2ff'
    },
    upperView: {
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 12,
        marginBottom: 10,
        padding: 16,
    },
    lowerView: {
        backgroundColor: '#22A39F',
        flex: 1,
        marginTop: 20,
        borderRadius: 8,
        padding: 12,
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