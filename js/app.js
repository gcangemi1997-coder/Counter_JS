
import * as dom from './dom.js';
import * as logic from './counter.js';

// Wiring up the logic
dom.increment.addEventListener('click', logic.incrementCount);
dom.decrement.addEventListener('click', logic.decrementCount);
dom.reset.addEventListener('click', logic.resetCount);
dom.savedCount.addEventListener('click', logic.saveOrLoad);

// Initial state
logic.updateDisplay();
