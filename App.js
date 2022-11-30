import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert, LogBox } from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import ResultScreen from './components/Results';
import {createDrawerNavigator} from '@react-navigation/drawer'
import StudentResult from './components/StudentResult';


//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='ResultScreen' component={ResultScreen}/>
        <Drawer.Screen name='Student' component={StudentResult}/>
      </Drawer.Navigator>
    </NavigationContainer>
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
