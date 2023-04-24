window.addEventListener("DOMContentLoaded", (event) => {
const card=document.getElementById("card-idt")
card.addEventListener("click",flipcard);
function flipcard(){
    card.classList.toggle("flipCard");
}
const card_two=document.getElementById("card-idt-two")
card_two.addEventListener("click",flipcard_two);
function flipcard_two(){
    card_two.classList.toggle("flipCard-two");
}
});

