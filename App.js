import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Screen/Start'
import Register from './Screen/Register'
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

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Start" component={Start}/>
        <Stack.Screen name = "Register" component={Register}/>
        <Stack.Screen name = "QuizList" component={QuizList}/>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}