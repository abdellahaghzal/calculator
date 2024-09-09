document.addEventListener("DOMContentLoaded", () => {
	let numInDispalay = false;
	let operatorSet = false;
	let therIsDot = false;
	let firstNum;
	let operator;
	let secondNum;
	let numButtons = document.querySelectorAll("#nums button");
	let display = document.querySelector("#display > div");
	display.innerHTML = "0";
	let continu = false;
	numButtons.forEach(numbutton => {
		numbutton.addEventListener("click", () => {
			if (!continu || display.innerHTML === "0") {
				display.innerHTML = "";
			}
			display.innerHTML += numbutton.innerHTML;
			numInDispalay = true;
			continu = true;
		});
	});
	document.querySelector("#clear").addEventListener("click", () => {
		numInDispalay = false;
		operatorSet = false;
		display.innerHTML = "0";
		continu = false;
		therIsDot = false;
	});
	document.querySelector("#backspace").addEventListener("click", () => {
		display.innerHTML = display.innerHTML.slice(0, -1);
		if (display.innerHTML.length === 0) {
			numInDispalay = false;
			display.innerHTML = "0";
			continu = false;
		}
		if (!display.innerHTML.includes('.')) {
			therIsDot = false;
		}
	});
	document.querySelector("#multiplication").addEventListener("click", () => {
		if (numInDispalay && !operatorSet) {
			firstNum = Number(display.innerHTML);
			operator = "*";
			operatorSet = true;
			therIsDot = false;
		} else if (operatorSet && numInDispalay) {
			secondNum = Number(display.innerHTML);
			if (operator === "/" && secondNum != 0) {
				display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "/" && secondNum === 0) {
				display.innerHTML = "Math error";
			} else if (operator === "*") {
				display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "+") {
				display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}  else if (operator === "-") {
				display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}
			operator = "*";
			therIsDot = false;
		}
		continu = false;
	});
	document.querySelector("#division").addEventListener("click", () => {
		if (numInDispalay && !operatorSet) {
			firstNum = Number(display.innerHTML);
			operator = "/";
			operatorSet = true;
			therIsDot = false;
		} else if (operatorSet && numInDispalay) {
			secondNum = Number(display.innerHTML);
			if (operator === "/" && secondNum != 0) {
				display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "/" && secondNum === 0) {
				display.innerHTML = "Math error";
			} else if (operator === "*") {
				display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "+") {
				display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}  else if (operator === "-") {
				display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}
			operator = "/";
			therIsDot = false;
		}
		continu = false;
	});
	document.querySelector("#addition").addEventListener("click", () => {
		if (numInDispalay && !operatorSet) {
			firstNum = Number(display.innerHTML);
			operator = "+";
			operatorSet = true;
			therIsDot = false;
		} else if (operatorSet && numInDispalay) {
			secondNum = Number(display.innerHTML);
			if (operator === "/" && secondNum != 0) {
				display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "/" && secondNum === 0) {
				display.innerHTML = "Math error";
			} else if (operator === "*") {
				display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "+") {
				display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}  else if (operator === "-") {
				display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}
			operator = "+";
			therIsDot = false;
		}
		continu = false;
	});
	document.querySelector("#substraction").addEventListener("click", () => {
		if (numInDispalay && !operatorSet) {
			firstNum = Number(display.innerHTML);
			operator = "-";
			operatorSet = true;
			therIsDot = false;
		} else if (operatorSet && numInDispalay) {
			secondNum = Number(display.innerHTML);
			if (operator === "/" && secondNum != 0) {
				display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "/" && secondNum === 0) {
				display.innerHTML = "Math error";
			} else if (operator === "*") {
				display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			} else if (operator === "+") {
				display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}  else if (operator === "-") {
				display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
				firstNum = Number(display.innerHTML)
			}
			operator = "-";
			therIsDot = false;
		}
		continu = false;
	});
	document.querySelector("#equals").addEventListener("click", () => {
		if (operatorSet && numInDispalay) {
			secondNum = Number(display.innerHTML);
			if (operator === "/" && secondNum != 0) {
				display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
			} else if (operator === "/" && secondNum === 0) {
				display.innerHTML = "Math error";
			} else if (operator === "*") {
				display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
			} else if (operator === "+") {
				display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
			}  else if (operator === "-") {
				display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
			}
			therIsDot = false;
		}
		continu = false;
		operatorSet = false;
	});
	document.querySelector("#dot").addEventListener("click", () => {
		if (!continu) {
			display.innerHTML = "0";
		}
		if (!therIsDot) {
			display.innerHTML += ".";
			continu = true;
			therIsDot = true;
		}
	});
	document.addEventListener("keydown", function(event) {
		let key = event.key;
		if (!isNaN(Number(key))) {
			if (!continu || display.innerHTML === "0") {
				display.innerHTML = "";
			}
			display.innerHTML += key;
			numInDispalay = true;
			continu = true;
		} else if (key === "*") {
			if (numInDispalay && !operatorSet) {
				firstNum = Number(display.innerHTML);
				operator = "*";
				operatorSet = true;
				therIsDot = false;
			} else if (operatorSet && numInDispalay) {
				secondNum = Number(display.innerHTML);
				if (operator === "/" && secondNum != 0) {
					display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "/" && secondNum === 0) {
					display.innerHTML = "Math error";
				} else if (operator === "*") {
					display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "+") {
					display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}  else if (operator === "-") {
					display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}
				operator = "*";
				therIsDot = false;
			}
			continu = false;
		} else if (key === "/") {
			if (numInDispalay && !operatorSet) {
				firstNum = Number(display.innerHTML);
				operator = "/";
				operatorSet = true;
				therIsDot = false;
			} else if (operatorSet && numInDispalay) {
				secondNum = Number(display.innerHTML);
				if (operator === "/" && secondNum != 0) {
					display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "/" && secondNum === 0) {
					display.innerHTML = "Math error";
				} else if (operator === "*") {
					display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "+") {
					display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}  else if (operator === "-") {
					display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}
				operator = "/";
				therIsDot = false;
			}
			continu = false;
		} else if (key === "+") {
			if (numInDispalay && !operatorSet) {
				firstNum = Number(display.innerHTML);
				operator = "+";
				operatorSet = true;
				therIsDot = false;
			} else if (operatorSet && numInDispalay) {
				secondNum = Number(display.innerHTML);
				if (operator === "/" && secondNum != 0) {
					display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "/" && secondNum === 0) {
					display.innerHTML = "Math error";
				} else if (operator === "*") {
					display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "+") {
					display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}  else if (operator === "-") {
					display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}
				operator = "+";
				therIsDot = false;
			}
			continu = false;
		} else if (key === "-") {
			if (numInDispalay && !operatorSet) {
				firstNum = Number(display.innerHTML);
				operator = "-";
				operatorSet = true;
				therIsDot = false;
			} else if (operatorSet && numInDispalay) {
				secondNum = Number(display.innerHTML);
				if (operator === "/" && secondNum != 0) {
					display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "/" && secondNum === 0) {
					display.innerHTML = "Math error";
				} else if (operator === "*") {
					display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				} else if (operator === "+") {
					display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}  else if (operator === "-") {
					display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
					firstNum = Number(display.innerHTML)
				}
				operator = "-";
				therIsDot = false;
			}
			continu = false;
		} else if (key === "Enter") {
			if (operatorSet && numInDispalay) {
				secondNum = Number(display.innerHTML);
				if (operator === "/" && secondNum != 0) {
					display.innerHTML = String(Math.round((firstNum / secondNum) * 100) / 100);
				} else if (operator === "/" && secondNum === 0) {
					display.innerHTML = "Math error";
				} else if (operator === "*") {
					display.innerHTML = String(Math.round((firstNum * secondNum) * 100) / 100);
				} else if (operator === "+") {
					display.innerHTML = String(Math.round((firstNum + secondNum) * 100) / 100);
				}  else if (operator === "-") {
					display.innerHTML = String(Math.round((firstNum - secondNum) * 100) / 100);
				}
				therIsDot = false;
			}
			continu = false;
			operatorSet = false;
		} else if (key === ".") {
			if (!continu) {
				display.innerHTML = "0";
			}
			if (!therIsDot) {
				display.innerHTML += ".";
				continu = true;
				therIsDot = true;
			}
		} else if (key === "c" || key === "C") {
			numInDispalay = false;
			operatorSet = false;
			display.innerHTML = "0";
			continu = false;
			therIsDot = false;
		} else if (key === "Backspace") {
			display.innerHTML = display.innerHTML.slice(0, -1);
			if (display.innerHTML.length === 0 || !continu) {
				numInDispalay = false;
				display.innerHTML = "0";
				continu = false;
			}
			if (!display.innerHTML.includes('.')) {
				therIsDot = false;
			}
		}
	});
});

