const idtQuestions = [
    {
      'question': "Who discovered X-rays?",
      'answer': "Wilhelm Röntgen",
    }, {
      'question': " is medical term for itch caused by mites?",
      'answer': "scabies",
    },
    {
      'question': " percentage of the human body is water?",
      'answer': "66%",
    },
  ]
window.addEventListener("DOMContentLoaded", (event) => {

    for (i = 0; i < idtQuestions.length; i++) {
        document.getElementById('card-idt').innerHTML += `<div class="front"<p>${idtQuestions[i].question}</p></div>`
        document.getElementById('card-idt').innerHTML += `<div class="back"<p>${idtQuestions[i].answer}</p></div>`
      }
    
const card=document.getElementById("card-idt")
card.addEventListener("click",flipcard);
function flipcard(){
    card.classList.toggle("flipCard");
}
const card_two=document.getElementById("card-idt-two")
card_two.addEventListener("click",flipcard_two);
function flipcard_two(){
    card_two.classList.toggle("flipCard-two");
}
const card_three=document.getElementById("card-idt-three")
card_three.addEventListener("click",flipcard_three);
function flipcard_three(){
    card_three.classList.toggle("flipCard-three");
}
});

