
import { display, savedCount } from './dom.js';

// Get counting from Local Storage (if exists)
let count = parseInt(localStorage.getItem('currentCount')) || 0;
let savedValue = localStorage.getItem('savedPoint') ? parseInt(localStorage.getItem('savedPoint')) : null;

export function updateDisplay() {
  display.textContent = count;
  display.classList.toggle('positive', count > 0);
  display.classList.toggle('negative', count < 0);
  // Saving current state after each changes
  localStorage.setItem('currentCount', count);
  
  // Visual handling of the Save button when a value is stored.
  savedCount.classList.toggle('active', savedValue !== null);
}

export function incrementCount() {
  count++;
  updateDisplay();
}

export function decrementCount() {
  count--;
  updateDisplay();
}

export function resetCount() {
  count = 0;
  localStorage.removeItem('currentCount');
  updateDisplay();
}

export function saveOrLoad() {
  if (savedValue === null) {
    savedValue = count;
    localStorage.setItem('savedPoint', savedValue);
  } else {
    count = savedValue;
    savedValue = null;
    localStorage.removeItem('savedPoint');
  }
  updateDisplay();
}
