
$(document).ready(function(){

  // Course Tabs page tabs
  $('.tabs').tabs();

  // Collapsible for Course Tabs page
  $('.collapsible').collapsible();

  // Controlling Collapsible header visibility
  $('.all-top a').click(function () {
    $('.collapsible li').removeClass("active");
    // $('.collapsible li .collapsible-body').css("display", "none");
    $('.collapsible li .collapsible-body').fadeOut(800);
  });


  $('.course-row').hover(function () {
    $(this).addClass("active");
    }, 
    function () {
      $(this).removeClass("active");
  });

  // Discussions Tab Reply button color change
  $('.disc-white .comments').hover(function () {
    $('.disc-white .btn-reply').css("background-color","#2663a6");
  },
  function () {
      $('.disc-white .btn-reply').css("background-color","#d4d4d4");
  });


  $('.hamburg').click(function () {
    var xx = $('.small-icontwo');
    if(xx.css("display") == "flex") {
      $('.small-icontwo').css("display","none");
    }
    else{
      $('.small-icontwo').css("display","flex");
    }
    
  });
  

});

