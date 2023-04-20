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
        document.getElementById('idt-questions').innerHTML += `<p class="drag" draggable="true">${idtQuestions[i].question}</p>`
      }

});