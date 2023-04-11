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
    },
]

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("idt-submit").addEventListener("click", clickButton);

    const question_list = document.getElementById('idt-questions');
    // generate list of questions
    for (let i = 0; i < idtQuestions.length; i++) {
        question_list.innerHTML += `<li><textarea placeholder="Type your answer here."></textarea>${idtQuestions[i].question}</li>`;
    }

    const options_list = document.getElementById('idt-options');
    // generate list of options
    for (let i = 0; i < idtQuestions.length; i++) {
        options_list.innerHTML += `<button>${idtQuestions[i].answer}</button>`;
    }
});

function clickButton() {
    // loop through all of the questions and buttons
    // if the question matches the button, then add the class "correct"
    // if the question does not match the button, then add the class "incorrect"
    const question_list = document.getElementById('idt-questions');
    const options_list = document.getElementById('idt-options');

    // if questions_list and options_list don't have the same number of children
    // then we have a problem and should throw an error
    if (question_list.children.length != options_list.children.length) {
        throw new Error("The number of questions and options do not match.");
    }

    // loop through all of the questions and options
    for (let i = 0; i < idtQuestions.length; i++) {
        console.log('hello?');
        // user_answer is the text that the user typed in - <li><textarea>.value
        const user_answer = question_list.children[i].children[0].value;

        // options is the button with corresponding answer - <button>
        const option = options_list.children[i];

        // if the user_answer matches the answer, then add the class "correct"
        if (idtQuestions[i].answer.toLowerCase().trim() === user_answer.toLowerCase().trim()) {
            option.classList.remove("incorrect");
            option.classList.add("correct");
        } else { // otherwise, add the class "incorrect"
            option.classList.remove("correct");
            option.classList.add("incorrect");
        }
    }
}
