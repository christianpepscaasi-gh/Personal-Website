//added a greetings
const greeting = "Hello!";
let counter = 1;

const name = "Peps";

const clickButton = document.getElementById("button1");
const buttonTarget = document.getElementById("button_target");
clickButton.addEventListener("click", () => {
    buttonTarget.textContent = "You clicked me!";
    buttonTarget.style.color = "red";
}
);