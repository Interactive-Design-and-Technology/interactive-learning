window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // step 1 get all the buttons 
    // step 2 loop through all the buttons and add event listeners 

    const buttons = document.getElementsByTagName('button');
    console.log(buttons);

    for(let x = 0;x < buttons.length; x++ ){
        buttons[x].addEventListener("click", (event) => {
            console.log(`button clicked ${x}`);
        })
    }

    document.getElementById('special-btn').addEventListener("click", (event) => {
        console.log("btn clicked");
    });
  });

function textChange(url){
    document.getElementById('container').innerHTML = `<p> ${url} </p>`
}