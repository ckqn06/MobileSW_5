import { StyleSheet, Button, Text, View } from 'react=native';

const Login = (props) => {
    return (
    <View style = {{
        flex:1,
        alignItems:'center',
        justifyContent:'center'}}>
        <Text>Login Screen</Text>
    <Button
        title='To Main Screen'
        onPress={()=>{
            props.navigation.navigate("Main")
        }}
    />
    </View> );
}

export default Login;