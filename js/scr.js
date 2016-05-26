 $(document).ready(function() {
    $("#slider1").lightSlider({
    	item : 1,
        slideMargin: 0,
    	pager:	false,
    	slideMove: 1,
    	slideMargin: 2,
 		auto:true,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
       
    }); 
  });
 $(document).ready(function() {
    $("#slider2").lightSlider({
    	item : 1,
        slideMargin: 0,
    	pager:	true,
 		auto:true,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
       
    }); 
  });