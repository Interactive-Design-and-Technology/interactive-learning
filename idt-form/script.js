window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  let idtAddBtn = document.getElementById('idt-add-btn')
  let idtMain = document.getElementById('idt-main')
  idtAddBtn.addEventListener("click", (event) => {
    let i = 0
    idtMain.innerHTML += `<label for="question">Q${i}:</label>
    <input type="text" id="idt-question-${i}" name="question-${i}">
    <label for="answer">A${i}:</label>
    <input type="text" id="idt-answer-${i}" name="answer-${i}">`

    i++
  })
});