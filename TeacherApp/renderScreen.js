import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator} from "react-native";
import { db } from "../Auth/firebaseConfig";
import { collection, doc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import Loading from "./loading";

// const Item = (props) => {
//     return (
//         <View style={styles.Item}>
//             <View style={{marginRight: 120}}>
//                 <Text style={{ fontSize: 25 }}>{props.name}</Text>
//                 <Text style={{fontSize: 15}}>{props.email}</Text>
//             </View>
//             <Text style={{fontSize: 20, marginTop: 10}}>20 points</Text>
//         </View>
//   )
// }


const TeacherScreen = () => {

    const [studentRecord, setStudentRecord] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const q = query(collection(db, "student"), orderBy("score", "desc") ,)

            const querySnapshot = await getDocs(q)

            let user = []

            querySnapshot.forEach((doc) => {
               // console.log(doc.data())
               // console.log(doc.id, "==>", { ...doc.data(), })
                user.push({
                    ...doc.data(),
                    id: doc.id
                })
                //console.log("user =>", user)

                setStudentRecord(user)
            })

        }


        fetchData();
    }, [])

    const scoreSum = () => {

        var sum = 0;

        console.log(studentRecord)

        for (let i = 0; i < studentRecord.length; i++){

            console.log(studentRecord[i].score)

            sum += studentRecord[i].score


        }

        console.log("sum of score is: ", sum)

        var average = sum / studentRecord.length
        
        console.log("The average score is: ", average)

    }

    //const renderItem = ({item}) => <Item name={item.name} email={item.email} />

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Image
                    style={{ height: 45, width: 45 }}
                    source={require('../assets/images/trophy.png')}
                />
                <Text style={{ color: 'grey', fontSize: 20, marginTop: 15 }} onPress={scoreSum}>LeaderBoard</Text>
                <View style={styles.lowerView}>
                    
                    <View style={{
                        flexDirection: 'row',
                        flex: 1, marginBottom: 15, padding: 12, marginHorizontal: 8, borderRadius: 8
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
                        keyExtractor={(item) => item.id}
                   />
                </View>
            </View>
        </View>
    )
}

export default TeacherScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
        alignItems: 'center',
        backgroundColor: '#f9c2ff'
    },
    upperView: {
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 12,
        padding: 16

    },
    lowerView: {
        backgroundColor: '#22A39F',
        flex: 1,
        marginTop: 30,
        borderRadius: 8,
        padding: 12,
    },
    Item: {
        flex: 1,
        //alignItems: 'center',
        width: 450,
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