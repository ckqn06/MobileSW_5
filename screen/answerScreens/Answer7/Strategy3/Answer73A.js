import AnswerScreen from "../../../../components/AnswerScreen";

const Answer73A = () => {
    return (
        <AnswerScreen
            instructionText="Ok, you want to try adding up. Let’s start by finding the cost of driving 250 miles. How much will that cost?"
            expectedAnswer="25"
            text1="Great!"
            text2 = "Lets move to next step"
            prevScreen="Answer 73A"
            nextScreen = "Answer 73B"
       />
    )
}

export default Answer73A;