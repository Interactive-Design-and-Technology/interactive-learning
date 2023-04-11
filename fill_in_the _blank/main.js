const idtQuestions = [
    {
        'question': "is the medical term for High Blood Pressure?",
        'answer': "hypertension",
    }, {
        'question': " is medical term for itch caused by mites?",
        'answer': "scabies",
    },
    {
        'question': " percentage of the human body is water?",
        'answer': "66%",
    },
    {
        'question': " is the number of taste buds are on your tongue",
        'answer': "Nine Thousand",
    },
    {
        'question': " is the largest organ of the human body",
        'answer': "Skin",
    },
    {
        'question': "  part of the human body is effected in Astigmatism",
        'answer': "Eyes",
    },
    {
        'question': " fat-soluble substance present in green leafy vegetables was given its name because it is required for coagulation of the blood to take place?",
        'answer': "Vitamin K",
    }
]

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("idt-submit").addEventListener("click", clickButton);
    const fitb = document.getElementById("idt-fill-in-the-blank");
    const ques = fitb.getElementsByTagName('li');
    console.log(ques);
    if (ques.length !== idtQuestions.length) {

        console.error("Arrays are not the same length")
    } else {
        for (i = 0; i < ques.length; i++) {
            ques[i].innerHTML += `${idtQuestions[i].question}`;
        }
    }


});

function clickButton() {
    console.log("Clicked a Button");
    const answer = document.getElementById("idt-q1");
    const rightAnswer = document.getElementById("idt-op1");

    const answer1 = document.getElementById("idt-q2");
    const rightAnswer1 = document.getElementById("idt-op2");

    const answer2 = document.getElementById("idt-q3");
    const rightAnswer2 = document.getElementById("idt-op3");

    const answer3 = document.getElementById("idt-q4");
    const rightAnswer3 = document.getElementById("idt-op4");

    const answer4 = document.getElementById("idt-q5");
    const rightAnswer4 = document.getElementById("idt-op5");

    const answer5 = document.getElementById("idt-q6");
    const rightAnswer5 = document.getElementById("idt-op6");

    const answer6 = document.getElementById("idt-q7");
    const rightAnswer6 = document.getElementById("idt-op7");

    console.log(answer.value);
    if (answer.value.toLowerCase().trim() === "hypertension") {
        rightAnswer.classList.remove("incorrect");
        rightAnswer.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer.classList.remove("correct");
        rightAnswer.classList.add("incorrect");
    }

    if (answer1.value.toLowerCase().trim() === "scabies") {
        rightAnswer1.classList.remove("incorrect");
        rightAnswer1.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer1.classList.remove("correct");
        rightAnswer1.classList.add("incorrect");
    }

    if (answer2.value.toLowerCase().trim() === "66%") {
        rightAnswer2.classList.remove("incorrect");
        rightAnswer2.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer2.classList.remove("correct");
        rightAnswer2.classList.add("incorrect");
    }
    if (answer3.value.toLowerCase().trim() === "nine thousand") {
        rightAnswer3.classList.remove("incorrect");
        rightAnswer3.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer3.classList.remove("correct");
        rightAnswer3.classList.add("incorrect");
    }
    if (answer4.value.toLowerCase().trim() === "skin") {
        rightAnswer4.classList.remove("incorrect");
        rightAnswer4.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer4.classList.remove("correct");
        rightAnswer4.classList.add("incorrect");
    }
    if (answer5.value.toLowerCase().trim() === "eyes") {
        rightAnswer5.classList.remove("incorrect");
        rightAnswer5.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer5.classList.remove("correct");
        rightAnswer5.classList.add("incorrect");
    }
    if (answer6.value.toLowerCase().trim() === "vitamin k") {
        rightAnswer6.classList.remove("incorrect");
        rightAnswer6.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer6.classList.remove("correct");
        rightAnswer6.classList.add("incorrect");
    }

}
