window.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("idt-submit").addEventListener("click", clickButton);
});
function clickButton() {
    console.log("Clicked a Button");
    const answer = document.getElementById("idt-q1");
    console.log(answer.value);
    if (answer.value.toLowerCase().trim() === "hypertension") {

        console.log("Answer is correct")



    }
    else {
        console.log("Answer is incorrect")

    }
}


