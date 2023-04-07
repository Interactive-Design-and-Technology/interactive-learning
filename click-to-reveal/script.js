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

    // step 1 get all the buttons 
    // step 2 loop through all the buttons and add event listeners 

    const buttons = document.getElementsByTagName('button');
    console.log(buttons);

    let y = 99

    for (let x = 0; x < buttons.length; x++) {
        buttons[x].innerHTML = `${questions[x].question}`;


        buttons[x].addEventListener("click", (event) => {

            
            buttons[x].classList.add("idt-active-btn");


            console.log(`button clicked ${x}`);


            textChange(questions[x].answer);

            if(y < buttons.length + 1){
            buttons[y].classList.remove("idt-active-btn");
    
            };

            y = x
        }
        )
    
    }
});

function textChange(url) {
    document.getElementById('container').innerHTML = `<p> ${url} </p>`
}