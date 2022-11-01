import AnswerScreen from "../../../../components/AnswerScreen";

const Answer52B = () => {
    return (
        <AnswerScreen
            instructionText="How many times can you add 8¼ inches to 34.5 inches to get 84 inches?"
            expectedAnswer="6"
            text1="Nice! Mario can cut 6 sections of rope. Let’s try a different method!"
           // text2 = "Would you like to move to the next question?"
            prevScreen="Answer 52B"
            nextScreen = "Question5"
       />
    )
}

export default Answer52B;