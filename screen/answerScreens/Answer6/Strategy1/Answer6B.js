import AnswerScreen from "../../../../components/AnswerScreen";

const Answer6B = () => {
    return (
        <AnswerScreen
            instructionText="Nice job! That equation looks good. Now can you solve for “x”?"
            expectedAnswer="20"
            text1="Nice! The width of the rectangle 20. Let’s try a different method!"
            //text2 = "Lets move to next step"
            prevScreen="Answer 6B"
            nextScreen = "Question6"
       />
    )
}

export default Answer6B;