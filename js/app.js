
// Entry point: Wires up the logic to the DOM elements

increment.addEventListener('click', incrementCount);
decrement.addEventListener('click', decrementCount);
reset.addEventListener('click', resetCount);
savedCount.addEventListener('click', saveOrLoad);

// Showing 0 at initial state
updateDisplay();