// JavaScript Document

var elementTop = $('#navigation').offset().top;
$('#navigation').affix({
    offset: {
      top: elementTop
      }
  });
  
 $('#navigation').on('affix.bs.affix', function () {
    $('#navigation').css("top", "0");
	$('#navigation').css("z-index", "999");
});


	
	//page Scroll
	$('a[href^=#], a.top[href^=#]').click(function(event) {
			event.preventDefault();
			$('html,body').animate({
            scrollTop: $(this.hash).offset().top - 20},
            1000);	
	});