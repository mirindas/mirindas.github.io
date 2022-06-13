const descriptionText = "Entry Level Web Developer//";
//const aboutMeText ="Technology and innovation caught my eye from a young age, and it was the field that I chose to follow. My studies first started at the Vocational High School of Sivitanidios to learn the basics of computing and later continued my studies at the Metropolitan College of Athens in the field of Computer Science which followed the University of East London program. After completing my military duties I began some self-taught coding during the 2020 pandemic. My goal is to help people by creating useful software.";

let index = 0;
//let indexAbout = 0;
let letter = "";
//let about = "";

(function typeEffect() {
  letter = descriptionText.slice(0, ++index);

  document.querySelector(".typeEffect").textContent = letter;

  setTimeout(typeEffect, 150);
})();

// (function typeEffectAbout() {
//   about = aboutMeText.slice(0, ++indexAbout);

//   document.querySelector(".aboutMe").textContent = about;

//   setTimeout(typeEffectAbout, 55);
// })();

//setTimeout(typeEffectAbout, 4000);

let getMail = document.getElementById("mymail");
let viewportWidth = window.innerWidth;

getMail.onclick = () => {
  copyText();
  // getMail = popUpStyle(); goes with commented section in popUpStyle (previous implementation)
  popUpStyle();
  setTimeout(revertPopUpStyle, 1500); // popUp disappears after x seconds
};

let message = document.querySelector(".tip-msg");

const popUpStyle = () => {
  message.style.right = "-20px";
  message.style.opacity = "1";

  // temporay solution for mobile / small screens
  if (viewportWidth <= 800) {
    message.style.right = "150px";
    message.style.opacity = "1";
  }
  // return `
  // .tip:after .tip-msg {
  //     right:-20px;
  //     opacity:1;
  // }`
};

const revertPopUpStyle = () => {
  message.style.right = "9999px";
  message.style.opacity = "0";
};

const copyText = () => {
  let mailCopy = document.getElementById("mymail").innerHTML;
  //console.log(mailCopy);
  navigator.clipboard.writeText(mailCopy);
};

// Section Reveal
// FIX THIS BEFORE UNCOMMENTING
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Navigation

const primaryNav = document.querySelector("#nav-list");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const visible = primaryNav.getAttribute("data-visible");
  //console.log(visible);
  if (visible === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
