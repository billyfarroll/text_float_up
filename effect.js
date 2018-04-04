$(window).load(function(){

  var body = $("body");
      
  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(100).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };
  
  init();
  
  
});
