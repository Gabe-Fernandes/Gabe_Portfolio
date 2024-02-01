$(function (){
  $(".tech-icon").on("mouseover", (event)=> {
    $(event.target).addClass("tech-icon-pop");
    if ($(event.target).parent().hasClass("tech-icon")) {
      $(event.target).parent().addClass("tech-icon-pop");
    }
  });
  $(".tech-icon").on("mouseout", (event)=> {
    $(event.target).removeClass("tech-icon-pop");
    if ($(event.target).parent().hasClass("tech-icon")) {
      $(event.target).parent().removeClass("tech-icon-pop");
    }
  });
});
