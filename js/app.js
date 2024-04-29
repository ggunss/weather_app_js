const number = document.querySelector('.current-weather .heading');
const overcast = document.querySelector('.current-weather .body-3');

console.log(number);
/**
 *
 * @param {NodeList} elmts selected elements from HTML to add events
 * @param {string} event event type e.g. 'click', 'mouseenter' ...
 * @param {Function} callback callback function to be executed when event is triggered
 */

function eventOnElmts(elmts, event, callback) {
  for (const elmt of elmts) {
    elmt.addEventListener(event, callback);
  }
}

function cahangeColor() {
  number[0].style.color = 'red';
}

eventOnElmts(number, 'click', cahangeColor);
