window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  let idtAddBtn = document.getElementById('idt-add-btn');

  let idtMain = document.getElementById('idt-qas');

  idtAddBtn.addEventListener("click", (event) => {
    idtMain.innerHTML += `
    <br>
      <label>Q:
        <input type="text" name="question">
      </label>
    <br>
      <label>A:
        <input type="text" name="answer">
      </label>
    <br>`

    console.log(idtMain.getElementsByTagName("input"))
  });

  let idtGenBtn = document.getElementById('idt-generate');
  let genCode = document.getElementById("idt-generated-code");

  idtGenBtn.addEventListener("click", (event) => {
    // this helps grab all the information from the inputs before we add it to the code snipit 
    let qaInput = idtMain.getElementsByTagName("input")

    //  loop through all the inputs to get the value and store them somewhere 
    let questionArray = []

    for (i = 0; i < qaInput.length; i = i + 2) {
      let question = qaInput[i].value
      let answer = qaInput[i + 1].value

      questionArray.push({
        "question": question,
        "answer": answer,
      },)

    }

    let codeInfo = ``

    console.log(questionArray)

    for (i = 0; i < questionArray.length; i++) {
      codeInfo += `
     <p>{
      'question' : '${questionArray[i].question}',
     'answer': '${questionArray[i].answer}'
    },</p>
    `
    }
    genCode.innerHTML = `[${codeInfo}]`
  });

});
