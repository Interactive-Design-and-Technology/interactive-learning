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

    let accordionId = document.getElementById("idt-accordion")

    for(i = 0; i < questions.length; i++){
        accordionId.innerHTML += `
        <button class="accordion">${questions[i].question}</button>
        <div class="panel">
            <p>${questions[i].answer}</p>
        </div>`
    }

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

});