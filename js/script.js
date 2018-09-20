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
    
    $("#works").click(function(){
      $('html,body').animate({
          scrollTop: $("#second").offset().top
      }, 'slow');
  });
});