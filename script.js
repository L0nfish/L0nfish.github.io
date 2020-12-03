$(document).ready(function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 100) {
        $("#masthead, #mastheader").addClass("scrolled");
      } else {
        $("#masthead, #mastheader").removeClass("scrolled");
      }
    });
  });

  $("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 100
    }, 800);
});

