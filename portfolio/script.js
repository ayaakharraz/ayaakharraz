// Typing animation
const typing = document.querySelector(".typing");
const skills = ["C", "C++", "Python", "HTML", "CSS", "JavaScript"];
let index = 0;
let charIndex = 0;

function type() {
    if (index >= skills.length) index = 0;
    if (charIndex < skills[index].length) {
        typing.textContent += skills[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(() => erase(), 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typing.textContent = skills[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        index++;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Animate skill bars
const fills = document.querySelectorAll(".fill");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.9;
    fills.forEach(fill => {
        const fillTop = fill.getBoundingClientRect().top;
        if (fillTop < triggerBottom) {
            fill.style.width = fill.getAttribute("style").match(/width:\s*(.*);/)[1];
        }
    });
});