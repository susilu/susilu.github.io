document.getElementById('tempButton').onclick = toFahrenheit;

function toFahrenheit() {
	var C = document.getElementById('Celsius').value;
	var newF = C * 1.8 + 32;
	document.getElementById('result1').innerHTML = newF;
	}

document.getElementById('tempButton2').onclick = toCelsius;

function toCelsius() {
	var F = document.getElementById('Fahrenheit').value;
	var newC = (F - 32) * .55;
	document.getElementById('result2').innerHTML = newC;
	}

