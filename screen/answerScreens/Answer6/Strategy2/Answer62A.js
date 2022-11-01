//TODO
// Think about how reusing the answer screen code here

import AnswerScreen from "../../../../components/AnswerScreen";

const Answer62A = () => {
    return (
        <AnswerScreen
            instructionText="Ok, you want to guess and check. How long do you think the width is?"
            expectedAnswer=""
            text1="Great!"
            text2 = "Lets move to next step"
            prevScreen="Answer 6A"
            nextScreen = "Answer 6B"
       />
    )
}

export default Answer62A;