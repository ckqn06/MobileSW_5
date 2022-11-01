import AnswerScreen from "../../../../components/AnswerScreen";

const Answer7C = () => {
    return (
        <AnswerScreen
            instructionText="Great! Now based on that inequality, how many days can Jim rent the car for?"
            expectedAnswer="4"
            text1="Fantastic! Jim can rent the car for 4 days! Let's try another strategy."
           //text2 = "Lets move to next step"
            prevScreen="Game Screen"
            nextScreen = "Question7"
       />
    )
}

export default Answer7C;