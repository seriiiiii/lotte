
$('.btn1').click(function(){
	$(this).addClass('on');
	$('.two').show();
	$('.one').hide();
});
$('.btn').click(function(){
	$(this).addClass('on');
	$('.one').show();
	$('.two').hide();
});


$('.one1').mouseover(function(){
	$('.section1_ho').show('400');
});
$('.one1').mouseleave(function(){
	$('.section1_ho').hide('400');
});
$('.one2').mouseover(function(){
	$('.section1_ho2').show('400');
});
$('.one2').mouseleave(function(){
	$('.section1_ho2').hide('400');
});
$('.one3').mouseover(function(){
	$('.section1_ho3').show('400');
});
$('.one3').mouseleave(function(){
	$('.section1_ho3').hide('400');
});
$('.one4').mouseover(function(){
	$('.section1_ho4').show('400');
});
$('.one4').mouseleave(function(){
	$('.section1_ho4').hide('400');
});
$('.one5').mouseover(function(){
	$('.section1_ho5').show('400');
});
$('.one5').mouseleave(function(){
	$('.section1_ho5').hide('400');
});
$('.one6').mouseover(function(){
	$('.section1_ho6').show('400');
});
$('.one6').mouseleave(function(){
	$('.section1_ho6').hide('400');
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('#section2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'150px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('#section3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'150px'},1000);
            }
            
        }); 
    });
});