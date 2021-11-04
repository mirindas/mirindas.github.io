const descriptionText = "Entry Level Web Developer//";

let index = 0;
let letter = "";

(function typeEffect(){

    letter = descriptionText.slice(0,++index);
    
    document.querySelector(".typeEffect").textContent = letter;
 
    setTimeout(typeEffect,250);
}());
let getMail = document.getElementById("mymail");

getMail.onclick = () =>{
    copyText();
    // getMail = popUpStyle(); goes with commented section in popUpStyle (previous implementation)
    popUpStyle();
    setTimeout(revertPopUpStyle,1500)   // popUp disappears after x seconds
}

let message = document.querySelector(".tip-msg")

const popUpStyle = () => {

    message.style.right = "-20px";
    message.style.opacity = "1";
    // return `
    // .tip:after .tip-msg {
    //     right:-20px;
    //     opacity:1;
    // }`
}

const revertPopUpStyle = () =>{
    message.style.right = "9999px";
    message.style.opacity = "0";
}

const copyText = () => {
    let mailCopy = document.getElementById("mymail").innerHTML;
    console.log(mailCopy)
    navigator.clipboard.writeText(mailCopy)
}