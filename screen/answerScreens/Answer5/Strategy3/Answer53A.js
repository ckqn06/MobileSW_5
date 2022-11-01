import AnswerScreen from "../../../../components/AnswerScreen";

const Answer53A = () => {
    return (
        <AnswerScreen
            instructionText="Ok, you want to subtract from the total. Start by subtracting 34.5 inches. How much rope does Mario have left?"
            expectedAnswer="49.5"
            text1="Great!"
            text2 = "Lets move to next step"
            prevScreen="Answer 53A"
            nextScreen = "Answer 53B"
       />
    )
}

export default Answer53A;