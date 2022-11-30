import { LogBox, BackHandler, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';

import { store } from './Redux/store';
import { Provider } from 'react-redux'
import { LogOut } from './Auth/AuthFunctions';

import Login from './Screen/registration/Login'
import Sign_Up from './Screen/registration/Sign_Up'
import Welcome from './Screen/Welcome'
import Main from './Screen/Main'
import QuizList from './Screen/QuizList'

import Quiz1 from './Screen/Quiz1'
import Quiz2 from './Screen/Quiz2'
import Quiz3 from './Screen/Quiz3'
import Quiz4 from './Screen/Quiz4'
import Quiz5 from './Screen/Quiz5'
import Quiz6 from './Screen/Quiz6'
import Quiz7 from './Screen/Quiz7'
import Quiz8 from './Screen/Quiz8'

import Strate1_1 from './Screen/Strate1_1'
import Strate1_2 from './Screen/Strate1_2'
import Strate1_3 from './Screen/Strate1_3'

import Strate2_1 from './Screen/Strate2_1'
import Strate2_2 from './Screen/Strate2_2'
import Strate2_3 from './Screen/Strate2_3'

import Strate3_1 from './Screen/Strate3_1'
import Strate3_2 from './Screen/Strate3_2'
import Strate3_3 from './Screen/Strate3_3'

import Strate4_1 from './Screen/Strate4_1'
import Strate4_2 from './Screen/Strate4_2'
import Strate4_3 from './Screen/Strate4_3'

import Strate5_1 from './Screen/Strate5_1'
import Strate5_2 from './Screen/Strate5_2'
import Strate5_3 from './Screen/Strate5_3'

import Strate6_1 from './Screen/Strate6_1'
import Strate6_2 from './Screen/Strate6_2'
import Strate6_3 from './Screen/Strate6_3'

import Strate7_1 from './Screen/Strate7_1'
import Strate7_2 from './Screen/Strate7_2'
import Strate7_3 from './Screen/Strate7_3'

import Strate8_1 from './Screen/Strate8_1'
import Strate8_2 from './Screen/Strate8_2'
import Strate8_3 from './Screen/Strate8_3'

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();

  useEffect(() => {
    const backAction = () =>{ Alert.alert("Hold on!", "Are you sure you want to exit?",
      [{ 
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel' },
      { text: "YES",
        onPress: () => {
          LogOut()
          BackHandler.exitApp()
        } }]);
      return true; };

    const backHandler = BackHandler.addEventListener( "hardwareBackPress", backAction );
    
    return () => backHandler.remove() 
  }, [])
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name = "Login" component={Login} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Sign_Up" component={Sign_Up} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Welcome" component={Welcome} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Main" component={Main} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "QuizList" component={QuizList} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>

          <Stack.Screen name = "Quiz1" component={Quiz1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Quiz2" component={Quiz2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Quiz3" component={Quiz3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Quiz4" component={Quiz4} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Quiz5" component={Quiz5} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Quiz6" component={Quiz6} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Quiz7" component={Quiz7} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Quiz8" component={Quiz8} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>

          <Stack.Screen name = "Strate1_1" component={Strate1_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate1_2" component={Strate1_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate1_3" component={Strate1_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
        
          <Stack.Screen name = "Strate2_1" component={Strate2_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate2_2" component={Strate2_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate2_3" component={Strate2_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>

          <Stack.Screen name = "Strate3_1" component={Strate3_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate3_2" component={Strate3_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate3_3" component={Strate3_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>

          <Stack.Screen name = "Strate4_1" component={Strate4_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/> 
          <Stack.Screen name = "Strate4_2" component={Strate4_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate4_3" component={Strate4_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/> 

          <Stack.Screen name = "Strate5_1" component={Strate5_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate5_2" component={Strate5_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate5_3" component={Strate5_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>

          <Stack.Screen name = "Strate6_1" component={Strate6_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate6_2" component={Strate6_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate6_3" component={Strate6_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>

          <Stack.Screen name = "Strate7_1" component={Strate7_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate7_2" component={Strate7_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate7_3" component={Strate7_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>

          <Stack.Screen name = "Strate8_1" component={Strate8_1} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate8_2" component={Strate8_2} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
          <Stack.Screen name = "Strate8_3" component={Strate8_3} options={{headerTitleAlign:'center',headerLeft:()=>null}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}