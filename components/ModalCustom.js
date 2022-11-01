import { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ModalHandler = (props) => {

    const { toNavigateScreen1, toNavigateScreen2, text1, text2} = props;

    const navigation = useNavigation();

    const { modalVisible, modalNotVisible } = props
    
    return (
        <View>
           <Modal
            animationType={'fade'}
            transparent={true}
            visible={modalVisible}
            >
            <View style={styles.modalContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/party-icon.png')}
                    />
                </View>
                    <Text style={styles.text}>{text1}</Text> 
                    <Text style={{ fontSize: 16 }}>{text2}</Text> 

                <View style={{flexDirection: 'row'}}>
                    {/*first button in the row*/}
                    <View style={styles.button}>
                    <TouchableOpacity
                    style={styles.modalBtn}
                        onPress={() => {
                            console.log("Cancel Button Pressed")
                            navigation.navigate(toNavigateScreen1)
                            //navigation.navigate("Game Screen")
                            modalNotVisible(false)
                    } } 
                >
                <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>  
                    </View>


                     {/*2nd button in the row*/}
                    <View style={styles.button}>
                    <TouchableOpacity
                    style={styles.modalBtn}
                        onPress={() => {
                            console.log("Next Button Pressed")
                            navigation.navigate(toNavigateScreen2)
                            modalNotVisible(false)
                    } } 
                >
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>  
                    </View>
                </View>
            </View>
            </Modal>
        </View>
        
    )
}

export default ModalHandler;

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        marginHorizontal: 16,
        marginTop: 175,
        borderRadius: 8
    },
    imageContainer: {
        marginTop: 1,
        marginBottom: 40,
        width: "100%",
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: "#FFD384"
    },
    image: {
        margin: 20,
        height: 100,
        width: 100,
        borderRadius: 6
    },
    text: {
        fontSize: 24,
    },
    button: {
        marginHorizontal: 15
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18
    },
    modalBtn: {
        marginTop: 50,
        padding: 8,
        backgroundColor: '#246EE9',
        borderRadius: 5,
        marginBottom: 10
    }
})
