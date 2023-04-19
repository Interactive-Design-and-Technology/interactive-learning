const idtQuestions = [
  {
    'question': "is the medical term for High Blood Pressure?",
    'answer': "hypertension",
  }, {
    'question': " is medical term for itch caused by mites?",
    'answer': "scabies",
  },
  {
    'question': " percentage of the human body is water?",
    'answer': "66%",
  },
  {
    'question': " is the number of taste buds are on your tongue",
    'answer': "Nine Thousand",
  },
  {
    'question': " is the largest organ of the human body",
    'answer': "Skin",
  },
  {
    'question': "  part of the human body is effected in Astigmatism",
    'answer': "Eyes",
  },
  {
    'question': " fat-soluble substance present in green leafy vegetables was given its name because it is required for coagulation of the blood to take place?",
    'answer': "Vitamin K",
  },
]


/* Events fired on the drag target */
window.addEventListener("DOMContentLoaded", (event) => {

  for (i = 0; i < idtQuestions.length; i++) {
    document.getElementById('answer').innerHTML += `<p draggable="true" class="dragtarget" id="dragtarget">${idtQuestions[i].answer}</p>`
    document.getElementById('idt-q').innerHTML += ` <li class="question">${idtQuestions[i].question}<div class="droptarget" data-answer="${idtQuestions[i].answer}"></div>`
  }

  var dragP;
  /* Events fired on the drag target */

  document.addEventListener("dragstart", function (event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    dragP = event.target;

    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
  });

  // While dragging the p element, change the color of the output text
  document.addEventListener("drag", function (event) {
    document.getElementById("demo").style.color = "red";
  });

  // Output some text when finished dragging the p element and reset the opacity
  document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "1";
  });

  /* Events fired on the drop target */

  // When the draggable p element enters the droptarget, change the DIVS's border style
  document.addEventListener("dragenter", function (event) {
    if (event.target.className == "droptarget") {
      event.target.style.border = "3px dotted red";
    }
  });

  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  document.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  // When the draggable p element leaves the droptarget, reset the DIVS's border style
  document.addEventListener("dragleave", function (event) {
    if (event.target.className == "droptarget") {
      event.target.style.border = "";
    }
  });

  /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
     Reset the color of the output text and DIV's border-color
     Get the dragged data with the dataTransfer.getData() method
     The dragged data is the id of the dragged element ("drag1")
     Append the dragged element into the drop element
  */
  document.addEventListener("drop", function (event) {
    event.preventDefault();
    let targetDiv = event.target;
    if (targetDiv.className == "droptarget") {
      document.getElementById("demo").style.color = "";
      targetDiv.style.border = "hidden";
      if (targetDiv.childElementCount != 0) {
        let childP = targetDiv.getElementsByTagName("p")[0];
        document.getElementById("answer").appendChild(childP);
      }
      targetDiv.appendChild(dragP);
      dragP = null;
    }
  });

  document.getElementById("checkAnswer").addEventListener("click", function () {
    let questions = document.getElementsByClassName("question");

    for (let index = 0; index < questions.length; index++) {
      const element = questions[index];
      let childP = element.getElementsByTagName("p")[0];
      let answer = childP != undefined ? childP.innerText : "no answer";
      console.log(answer);

      if (idtQuestions[index].answer === answer) {

        questions[index].innerHTML += `<br><span class="idt-correct"> ✅ Correct answer</span>`
      }
      else {

        questions[index].innerHTML += `<br><span class="idt-incorrect"> ❌ Incorrect answer</span>`
      }
    }
  })

  document.getElementById("reset-btn").addEventListener("click", () => {

  }
  )
});


