import AnswerScreen from "../../../../components/AnswerScreen";

const Answer5B = () => {
    return (
        <AnswerScreen
            instructionText="Nice job! That equation looks good. Now can you solve for “m”?"
            expectedAnswer= "6"
            text1="Nice! Mario can cut 6 sections of rope. Let’s try a different method!"
            //text2 = "Would you like to move to the next question?"
            prevScreen="Answer 5B"
            nextScreen = "Question5"
        />
    )
}

export default Answer5B