

function idtGenerate(questions) {
    let accordionId = document.getElementById("idt-interactive-learning")
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < questions.length; i++) {
        accordionId.innerHTML += `
        <button class="accordion">${questions[i].question}</button>
        <div class="panel">
            <p>${questions[i].answer}</p>
        </div>`
    }


    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
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