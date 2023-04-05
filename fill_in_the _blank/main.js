window.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("idt-submit").addEventListener("click", clickButton);
});
function clickButton() {
    console.log("Clicked a Button");
    const answer = document.getElementById("idt-q1");
    const rightAnswer= document.getElementById("idt-op1");
   


    console.log(answer.value);
    if (answer.value.toLowerCase().trim() === "hypertension") {
        rightAnswer.classList.remove("incorrect");
        rightAnswer.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is incorrect");
        rightAnswer.classList.remove("correct");
        rightAnswer.classList.add("incorrect");
    }
}


