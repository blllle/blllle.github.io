$(document).ready(function() {
  $(".hover").on("touchstart touchend", function() {
    // e.preventDefault();
    $(this).toggleClass("hover_effect");
  });
});
