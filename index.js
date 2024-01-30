$(function (){
  $(".tech-icon").on("mouseover", (event)=> {
    $(event.target).addClass("tech-icon-pop");
  });
  $(".tech-icon").on("mouseout", (event)=> {
    $(event.target).removeClass("tech-icon-pop");
  });
});
