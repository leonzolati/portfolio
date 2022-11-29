var cursor;
window.onload = init;

/**
 * Init function sets up the carot
 */
function init() {
cursor = document.getElementById("cursor");
cursor.style.left = "0px";
}

/**
 * Reformats a string to remove any /n for more control
 * 
 * @param {*} txt the text to reformat 
 * @returns text without new lines
 */
function newLineToBreakRule(txt) {
  return txt.replace(/\n/g, '');
}

/** 
 * Types the value in from to the terminal input
 * 
 * @param {*} from the textarea from which the function is being called
 * @param {*} event the event triggering the function
 */
function typeIt(from, event) {
  event = event || window.event;
  var typer = document.getElementById("typer");
  var value = from.value;
  typer.innerHTML = newLineToBreakRule(value);
}

/**
 * Moves the caret left or right when left/right arrow keys trigger the 
 * Function
 * 
 * @param {*} count the length to move the caret
 * @param {*} event the event triggering the funtion
 */
function moveIt(count, event) {
  event = event || window.event;
  var keycode = event.keyCode || event.which;
  
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } 
  else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

