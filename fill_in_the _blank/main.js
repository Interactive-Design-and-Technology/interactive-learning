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
    const fitb=document.getElementById("idt-fill-in-the-blank");
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
}


