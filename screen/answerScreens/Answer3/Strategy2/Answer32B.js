import AnswerScreen from "../../../../components/AnswerScreen";


const Answer32B = () => {
    return (
        <AnswerScreen
        instructionText="Nice job! That equation looks good. Now can you solve for “m”?"
        expectedAnswer="10.8"
        text1="Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!"
        //text2 = "Let's move to the next step"
        prevScreen="Answer 32B"
        nextScreen = "Question4"
   />
    )
}

export default Answer32B;