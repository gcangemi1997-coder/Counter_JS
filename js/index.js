// Global variables

let savedValue = null 
let count = 0;

// Here, i  am creating,appending and setting attributes to the HTML elements

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);
const display = document.createElement("div");
display.setAttribute("id", "actual-count");
container.appendChild(display);
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id","button");
container.appendChild(buttonContainer);
const decrement = document.createElement("button");
decrement.classList.add("btn");
buttonContainer.appendChild(decrement);
decrement.textContent = "-";
const increment = document.createElement("button");
increment.classList.add("btn");
buttonContainer.appendChild(increment);
increment.textContent = "+";
const reset = document.createElement("button");
reset.classList.add("btn")
buttonContainer.appendChild(reset);
reset.textContent = "R";
const savedCount = document.createElement("button");
savedCount.classList.add("btn");
buttonContainer.appendChild(savedCount);
savedCount.textContent = "S";

// Function to update display after each button click

function updateDisplay(){
    display.textContent = count;
}

// Event listeners to increment,decrement,reset and savedCount

increment.addEventListener("click", () =>{count++; updateDisplay()});
decrement.addEventListener("click", () =>{count--; updateDisplay()});
reset.addEventListener("click", () =>{count = 0; updateDisplay()});
savedCount.addEventListener("click", ()=>{
    if (savedValue === null) {
        savedValue = count
        } else {
        count = savedValue;
        savedValue = null;
    }
    updateDisplay()
});
// updateDisplay() is called to set 0 as  initial value
updateDisplay();
