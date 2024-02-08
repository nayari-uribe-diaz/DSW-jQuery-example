$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#p1").click(function() {
		$(".disappear").toggle();
	});
	$("#p2").dblclick(function() {
		$("#p2").css({"color":"red"});
	});
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
});
