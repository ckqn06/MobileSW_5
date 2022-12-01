import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert, LogBox} from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import ResultScreen from './components/Results';
import StudentResult from './components/StudentResult';


const Stack = createNativeStackNavigator();

export default function App() {

  LogBox.ignoreAllLogs();

  //앱 종료 기능
  //함수 호출 할 떄 앱 종료
  useEffect(() => {
    const backAction = () =>{
      Alert.alert("Hold on!", "Are you sure you want to exit?",
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel'
        },
        { text: "YES", onPress: () => BackHandler.exitApp()}
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove()
  }, [])


  return (
    <>
    <StatusBar backgroundColor='#fff'/>
     <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center',
                     headerStyle :{backgroundColor :  '#540375'},
                     headerTintColor: '#fff',
                     headerTitleStyle: {fontWeight: 'bold'}}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='ResultScreen' component={ResultScreen}/>
      <Stack.Screen name='Student' component={StudentResult}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});