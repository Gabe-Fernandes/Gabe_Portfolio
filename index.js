$(function (){
  // library content
  const openModal = "O";
  const closeModal = "C";

  function ToggleModal(main, modal, direction) {
    if (direction === openModal) {
      main.addClass("unclickable");
      modal.removeClass("modal-hide");
    }
    else if (direction === closeModal) {
      main.removeClass("unclickable");
      modal.addClass("modal-hide");
    }
  }

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  // site content
  $(".tech-icon").on("mouseover", (event) => {
    $(event.target).addClass("tech-icon-pop");
    if ($(event.target).parent().hasClass("tech-icon")) {
      $(event.target).parent().addClass("tech-icon-pop");
    }
  });
  $(".tech-icon").on("mouseout", (event) => {
    $(event.target).removeClass("tech-icon-pop");
    if ($(event.target).parent().hasClass("tech-icon")) {
      $(event.target).parent().removeClass("tech-icon-pop");
    }
  });

  $(".tech-icon").on("click", async () => {
    $(".tech-icon").addClass("hide");
    ToggleModal($("#portfolioContent"), $("#techIconModal"), openModal);
    await delay(100);
    $(".expression").addClass("anim-icon-transitions");
    await delay(1400);
    $(".expression").addClass("hide-anim-icons");
    await delay(300);
    $(".expression").addClass("clear-expression-divs");
    $(".tech-highlight").removeClass("hide");
  });

  $("#techIconCloseBtn").on("click", () => {
    ToggleModal($("#portfolioContent"), $("#techIconModal"), closeModal);
    $(".tech-icon").removeClass("hide");
    $(".expression").removeClass("anim-icon-transitions");
    $(".expression").removeClass("hide-anim-icons");
    $(".tech-highlight").addClass("hide");
    $(".expression").removeClass("clear-expression-divs");
  });
});
