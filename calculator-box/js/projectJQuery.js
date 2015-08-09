function setOutValue(value) {
	$('#out').html(value);
};

function getOutValue() {
	return $('#out').html();
};

function mathHandler() {
	var delta = $(this).html();
	delta = parseInt(delta);
	var out = getOutValue();
	out = parseInt(out);
	setOutValue(out + delta);
};

$('.add-or-subtract').click(mathHandler);