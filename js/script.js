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
    
    $("#misc").click(function(){
        close();
        $('html,body').animate({
            scrollTop: $("#third").offset().top
        }, 'slow');
    });
    
    $(".close").click(function(){
        close();
    });
    
    $("#helen").hover(function(){
        
    });
    
    $(window).scroll(function(){
       /*if ($(window).scrollTop() <= 0){
           $("#topbar").css("background-color","rgba(0,0,0,0)");
           $("#topbar").css("box-shadow","");
       }else{
           $("#topbar").css("background-color","#eeca66");
           $("#topbar").css("box-shadow","0.2rem 0 1rem grey");
           $("#topbar").css("padding","1.5em 10rem");
       }*/
            
    });
    var scrollPos = 0;
    // adding scroll event
    window.addEventListener('scroll', function(){
        
      // detects new state and compares it with the new one
      if ((document.body.getBoundingClientRect()).top > scrollPos){
            direction = 'UP';
            console.log("up");
            $("#topbar").css("display","block");
      }else{
            direction = 'DOWN';
            $("#topbar").css("display","none");
          console.log("down");
      }
        // saves the new position for iteration.
        scrollPos = (document.body.getBoundingClientRect()).top;
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



