const descriptionText = "Entry Level Web Developer//";

let index = 0;
let letter = "";

(function typeEffect() {
  letter = descriptionText.slice(0, ++index);

  document.querySelector(".typeEffect").textContent = letter;

  setTimeout(typeEffect, 150);
})();

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
  if (viewportWidth <= 730) {
    message.style.right = "100px";
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
