
// Counter Logic

let count = 0;
let savedValue = null;

function updateDisplay() {
  display.textContent = count;
  display.classList.toggle('positive', count > 0);
  display.classList.toggle('negative', count < 0);
}

function incrementCount() {
  count++;
  updateDisplay();
}

function decrementCount() {
  count--;
  updateDisplay();
}

function resetCount() {
  count = 0;
  updateDisplay();
}

function saveOrLoad() {
  if (savedValue === null) {
    savedValue = count;
    savedCount.classList.add('active');
  } else {
    count = savedValue;
    savedValue = null;
    savedCount.classList.remove('active');
    updateDisplay();
  }
}