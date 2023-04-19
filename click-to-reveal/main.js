const questions = [
    {
        'question': 'Have you heard about the chocolate record player? ',
        'answer': 'It sounds pretty sweet.'
    },
    {
        'question': 'What do you call a factory that makes okay products?',
        'answer': 'A satisfactory.'
    },
    {
        'question': 'What did one wall say to the other?',
        'answer': "I'll meet you at the corner."
    }
]

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    let btnContainer = document.getElementById("idt-btn-container")
    for (let i = 0; i < questions.length; i++) {
        btnContainer.innerHTML += `<button>${questions[i].question}</button>`
    }

    const buttons = btnContainer.getElementsByTagName('button');
    console.log(buttons);

    // Loop through all buttons
    // Remove "idt-active-btn" from all other buttons
    // Add "idt-active-btn" to the current/clicked button
    for (let x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener("click", (event) => {
            console.log(`button clicked ${x}`);
            deactivateAllButtons(buttons);
            activateButton(buttons[x]);
            textChange(questions[x].answer);
        });
    }
});

// Add "idt-active-btn" to the current/clicked button
function activateButton(button) {
    button.classList.add("idt-active-btn");
}

// Remove "idt-active-btn" from all other buttons
function deactivateAllButtons(buttons) {
    for (let x = 0; x < buttons.length; x++) {
        buttons[x].classList.remove("idt-active-btn");
    }
}

// Change the text in the container
function textChange(text) {
    document.getElementById('idt-ans-container').innerHTML = `<p> ${text} </p>`
}