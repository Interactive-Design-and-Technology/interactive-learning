window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  let idtAddBtn = document.getElementById('idt-add-btn')
  let idtMain = document.getElementById('idt-main')
  idtAddBtn.addEventListener("click", (event) => {

    idtMain.innerHTML += `<br><div><label for="question">Q:</label>
    <input type="text" id="idt-question" name="question">
    <br>
    <label for="answer">A:</label>
    <input type="text" id="idt-answer" name="answer"></div><br>`

    
  })
});