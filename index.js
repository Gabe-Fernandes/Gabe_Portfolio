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

  async function matrixAnimation() {
    $(".tech-icon").addClass("hide");
    ToggleModal($("#portfolioContent"), $("#techIconModal"), openModal);
    await delay(100);
    $(".expression").addClass("anim-icon-transitions");
  }

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

  $(".tech-icon").on("click", (event) => {
    ToggleModal($("#portfolioContent"), $("#techIconModal"), openModal);
    $(".expression").addClass("hide-anim-icons");
    $(".expression").addClass("clear-expression-divs");
    const icon = $(event.target).attr("data-icon");
    $(`#${icon}0`).removeClass("hide");
    $(`#${icon}1`).removeClass("hide");
    $(`#${icon}2`).removeClass("hide");
    $(`#${icon}3`).removeClass("hide");
  });

  $("#techIconCloseBtn").on("click", () => {
    ToggleModal($("#portfolioContent"), $("#techIconModal"), closeModal);
    $(".tech-icon").removeClass("hide");
    $(".expression").removeClass("anim-icon-transitions");
    $(".expression").removeClass("hide-anim-icons");
    $(".tech-highlight").addClass("hide");
    $(".expression").removeClass("clear-expression-divs");
  });

  $(".multiplication-wrap").on("mouseover", ()=> {
    $(".multiplication-cross").addClass("multiplication-large");
  });
  $(".equals-wrap").on("mouseover", ()=> {
    $(".equals-bar").addClass("equals-large");
  });
  $(".multiplication-wrap").on("mouseout", ()=> {
    $(".multiplication-cross").removeClass("multiplication-large");
  });
  $(".equals-wrap").on("mouseout", ()=> {
    $(".equals-bar").removeClass("equals-large");
  });
  $(".multiplication-wrap").on("click", matrixAnimation);
  $(".equals-wrap").on("click", matrixAnimation);

});
