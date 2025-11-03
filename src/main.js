import "./style.css";

// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("myName");
const button = document.getElementById("change-greeting");
const decreaseButton = document.getElementById("lower-greeting");
const resetButton = document.getElementById("reset-greeting");
const countElement = document.getElementById("click-count");

function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, i am Caden!";
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount === 10) {
    document.body.style.backgroundColor = "lightblue";
  }
}
// make a new button that decreases the count by one
function decreaseGreeting() {
  clickCount--;
  countElement.textContent = `Button clicks: ${clickCount}`;
}
// added a reset button that sets the count to zero
function resetGreeting() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}
// make it so that the background color changes when count reaches 10
if (clickCount === 10) {
  document.body.style.backgroundColor = "lightblue";
}

// Event listener - this is new! Responds to user interaction
button.addEventListener("click", updateGreeting);

decreaseButton.addEventListener("click", decreaseGreeting);

resetButton.addEventListener("click", resetGreeting);
