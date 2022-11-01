import AnswerScreen from "../../../../components/AnswerScreen";

const Answer7B = () => {
    return (
        <AnswerScreen
            instructionText="Nice job! That inequality looks good. Now can you solve for “d” and enter your answer as an inequality?"
            expectedAnswer="2/7"
            text1="Nice Job!"
            text2 = "Lets move to next step"
            prevScreen="Answer 7B"
            nextScreen = "Answer 7C"
       />
    )
}

export default Answer7B;