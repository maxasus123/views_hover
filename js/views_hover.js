// bob

(function ($) {
  Drupal.behaviors.views_hover =  {
    attach: function(context, settings) {

     	$(".views-hover").mouseover(function(e){
		$(this).find(".hover-content").show();
		
	}).mouseout(function(){
		$(this).find(".hover-content").hide();
	   });

	$(".views-hover").mousemove(function(e) {
	    //var getheight = $(this).find(".hover-content img").height();
            var posX = $(this).offset().left, posY = $(this).offset().top;
            $(".hover-content").css({"left": e.pageX-posX-5, "top": e.pageY-posY-100});
    });

    }
  };
})(jQuery);
