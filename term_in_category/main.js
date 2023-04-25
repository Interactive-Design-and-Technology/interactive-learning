function idtGenerate(idtQuestions) {
  const main_container = document.getElementById("idt-interactive-learning");
  main_container.innerHTML = `
  <div id="idt-questions"></div>
  <div id="draggable1" class="draggable" draggable="true">
    Element 1
  </div>
  <div id="draggable2" class="draggable" draggable="true">
    Element 2
  </div>
  <div id="draggable3" class="draggable" draggable="true">
    Element 3
  </div>

  <div id="droppable1" class="droppable">
    Category 1
  </div>
  <div id="droppable2" class="droppable">
    Category 2
  </div>`;

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

      if (event.target.classList.contains("draggable")) {
        event.target.parentElement.appendChild(draggableElement);

      } else if (event.target.classList.contains("droppable")) {
        event.target.appendChild(draggableElement);

      }
      event.target.classList.remove("drag-over");
    });
  }
};