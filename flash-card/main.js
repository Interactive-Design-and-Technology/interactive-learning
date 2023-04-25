
function idtGenerate(idtQuestions) {

  const main_container = document.getElementById("idt-interactive-learning");

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

  for (j = 0; j < idtQuestions.length; j++) {
    const card = document.getElementById(`card-idt-${j}`);
    card.addEventListener("click", () => {
      card.classList.toggle("flipCard");
    });
  }
};

