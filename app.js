const descriptionText = "Entry Level Web Developer//";

let index = 0;
let letter = "";

(function typeEffect(){

    letter = descriptionText.slice(0,++index);
    
    document.querySelector(".typeEffect").textContent = letter;
 
    setTimeout(typeEffect,250);
}());