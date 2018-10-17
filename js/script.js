$(document).ready(function(){
    
    var direction;
    
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
        if($('#second').length){
            $('html,body').animate({
          scrollTop: $("#second").offset().top
      }, 'slow');
        }
      
  });
    
    $("#home").click(function(){
        close();
      $('html,body').animate({
          scrollTop: $("#first").offset().top
      }, 'slow');
  });
    
    $("#misc").click(function(){
        close();
        $('html,body').animate({
            scrollTop: $("#third").offset().top
        }, 'slow');
    });
    
    $(".closeBtn").click(function(){
        close();
    });
    
    $("#helen").hover(function(){
        
    });
    
    var scrollPos = 0;
    // adding scroll event
    window.addEventListener('scroll', function(){
        
      // detects new state and compares it with the new one
      if ((document.body.getBoundingClientRect()).top > scrollPos){
            direction = 'UP';
            console.log(scrollPos);
            $("#topbar").css("display","block");
          $("#topbar").css("background-color","white");
      }else{
            direction = 'DOWN';
            $("#topbar").css("display","none");
          console.log(scrollPos);
      }
        // saves the new position for iteration.
        scrollPos = (document.body.getBoundingClientRect()).top;
        if ($(window).scrollTop() == 0){
             $("#topbar").css("background-color","transparent");
        }
    });
    
    $("#smith").click(function(){
       $("#smithModal").modal();
    });

});

function close(){
    $(".menuoverlay").fadeOut(function(){
        $('body').removeClass('noScroll');
        $(".menuoverlay").css("display","none")}
    )};

function open(){
    var top = $(window).scrollTop
    $(".menuoverlay").css("top",top);
     $(".menuoverlay").css("left","0");
    $(".menuoverlay").fadeIn(function(){
        $(".menuoverlay").css("display","block")}) 
};


