
  function init() {
    var draggables = document.querySelectorAll(".draggable");
    var dropzone = document.querySelector(".dropzone");
  
    // add dragstart event listeners to all draggable elements
    for (var i = 0; i < draggables.length; i++) {
      draggables[i].addEventListener("dragstart", dragStart);
    }
  
    // add dragover and drop event listeners to drop zone element
    dropzone.addEventListener("dragover", allowDrop);
    dropzone.addEventListener("drop", drop);
  }
  
  function dragStart(ev) {
    // set data for the drag operation
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function allowDrop(ev) {
    // allow elements to be dropped into this zone
    ev.preventDefault();
  }
  
  function drop(ev) {
    // get the data being dropped and append it to the drop zone
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  