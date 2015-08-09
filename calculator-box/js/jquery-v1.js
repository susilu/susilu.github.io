
var out = 0;
$('#a10').click(function(){
	out = out + 10;
	$('#out').html(out);
}); 

$('#a20').click(function(){
	out = out + 20;
	$('#out').html(out);
}); 

$('#a30').click(function(){
	out = out + 30;
	$('#out').html(out);
}); 

$('#n10').click(function(){
	out = out - 10;
    $('#out').html(out);
});

$('#n20').click(function(){
		out = out - 20;
	$('#out').html(out);
}); 	

$('#n30').click(function(){
	out = out - 30;
	$('#out').html(out);
}); 	

$('#red').click(function(){
	$('#out').css("background-color", "red");

}); 

$('#blue').click(function(){
	$('#out').css("background-color", "blue");
}); 

$('#out').click(function(){
	$('#out').css("background-color", "white");
});