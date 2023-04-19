function idtGenerate(questions) {

    const main_container = document.getElementById("idt-interactive-learning");
    main_container.innerHTML = `
        <div>
            <div id="idt-btn-container"></div>
            <div id="idt-ans-container">
                <p>Click the buttons on the left to show the answers for the questions</p>
            </div>
        </div>`;

    let btnContainer = document.getElementById("idt-btn-container")
    for (let i = 0; i < questions.length; i++) {
        btnContainer.innerHTML += `<button>${questions[i].question}</button>`
    }

    const buttons = btnContainer.getElementsByTagName('button');

    // Loop through all buttons
    // Remove "idt-active-btn" from all other buttons
    // Add "idt-active-btn" to the current/clicked button
    for (let x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener("click", (event) => {
            console.log(`button clicked ${x}`);
            deactivateAllButtons(buttons);
            activateButton(buttons[x]);
            document.getElementById('idt-ans-container').innerHTML = `<p> ${questions[x].answer} </p>`
        });
    }

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
}
