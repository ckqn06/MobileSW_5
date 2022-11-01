import AnswerScreen from "../../../../components/AnswerScreen";

const Answer53B = () => {
    return (
        <AnswerScreen
            instructionText="Nice work! Now, how many times can Mario cut 8¼-inch sections from the rope before he has no rope left?"
            expectedAnswer="6"
            text1="Nice! Mario can cut 6 sections of rope. Let’s try a different method!"
            //text2 = "Lets move to next step"
            prevScreen="Answer 53B"
            nextScreen = "Question6"
       />
    )
}

export default Answer53B;