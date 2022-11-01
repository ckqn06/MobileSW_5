import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native"
import ModalCustom from "../components/ModalCustom";

const ResultScreen = ({ navigation }) => {
    
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <View style={styles.container}>
            <Text>Check My Results</Text>
            <Button
                title="On press"
                onPress={() => {
                    console.log(isVisible);
                    <ModalCustom open={isVisible} onClose={()=>setIsVisible(false)}/>
                }}
            />
    </View>
    )
}

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})