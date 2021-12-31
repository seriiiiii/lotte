$('.btn1').click(function(){
	$(this).addClass('on');
	$('.two2').show();
	$('.three2').show();
	$('.two').hide();
	$('.three').hide();
});
$('.btn').click(function(){
	$(this).addClass('on');
	$('.two').show();
	$('.three').show();
	$('.two2').hide();
	$('.three2').hide();
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
$(document).ready(function() {
    $(window).scroll( function(){
        $('#section4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'45px'},1000);
            }
            
        }); 
    });
});