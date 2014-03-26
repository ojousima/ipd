

function navOrder () {
	$("#nav-order").addClass("active");
	$("#nav-community").removeClass("active");
	$(".order-list").fadeOut(400,function () {
		$(".coffee-logo").show();
		$(".coffee-brand").show();
	});
	$(".community-page").hide();
}
	
function navCommunity () {
	$("#nav-community").addClass("active");
	$("#nav-order").removeClass("active");
	$(".order-list").hide();
	$(".coffee-logo").hide();
	$(".coffee-brand").hide();
	$(".community-page").show();
	
}

function order (item) {
	$("#nav-order").removeClass("active");
	$(".coffee-logo").fadeOut();
	$(".coffee-brand").fadeOut(400,function () {
		$(".order-list").show();
	});
	$(".community-page").hide();
}