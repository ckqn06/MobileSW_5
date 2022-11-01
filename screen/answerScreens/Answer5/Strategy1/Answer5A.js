import AnswerScreen from "../../../../components/AnswerScreen";

const Answer5A = () => {
    return (
        <AnswerScreen
            instructionText="What equation will represent the situation? Use the letter “m” as your variable"
            expectedAnswer="8.5m + 34.5 = 84"
            text1="Great!"
            text2 = "Lets move to the next step"
            prevScreen="Answer 5A"
            nextScreen = "Answer 5B"
        />
    )
}

export default Answer5A