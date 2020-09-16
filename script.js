$(document).ready(function(){

	var $item = "nothing";

	$(".overlay p").click(function(){
		$(".overlay p").slideToggle();
	});

	$("section").hover(function(){
		$(this).css({
			"box-sizing": "border-box",
			"border-radius": "8px",
			"box-shadow": "0 0 40px -10px #000",
		});
	}, function(){
		$(this).css({
			"box-sizing": "",
			"border-radius": "",
			"box-shadow": "",
		});
	});

	$(".btn-form").click(function(){
		$("form").show();
	});

});