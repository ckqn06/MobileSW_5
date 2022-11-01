import AnswerScreen from "../../../../components/AnswerScreen";

const Answer73B = () => {
    return (
        <AnswerScreen
            instructionText="All right, you say he pays $25 for mileage. Then he has to pay $21 for each day that he rents. How many times can you add $21 without going over $115?"
            expectedAnswer="4"
            text1="Fantastic! Jim can rent the car for 4 days!"
            //text2 = "Lets move to next step"
            prevScreen="Answer 73B"
            nextScreen = "Question8"
       />
    )
}

export default Answer73B;