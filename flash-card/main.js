
function idtGenerate(idtQuestions) {

    const main_container = document.getElementById("idt-interactive-learning");
    // main_container.innerHTML = `
    //   <div class="card" id="card-idt">
    //   </div>
    //   <div class="card" id="card-idt-two">
    //   </div>
    //   <div class="card" id="card-idt-three">
    //   </div>
    //   <div class="card" id="card-idt-four">
    //   </div>`;

  for (i = 0; i < idtQuestions.length; i++) {
    main_container.innerHTML += `
      <div class="card" id="card-idt-${i}">
        <div class="front">
          <p>${idtQuestions[i].question}</p>
        </div>
        <div class="back">
          <p>${idtQuestions[i].answer}</p>
        </div>
      </div>`;
  }

  const card = document.getElementById("card-idt-0")
  card.addEventListener("click", flipcard);
  function flipcard() {
    card.classList.toggle("flipCard");
  }
  const card_two = document.getElementById("card-idt-1")
  card_two.addEventListener("click", flipcard_two);
  function flipcard_two() {
    card_two.classList.toggle("flipCard-two");
  }
  const card_three = document.getElementById("card-idt-2")
  card_three.addEventListener("click", flipcard_three);
  function flipcard_three() {
    card_three.classList.toggle("flipCard-three");
  }
  const card_four = document.getElementById("card-idt-3")
  card_four.addEventListener("click", flipcard_four);
  function flipcard_four() {
    card_four.classList.toggle("flipCard-four");
  }
};

