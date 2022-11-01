import AnswerScreen from "../../../../components/AnswerScreen";


const Answer3B = () => {
    return (
        <AnswerScreen
        instructionText="Yes! So she used 64.8 yards of fabric for six curtains. Now, how much fabric did she use for one curtain?"
        expectedAnswer="10.8"
        text1="Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!"
        //text2 = "Would you like to move to the next question?"
        prevScreen="Answer 3B"
        nextScreen = "Question3"
   />
    )
}

export default Answer3B;