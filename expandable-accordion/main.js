function idtGenerate(questions) {
    let accordionId = document.getElementById("idt-interactive-learning")
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < questions.length; i++) {
        accordionId.innerHTML += `
        <button class="accordion">${questions[i].question}</button>
        <div class="panel">
            <p>${questions[i].answer}</p>
        </div>`
    }

    for (let j = 0; j < acc.length; j++) {
        acc[j].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
};