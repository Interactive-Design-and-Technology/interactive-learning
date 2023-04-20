window.addEventListener("DOMContentLoaded", (event) => {

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
});