// Your JavaScript code here
      window.addEventListener("DOMContentLoaded", (event) => {
        // Helper function to set a question
        function setQuestion(question, index) {
          let questionElement = document.querySelector(".question");
          console.log(questionElement);
        
          // Set the question text and answer to the dropzone dataset
          const draggables = document.querySelectorAll(".draggable");
          console.log("hello ")
          console.log(draggables)
        
          questionElement.innerHTML = `${index + 1}. ${question.question}`;
          dropzone.dataset.answer = question.answer;
        
          // Append the answers to the question element
          console.log("anmol")
          console.log(question)
          question.answer.forEach(answer => {
            let answerElement = document.createElement("div");
            answerElement.classList.add("draggable");
            answerElement.dataset.answer = answer.toLowerCase();
            answerElement.innerHTML = answer;
            questionElement.appendChild(answerElement);
          });
        }

        // Set the initial score to 0
        let score = 0;

        // Define an array of questions and their correct answers
        const questions = [
          { question: "What is the capital of France?", answer: "paris" },
          { question: "What is the largest country in the world?", answer: "russia" },
          { question: "What is the currency of Japan?", answer: "yen" }
        ];

        // Get a reference to the question element inside the dropzone
        const questionElement = document.querySelector("#question");
        const dropzone = document.querySelector(".dropzone");

        // Set the first question
        let currentQuestionIndex = 0;
        setQuestion(questions[currentQuestionIndex], currentQuestionIndex);

        // Add a dragstart event listener to each draggable answer
        console.log("number 2")
        console.log(draggables)
        draggables.forEach(draggable => {
          draggable.addEventListener("dragstart", event => {
    
              // Set the drag data to the answer's dataset value
              event.dataTransfer.setData("text/plain", event.target.dataset.answer);
          });
        });

        // Add a dragover event listener to the dropzone
        dropzone.addEventListener("dragover", event => {
          // Prevent default behavior to allow drop
          event.preventDefault();
        });

        // Add a drop event listener to the dropzone
        dropzone.addEventListener("drop", event => {
          // Prevent default behavior to allow drop
          event.preventDefault();

          // Get the answer from the drag data
          const answer = event.dataTransfer.getData("text/plain");

          // Check if the answer matches the dropzone's dataset value
          if (answer === dropzone.dataset.answer) {
              // If the answer is correct, increase the score and display a message
              score++;
              messageElement.innerHTML = `Correct! Your score is now ${score}.`;

              // Remove the current question from the array of questions
              questions.shift();
              currentQuestionIndex++;

              // If there are more questions, set the next question
              if (questions.length > 0) {
                  setQuestion(questions[currentQuestionIndex], currentQuestionIndex);
              } else {
                  // Otherwise, display a message that the game is over
                  questionElement.innerHTML = "";
                  messageElement.innerHTML = `Game over! Your final score`;}

              }
            }
       )});

