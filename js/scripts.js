$(document).ready(function() {
  $(".minesweeper-game").contextmenu(function() {
    return false;
  })
  $(".cell").mousedown(function(event) {
    switch (event.which) {
      case 1:
      if ($(this).hasClass("has-bomb")){
        $(".has-bomb").addClass("bomb-clicked");
      } else {
        $(this).addClass("clicked-on");
      }
      break;
      case 3:
      if ($(this).hasClass("flag")) {
        $(this).removeClass("flag")
      } else if (!$(this).hasClass("clicked-on")){
        $(this).addClass("flag");
      } else {
        $(this).addClass("flag");
      }
    }
  })
})
