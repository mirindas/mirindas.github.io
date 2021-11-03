// const descriptionText = "Entry Level Front-End Developer//";

// let charIndex = 0;
// let char = "";

// (function typeEffect(){
//     char = descriptionText.slice(0,++charIndex);

//     document.querySelector(".typeEffect").textContent = char;
    
//     setTimeout(typeEffect,400);
// }());



const descriptionText = "Entry Level Web Developer//";

let index = 0;
let letter = "";

(function typeEffect(){

    letter = descriptionText.slice(0,++index);
    
    document.querySelector(".typeEffect").textContent = letter;
 
    setTimeout(typeEffect,250);
}());