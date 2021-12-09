// Antonio Padilla 
// apadilla
// calculator.js

const ops = {
	ADD: "+",
	SUB: "-",
	MUL: "*",
	DIV: "/",
	EQ: "="
}

var newVal = 0;
var preVal = 0;
var preOp = ops.ADD;
var isPreviousDigit = false;

function setDisplay() {
	var element = document.getElementById("calc-display");
	element.value = 0;
}

function add(preVal, newVal) {
	return preVal + newVal;
}

function subtract(preVal, newVal) {
	return preVal - newVal;
}

function multiply(preVal, newVal) {
	return preVal * newVal;
}

function divide(preVal, newVal) {
	if (newVal == 0) return 0;
	return (preVal - (preVal % newVal))/newVal;
}

function digitPressed(num) {
	var element = document.getElementById("calc-display");
	isPreviousDigit = true;
	newVal = newVal*10 + num;
	element.value = newVal;
}

function opPressed(op) {
	var element = document.getElementById("calc-display");
	if (!isPreviousDigit) {
		alert("you must enter a number first");
		resetState();
		element.value = 0;
		return;
	}
	isPreviousDigit = false;
	preVal = calculateResult(preOp);
	if (preVal == 0 && preOp == ops.DIV) {
		alert("division by 0 is undefined");
	}
	preOp = op;
	newVal = 0;
	element.value = preVal;
}

function resetState() {
	isPreviousDigit = false;
	var newVal = 0;
	var preVal = 0;
	var preOp = ops.ADD;
}

function calculateResult(op) {
	switch (op) {
		case "+":
			return add(preVal, newVal); 
		case "-":
			return subtract(preVal, newVal);
		case "*":
			return multiply(preVal, newVal);
		case "/":
			return divide(preVal, newVal);
		case "=":
			return newVal;
		default:
			return 0;
	}
}














