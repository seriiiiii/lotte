
 var myFullpage = new fullpage('#fullpage', {
      verticalCentered: true,
      anchors: ['anchor1', 'anchor2', 'anchor3'],
      menu: '#menu',
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#fff', '#000']
  });



$(".one1").on("mouseover", function() {
    $("#slide3").fadeOut();
	$(".img2").fadeOut();

});

$("#to").on("click", function() {
    $("#slide3").fadeOut();
	$(".img2").fadeOut();
	$(".img3").fadeOut();
	$(".img4").fadeOut();
});
$("#to").on("click", function() {
    $(".img1").fadeIn();
});
$("#to").on("mouseleave", function() {
    $(".img4").fadeOut();
	$(".img1").fadeOut();
	$(".img3").fadeOut();
	$(".img2").fadeOut();
});
$("#to").on("mouseleave", function() {
    $("#slide3").fadeIn();
});

$("#cs").on("click", function() {
    $("#slide3").fadeOut();
	$(".img1").fadeOut();
	$(".img3").fadeOut();
	$(".img4").fadeOut();
});
$("#cs").on("click", function() {
    $(".img2").fadeIn();
});
$("#cs").on("mouseleave", function() {
    $(".img4").fadeOut();
	$(".img1").fadeOut();
	$(".img3").fadeOut();
	$(".img2").fadeOut();
});
$("#cs").on("mouseleave", function() {
    $("#slide3").fadeIn();
});

$("#bu").on("click", function() {
    $("#slide3").fadeOut();
	$(".img1").fadeOut();
	$(".img2").fadeOut();
	$(".img4").fadeOut();
});
$("#bu").on("click", function() {
    $(".img3").fadeIn();
});
$("#bu").on("mouseleave", function() {
    $(".img4").fadeOut();
	$(".img1").fadeOut();
	$(".img3").fadeOut();
	$(".img2").fadeOut();
});
$("#bu").on("mouseleave", function() {
    $("#slide3").fadeIn();
});
$("#ab").on("click", function() {
    $("#slide3").fadeOut();
	$(".img1").fadeOut();
	$(".img3").fadeOut();
	$(".img2").fadeOut();
});
$("#ab").on("click", function() {
    $("#img .img4").fadeIn();
});
$("#ab").on("mouseleave", function() {
    $(".img4").fadeOut();
	$(".img1").fadeOut();
	$(".img3").fadeOut();
	$(".img2").fadeOut();
});
$("#ab").on("mouseleave", function() {
    $("#slide3").fadeIn();
});



