$('.combine div').click(function(){
	$('#white').html(parseInt($("#white").html()) + parseInt($(this).html()));
}); 

$('.color div').click(function(){
	$('#white').css("background-color", $(this).attr("id"));
}); 