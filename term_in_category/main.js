
  window.addEventListener("DOMContentLoaded", (event) => {

      var draggables = document.getElementsByClassName("draggable");

      for (var i = 0; i < draggables.length; i++) {
        draggables[i].addEventListener("dragstart", function (event) {
          event.dataTransfer.setData("text", event.target.id);
        });
      }


      var droppables = document.getElementsByClassName("droppable");

      for (var i = 0; i < droppables.length; i++) {
        droppables[i].addEventListener("dragover", function (event) {
          event.preventDefault();
          event.target.classList.add("drag-over");
        });

        droppables[i].addEventListener("dragleave", function (event) {
          event.target.classList.remove("drag-over");
        });

        droppables[i].addEventListener("drop", function (event) {
          var id = event.dataTransfer.getData("text");
          var draggableElement = document.getElementById(id);
          event.target.appendChild(draggableElement);
          event.target.classList.remove("drag-over");
          event.target.classList.add("dropped");
          setTimeout(function () {
            event.target.classList.remove("dropped");
          }, 1000);
        });
      }



});