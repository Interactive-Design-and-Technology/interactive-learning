function idtGenerate(idtQuestions) {
  const main_container = document.getElementById("idt-interactive-learning");

  // add questions as draggable elements
  for (let i = 0; i < idtQuestions.length; i++) {
    main_container.innerHTML += `
      <div id="draggable-${i}" class="draggable" draggable="true">
       ${idtQuestions[i].question}
      </div>
      `;
  }

  // add answers as droppable elements - do not add duplicates
  const answers = [];
  for (let j = 0; j < idtQuestions.length; j++) {
    if (answers.includes(idtQuestions[j].answer)) {
      // do not add
    } else {
      answers.push(idtQuestions[j].answer);
      main_container.innerHTML += `
        <div id="droppable-${j}" class="droppable">
         <span class="answer">${idtQuestions[j].answer}</span>
        </div>
      `;
    }
  }

  let draggables = document.getElementsByClassName("draggable");
  for (let i = 0; i < draggables.length; i++) {
    draggables[i].addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text", event.target.id);
    });
  }

  let droppables = document.getElementsByClassName("droppable");
  for (let i = 0; i < droppables.length; i++) {
    droppables[i].addEventListener("dragover", function (event) {
      event.preventDefault();
      if (event.target.classList.contains("droppable")) {
        event.target.classList.add("drag-over");
      }
    });

    droppables[i].addEventListener("dragleave", function (event) {
      if (event.target.classList.contains("droppable")) {
        event.target.classList.remove("drag-over");
      }
    });

    droppables[i].addEventListener("drop", function (event) {
      let id = event.dataTransfer.getData("text");
      let draggableElement = document.getElementById(id);

      console.log(event.target);

      if (event.target.classList.contains("draggable")) {
        // add to parent
        const answer = event.target.parentElement.querySelector("span.answer").innerHTML;
        const question_id = draggableElement.id.split("-")[1];

        // check if answer is correct
        if (idtQuestions[question_id].answer === answer) {
          event.target.parentElement.appendChild(draggableElement);
        }

      } else if (event.target.classList.contains("droppable")) {
        // add to target
        const answer = event.target.querySelector("span.answer").innerHTML;
        const question_id = draggableElement.id.split("-")[1];

        // check if answer is correct
        if (idtQuestions[question_id].answer === answer) {
          event.target.appendChild(draggableElement);
        }
      }
      event.target.classList.remove("drag-over");
    });
  }
};
