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

  function iconMouseOver(event) {
    $(event.target).addClass("tech-icon-pop");
    if ($(event.target).parent().hasClass("tech-icon")) {
      $(event.target).parent().addClass("tech-icon-pop");
    }
  }

  function iconMouseOut(event) {
    $(event.target).removeClass("tech-icon-pop");
    if ($(event.target).parent().hasClass("tech-icon")) {
      $(event.target).parent().removeClass("tech-icon-pop");
    }
  }

  $(".tech-icon").on("mouseover", iconMouseOver);
  $(".social-tech-icon").on("mouseover", iconMouseOver);
  $(".tech-icon").on("mouseout", iconMouseOut);
  $(".social-tech-icon").on("mouseout", iconMouseOut);

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


  // slideshow
  let currentPage = 1;
  function createSlideShow(slideShowClass) {
    const lastPage = $(`.${slideShowClass}`).length;

    $("#slideshowLeftBtn").on("click", ()=> {
      if (currentPage > 1) {
        $(`#slideShow${currentPage}`).addClass("slideshow-shrink");
        currentPage--;
        $(`#slideShow${currentPage}`).removeClass("slideshow-shrink");
      }

    });
    $("#slideshowRightBtn").on("click", ()=> {
      if (currentPage < lastPage) {
        $(`#slideShow${currentPage}`).addClass("slideshow-shrink");
        currentPage++;
        $(`#slideShow${currentPage}`).removeClass("slideshow-shrink");
      }
    });
  }

  createSlideShow("proj-wrap");
  $(".slideshow-btn").on("click", ()=> {
    $("#projTitle").html(`Project (${currentPage} of 3)`);
  });
});
