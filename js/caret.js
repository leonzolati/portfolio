function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

/**
 * Init function sets up the carot
 */
function init() {
cursor = document.getElementById("cursor");
cursor.style.left = "0px";
}

function newLineToBreakRule(txt) {
  return txt.replace(/\n/g, '');
}

/** 
 * Types the value in from to the terminal input
 * 
 * @param {*} from the textarea from which the function is being called
 * @param {*} e the event triggering the function
 */
function typeIt(from, e) {
  e = e || window.event;
var w = document.getElementById("typer");
  var tw = from.value;
  w.innerHTML = newLineToBreakRule(tw);
}

/**
 * Moves the caret left or right when left/right arrow keys trigger the 
 * Function
 * 
 * @param {*} count the length to move the caret
 * @param {*} e the event triggering the funtion
 */
function moveIt(count, e) {
e = e || window.event;
var keycode = e.keyCode || e.which;
if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
  cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
} else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
  cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
}
}

