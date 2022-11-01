import AnswerScreen from "../../../../components/AnswerScreen";

const Answer7A = () => {
    return (
        <AnswerScreen
            instructionText="What inequality will represent the situation? Use the letter “d” as your variable"
            expectedAnswer="21d + (250 * 0.10) <= 115"
            text1="Great!"
            text2 = "Lets move to next step"
            prevScreen="Answer 7A"
            nextScreen = "Answer 7B"
       />
    )
}

export default Answer7A;