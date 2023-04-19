window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  let idtAddBtn = document.getElementById('add-question');
  let idtMain = document.getElementById('question-answer');

  idtAddBtn.addEventListener("click", (event) => {

    let newQuestion = document.createElement("div");

    newQuestion.innerHTML += `
    <br><label>Question:
      <input type="text" name="question">
    </label><br>
    <label>Answer:
      <input type="text" name="answer">
    </label><br>`

    idtMain.appendChild(newQuestion);

    console.log(idtMain.getElementsByTagName("input"))
  });

  let idtGenBtn = document.getElementById('generate');
  let genCode = document.getElementById("code");

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
      codeInfo += `  {'question' : '${questionArray[i].question}','answer': '${questionArray[i].answer}'},\n`
    }


    const dropdown = document.getElementById("idt-type");
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    console.log(selectedOption);

    fetch(`./${selectedOption}/main.js`)
      .then(response => response.text())
      .then(data => {
        const clean_data = data.replace(/[<>]/g, char => char === '<' ? '&lt;' : '&gt;');
        const dom_code = `window.addEventListener("DOMContentLoaded", (event) => {idtGenerate(questions);});`
        genCode.innerHTML = `&lt;script&gt;\nconst questions = [\n${codeInfo}];\n${clean_data}\n${dom_code}\n&lt;/script&gt;`
        genCode.innerHTML += `\n&lt;div id='idt-interactive-learning'&gt;&lt;/div&gt;`;
        Prism.highlightAll();
      })
      .catch(error => console.error(error));
  });
});

function copyToClipboard() {
  const code = document.getElementById('code').innerText;
  navigator.clipboard.writeText(code)
    .then(() => {
      console.log('Code copied to clipboard successfully!');
    })
    .catch(err => {
      console.error('Failed to copy code: ', err);
    });
}
