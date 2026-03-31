
/**
 * Helper function to creates DOM elements faster
 */
function el(tag, props, parent) {
  const element = document.createElement(tag);
  Object.assign(element, props); // Copia tutte le proprietà nell'elemento
  if (parent) parent.appendChild(element);
  return element;
}

// Exporting what i need only
export const orb1 = el('div', { className: 'bg-orb orb1' }, document.body);
export const orb2 = el('div', { className: 'bg-orb orb2' }, document.body);

export const wrapper = el('div', { className: 'wrapper' }, document.body);

el('p', { className: 'label', textContent: 'COUNTER' }, wrapper);

export const display = el('div', { id: 'actual-count' }, wrapper);

const buttonRow = el('div', { id: 'button' }, wrapper);

export const decrement = el('button', { 
  className: 'btn btn-dec', textContent: '−', title: 'Decrement' 
}, buttonRow);

export const increment = el('button', { 
  className: 'btn btn-inc', textContent: '+', title: 'Increment' 
}, buttonRow);

export const reset = el('button', { 
  className: 'btn btn-reset', textContent: 'R', title: 'Reset' 
}, buttonRow);

export const savedCount = el('button', { 
  className: 'btn btn-save', textContent: 'S', title: 'Save / Load' 
}, buttonRow);

el('p', { 
  className: 'hint', 
  innerHTML: 'Press <strong>S</strong> to save · press again to restore' 
}, wrapper);
