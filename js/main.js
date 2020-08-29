$(document).ready(function(){
   
	//calculator
	$('.btn').click(function(){
		$('#result').val($('#result').val() + $(this).val());
	});
	
	$('#clr').click(function(){
		$('#result').val('');
	});
	
	
	$('#calc').click(function(){
		$('#result').val(eval($('#result').val()));
	});
   
});

 