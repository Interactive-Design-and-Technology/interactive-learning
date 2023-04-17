window.addEventListener("DOMContentLoaded", (event) => {

 // Define an array of question-answer pairs
 const questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    answer: "Harper Lee"
  }
];




  // Get references to the draggable answers and the dropzone
  const draggables = document.querySelectorAll(".answer");
  const dropzone = document.querySelector(".dropzone");
  const messageElement = document.querySelector("#message");

  // Set the initial score to 0
  let score = 0;

// Select a random question from the questions array
let currentQuestion = questions[Math.floor(Math.random() * questions.length)];

// Display the current question in the dropzone
dropzone.innerHTML = currentQuestion.question;
dropzone.dataset.answer = currentQuestion.answer;





  // Add a dragstart event listener to each draggable answer
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
    } else {
      // If the answer is incorrect, display a message
      messageElement.innerHTML = "Incorrect. Try again.";
    }
  });

});
