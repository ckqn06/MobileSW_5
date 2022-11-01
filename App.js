import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screen/WelcomeScreen';
import GameScreen from './screen/questionScreen/Question1';
import Question2Screen from './screen/questionScreen/Question2';
import Question3Screen from './screen/questionScreen/Question3';
import Question4Screen from './screen/questionScreen/Question4';
import Question5Screen from './screen/questionScreen/Question5';
import Question6Screen from './screen/questionScreen/Question6';
import Question7Screen from './screen/questionScreen/Question7';
import Question8Screen from './screen/questionScreen/Question8';
import ResultScreen from './screen/ResultScreen';
import ScreenAnswerA from './screen/answerScreens/Answer1/Strategy1/ScreenAnswerA'
import ScreenAnswerA2 from './screen/answerScreens/Answer1/Strategy1/AnswerScreenA2';
import AnswerScreenB from './screen/answerScreens/Answer1/Strategy2/AnswerScreenB';
import AnswerScreenC from './screen/answerScreens/Answer1/Strategy3/AnswerScreenC';
import ScreenAnswer2 from './screen/answerScreens/Answer2/Strategy1/Answer2';
import ScreenAnswer2B from './screen/answerScreens/Answer2/Strategy1/Answer2B';
import ScreenAnswer2C from './screen/answerScreens/Answer2/Strategy2/Answer2C';
import ScreenAnswer2D from './screen/answerScreens/Answer2/Strategy3/Answer2D';
import Answer3A from './screen/answerScreens/Answer3/Strategy1/Answer3A';
import Answer3B from './screen/answerScreens/Answer3/Strategy1/Answer3B';
import Answer32A from './screen/answerScreens/Answer3/Strategy2/Answer32A';
import Answer32B from './screen/answerScreens/Answer3/Strategy2/Answer32B';
import Answer5A from './screen/answerScreens/Answer5/Strategy1/Answer5A';
import Answer5B from './screen/answerScreens/Answer5/Strategy1/Answer5B';
import Answer52A from './screen/answerScreens/Answer5/Strategy2/Answer52A';
import Answer52B from './screen/answerScreens/Answer5/Strategy2/Answer52B';
import Answer53A from './screen/answerScreens/Answer5/Strategy3/Answer53A';
import Answer53B from './screen/answerScreens/Answer5/Strategy3/Answer53B';
import Answer6A from './screen/answerScreens/Answer6/Strategy1/Answer6A';
import Answer6B from './screen/answerScreens/Answer6/Strategy1/Answer6B';
import Answer7A from './screen/answerScreens/Answer7/Strategy1/Answer7A';
import Answer7B from './screen/answerScreens/Answer7/Strategy1/Answer7B';
import Answer7C from './screen/answerScreens/Answer7/Strategy1/Answer7C';
import Answer73A from './screen/answerScreens/Answer7/Strategy3/Answer73A';
import Answer73B from './screen/answerScreens/Answer7/Strategy3/Answer73B';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* //533483 */}
      <Stack.Navigator
        initialRouteName='Home'
      >
      <Stack.Screen name='Home' component={WelcomeScreen}  options={{
      title: 'Welcome', headerStyle:
        { backgroundColor: "#4A2F72" },
        headerTintColor: '#ffffff'
    }}/>
      <Stack.Screen name='Welcome Screen' component={WelcomeScreen} />
      <Stack.Screen name='Game Screen' component={GameScreen} options={{
        title: "Todd's Order", headerStyle:
          { backgroundColor: "#25375E" },
          headerTintColor: '#ffffff'
      }} />
      <Stack.Screen name='Question2' component={Question2Screen} options={{
        title: "Jen's Goal", headerStyle:
          { backgroundColor: "#182747" },
          headerTintColor: '#ffffff'
      }}/>
      <Stack.Screen name='Question3' component={Question3Screen} options={{
        title: 'Question 3', headerStyle:
          { backgroundColor: "#182747" },
          headerTintColor: '#ffffff'
      }}/>
      <Stack.Screen name='Question4' component={Question4Screen} 
        options={{
        title: 'Question 4', headerStyle:
          { backgroundColor: "#182747" },
          headerTintColor: '#ffffff'
      }}
      />{/* this screen is  question 2 strategy 1 answer A screen*/}
      <Stack.Screen name='Question5' component={Question5Screen} options={{
        title: 'Question 5', headerStyle:
          { backgroundColor: "#182747" },
          headerTintColor: '#ffffff'
      }}/>
      <Stack.Screen name='Question6' component={Question6Screen} options={{
        title: 'Question 6', headerStyle:
          { backgroundColor: "#182747" },
          headerTintColor: '#ffffff'
      }}/>
      <Stack.Screen name='Question7' component={Question7Screen} options={{
        title: 'Question 7', headerStyle:
          { backgroundColor: "#182747" },
          headerTintColor: '#ffffff'
      }}/>
      <Stack.Screen name='Question8' component={Question8Screen} options={{
        title: 'Question 8', headerStyle:
          { backgroundColor: "#182747" },
          headerTintColor: '#ffffff'
      }}/>
      <Stack.Screen name='ResultScreen' component={ResultScreen} /> 
      <Stack.Screen name='Answer A' component={ScreenAnswerA} /> 
      <Stack.Screen name='Answer A-2' component={ScreenAnswerA2} /> 
      <Stack.Screen name='Answer B' component={AnswerScreenB} />
      <Stack.Screen name='Answer C' component={AnswerScreenC} /> 
      <Stack.Screen name='Answer2' component={ScreenAnswer2} />
      <Stack.Screen name='Answer2B' component={ScreenAnswer2B} />
      <Stack.Screen name='Answer2C' component={ScreenAnswer2C} /> 
      <Stack.Screen name='Answer2D' component={ScreenAnswer2D} />
      <Stack.Screen name='Answer 3A' component={Answer3A} /> 
      <Stack.Screen name='Answer 3B' component={Answer3B} />
      <Stack.Screen name='Answer 32A' component={Answer32A} /> 
      <Stack.Screen name='Answer 32B' component={Answer32B} />
      <Stack.Screen name='Answer 5A' component={Answer5A} />
      <Stack.Screen name='Answer 5B' component={Answer5B} />
      <Stack.Screen name='Answer 52A' component={Answer52A} />
      <Stack.Screen name='Answer 52B' component={Answer52B} />
      <Stack.Screen name='Answer 53A' component={Answer53A} />
      <Stack.Screen name='Answer 53B' component={Answer53B} />
      <Stack.Screen name='Answer 6A' component={Answer6A} />
      <Stack.Screen name='Answer 6B' component={Answer6B} />
      <Stack.Screen name='Answer 7A' component={Answer7A} />
      <Stack.Screen name='Answer 7B' component={Answer7B} />
      <Stack.Screen name='Answer 7C' component={Answer7C} />
      <Stack.Screen name='Answer 73A' component={Answer73A} />
      <Stack.Screen name='Answer 73B' component={Answer73B} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

{/* this screen is the result answer Screen*/}
{/* this screen is  question 1 strategy 1 answer A screen*/}
{/* this screen is  question 1 strategy 1 answer B screen*/}
{/* this screen is  question 1 strategy 2 answer screen*/ }
{/* this screen is  question 1 strategy 3 answer screen*/}
 {/* this screen is  question 2 strategy 1 answer A screen*/}
 {/* this screen is  question 2 strategy 1 answer B screen*/}
{/* this screen is  question 2 strategy 2 answer screen*/}
 {/* this screen is  question 2 strategy 3 answer screen*/}
{/* this screen is  question 3 strategy 1 answer A screen*/}
{/* this screen is  question 3 strategy 1 answer B screen*/ }
 {/* this screen is  question 3 strategy 2 answe screen*/}
 {/* this screen is  question 3 strategy 3 answer screen*/}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#15133C',
//     marginHorizontal: 8,
//     marginTop: 36,
//     borderRadius: 7,
//   },
// });

