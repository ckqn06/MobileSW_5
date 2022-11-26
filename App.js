import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { LogOut } from './Auth/AuthFunctions';
import TeacherScreen from './TeacherApp/renderScreen';
import IntroScreen from './TeacherApp/startScreen';

import Start from './Screen/registration/Start'
import LoginScreen from './Screen/registration/login';
import Register from './Screen/Register'
import QuizList from './Screen/QuizList'
import Welcome from './Screen/Welcome'
import Main from './Screen/Main'

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
import StartScreen from './TeacherApp/startScreen';


const Stack = createStackNavigator();

export default function App() {
  const [Score1,setScore1] =useState(0);
  const [Score2,setScore2] =useState(0);
  const [Score3,setScore3] =useState(0);
  const [Score4,setScore4] =useState(0);
  const [Score5,setScore5] =useState(0);
  const [Score6,setScore6] =useState(0);
  const [Score7,setScore7] =useState(0);
  const [Score8,setScore8] =useState(0);
  var total = Score1+Score2+Score3+Score4+Score5+Score6
            +Score7+Score8;

  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='intro'>
          <Stack.Screen name = "Start" component={Start}/>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name= "LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="Main" component={Main}
            options={{
              headerRight: () => (
                <Button
                  title='Log Out'
                  onPress={LogOut}
                />
              )
            }}
          />
          <Stack.Screen name="QuizList" component={QuizList} />
          <Stack.Screen name='Register' component={Register}/>

          <Stack.Screen name = "Quiz1" component={Quiz1}/>
          <Stack.Screen name = "Quiz2" component={Quiz2}/>
          <Stack.Screen name = "Quiz3" component={Quiz3}/>
          <Stack.Screen name = "Quiz4" component={Quiz4}/>
          <Stack.Screen name = "Quiz5" component={Quiz5}/>
          <Stack.Screen name = "Quiz6" component={Quiz6}/>
          <Stack.Screen name = "Quiz7" component={Quiz7}/>
          <Stack.Screen name = "Quiz8" component={Quiz8}/>

          <Stack.Screen name = "Strate1_1" component={Strate1_1}/>
          <Stack.Screen name = "Strate1_2" component={Strate1_2}/>
          <Stack.Screen name = "Strate1_3" component={Strate1_3}/>
        
          <Stack.Screen name = "Strate2_1" component={Strate2_1}/>
          <Stack.Screen name = "Strate2_2" component={Strate2_2}/>
          <Stack.Screen name = "Strate2_3" component={Strate2_3}/>

          <Stack.Screen name = "Strate3_1" component={Strate3_1}/>
          <Stack.Screen name = "Strate3_2" component={Strate3_2}/>
          <Stack.Screen name = "Strate3_3" component={Strate3_3}/>

          <Stack.Screen name = "Strate4_1" component={Strate4_1}/> 
          <Stack.Screen name = "Strate4_2" component={Strate4_2}/>
          <Stack.Screen name = "Strate4_3" component={Strate4_3}/> 

          <Stack.Screen name = "Strate5_1" component={Strate5_1}/>
          <Stack.Screen name = "Strate5_2" component={Strate5_2}/>
          <Stack.Screen name = "Strate5_3" component={Strate5_3}/>

          <Stack.Screen name = "Strate6_1" component={Strate6_1}/>
          <Stack.Screen name = "Strate6_2" component={Strate6_2}/>
          <Stack.Screen name = "Strate6_3" component={Strate6_3}/>

          <Stack.Screen name = "Strate7_1" component={Strate7_1}/>
          <Stack.Screen name = "Strate7_2" component={Strate7_2}/>
          <Stack.Screen name = "Strate7_3" component={Strate7_3}/>

        <Stack.Screen name = "Strate8_1" component={Strate8_1}/>
        <Stack.Screen name = "Strate8_2" component={Strate8_2}/>
        <Stack.Screen name="Strate8_3" component={Strate8_3} />
          
          <Stack.Screen name="teacher" component={TeacherScreen} />

          <Stack.Screen name='intro' component={IntroScreen} />

      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}