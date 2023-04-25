
function idtGenerate(idtQuestions) {

      const main_container = document.getElementById("idt-interactive-learning");
    main_container.innerHTML = `
      <div class="card" id="card-idt">
      </div>
      <div class="card" id="card-idt-two">
      </div>
      <div class="card" id="card-idt-three">
      </div>
      <div class="card" id="card-idt-four">
      </div>`;

  for (i = 0; i < idtQuestions.length; i++) {
    document.getElementById('card-idt').innerHTML += `<div class="front"<p>${idtQuestions[0].question}</p></div><div class="back"<p>${idtQuestions[0].answer}</p></div>`
    document.getElementById('card-idt-two').innerHTML += `<div class="front"<p>${idtQuestions[1].question}</p></div><div class="back"<p>${idtQuestions[1].answer}</p></div>`
    document.getElementById('card-idt-three').innerHTML += `<div class="front"<p>${idtQuestions[2].question}</p></div><div class="back"<p>${idtQuestions[2].answer}</p></div>`
    document.getElementById('card-idt-four').innerHTML += `<div class="front"<p>${idtQuestions[3].question}</p></div><div class="back"<p>${idtQuestions[3].answer}</p></div>`
  }

  const card = document.getElementById("card-idt")
  card.addEventListener("click", flipcard);
  function flipcard() {
    card.classList.toggle("flipCard");
  }
  const card_two = document.getElementById("card-idt-two")
  card_two.addEventListener("click", flipcard_two);
  function flipcard_two() {
    card_two.classList.toggle("flipCard-two");
  }
  const card_three = document.getElementById("card-idt-three")
  card_three.addEventListener("click", flipcard_three);
  function flipcard_three() {
    card_three.classList.toggle("flipCard-three");
  }
  const card_four = document.getElementById("card-idt-four")
  card_four.addEventListener("click", flipcard_four);
  function flipcard_four() {
    card_four.classList.toggle("flipCard-four");
  }
};

