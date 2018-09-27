$(document).ready(function(){
    $('body').hasClass('no-touch') ? event = 'mouseenter mouseleave' : event = 'click';

    !$('body').hasClass('no-touch') ? event = 'mouseenter mouseleave' : event = 'click';

$('div div').on(event, function() {
    $(this).find('p + p').toggleClass('open');
});
    
  $(".arrow").click(function(){
      $('html,body').animate({
          scrollTop: $("#second").offset().top
      }, 'slow');
  });
    
    $("#menu").click(function(){
       open();
    });
    
    $("#works").click(function(){
        close();
      $('html,body').animate({
          scrollTop: $("#second").offset().top
      }, 'slow');
  });
    
    $("#home").click(function(){
        close();
      $('html,body').animate({
          scrollTop: $("#first").offset().top
      }, 'slow');
  });
    
    $(".close").click(function(){
        close();
    });
    
    $("#helen").hover(function(){
        
    });
});

function close(){
    $(".menuoverlay").fadeOut(function(){
            $(".menuoverlay").css("display","none")}
    )};

function open(){
    var top = $(window).scrollTop;
    $(".menuoverlay").css("top",top);
     $(".menuoverlay").css("left","0");
    $(".menuoverlay").fadeIn(function(){
        $(".menuoverlay").css("display","block")}) 
};