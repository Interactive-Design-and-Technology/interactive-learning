window.addEventListener("DOMContentLoaded", (event) => {
const card=document.getElementById("card-idt")
card.addEventListener("click",flipcard);
function flipcard(){
    card.classList.toggle("flipCard");
}
});

