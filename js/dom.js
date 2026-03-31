
// Creates and appends all DOM elements

const orb1 = document.createElement('div');
orb1.className = 'bg-orb orb1';
document.body.appendChild(orb1);

const orb2 = document.createElement('div');
orb2.className = 'bg-orb orb2';
document.body.appendChild(orb2);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

const label = document.createElement('p');
label.className = 'label';
label.textContent = 'COUNTER';
wrapper.appendChild(label);

const display = document.createElement('div');
display.setAttribute('id', 'actual-count');
wrapper.appendChild(display);

const buttonRow = document.createElement('div');
buttonRow.setAttribute('id', 'button');
wrapper.appendChild(buttonRow);

const decrement = document.createElement('button');
decrement.className = 'btn btn-dec';
decrement.textContent = '−';
decrement.setAttribute('title', 'Decrement');
buttonRow.appendChild(decrement);

const increment = document.createElement('button');
increment.className = 'btn btn-inc';
increment.textContent = '+';
increment.setAttribute('title', 'Increment');
buttonRow.appendChild(increment);

const reset = document.createElement('button');
reset.className = 'btn btn-reset';
reset.textContent = 'R';
reset.setAttribute('title', 'Reset');
buttonRow.appendChild(reset);

const savedCount = document.createElement('button');
savedCount.className = 'btn btn-save';
savedCount.textContent = 'S';
savedCount.setAttribute('title', 'Save / Load');
buttonRow.appendChild(savedCount);

const hint = document.createElement('p');
hint.className = 'hint';
hint.innerHTML = 'Press <strong>S</strong> to save · press again to restore';
wrapper.appendChild(hint);