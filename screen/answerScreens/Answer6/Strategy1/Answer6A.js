import AnswerScreen from "../../../../components/AnswerScreen";

const Answer6A = () => {
    return (
        <AnswerScreen
            instructionText="What equation will represent the situation? Use the letter “x” as your variable"
            expectedAnswer="4x + 24 = 104"
            text1="Great!"
            text2 = "Lets move to next step"
            prevScreen="Answer 6A"
            nextScreen = "Answer 6B"
       />
    )
}

export default Answer6A;