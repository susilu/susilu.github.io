
var out = 0;
document.getElementById('a10').onclick = addTen;
	function addTen(){
		out = out + 10;
document.getElementById('out').innerHTML = out;
	}

document.getElementById('a20').onclick = addTwenty;
	function addTwenty(){
		out = out + 20;
document.getElementById('out').innerHTML = out;
	}

document.getElementById('a30').onclick = addThirty;
	function addThirty(){
		out = out + 30;
document.getElementById('out').innerHTML = out;
	}	

document.getElementById('n10').onclick = minusTen;
	function minusTen(){
		out = out - 10;
document.getElementById('out').innerHTML = out;
	}		

document.getElementById('n20').onclick = minusTwenty;
	function minusTwenty(){
		out = out - 20;
document.getElementById('out').innerHTML = out;
	}		

document.getElementById('n30').onclick = minusThirty;
	function minusThirty(){
		out = out - 30;
document.getElementById('out').innerHTML = out;
	}		

document.getElementById('red').onclick = changeRed;
	function changeRed(){
		document.getElementById('out').style.backgroundColor = 'red';
	}

document.getElementById('blue').onclick = changeBlue;
	function changeBlue(){
		document.getElementById('out').style.backgroundColor = 'blue';
	}	

document.getElementById('out').onclick = changeWhite;
	function changeWhite(){
		document.getElementById('out').style.backgroundColor = 'white';
	}		