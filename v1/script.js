//added a greetings
const greeting = "Hello!";
let counter = 1;

const name = "Peps";

// get the element of the id named button1 and button_target
// add and Event Listener on the click and change the text of the target
const clickButton = document.getElementById("button1");
const buttonTarget = document.getElementById("button_target");
clickButton.addEventListener("click", () => {
    buttonTarget.textContent = "You clicked me!";
    buttonTarget.style.color = "#fbbf24";
}
);

