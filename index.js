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
  function techIconMappings() {
    $("#exp00").append($("#h00_0"));
    $("#exp00").append($("#v00_0"));
    $("#exp00").append($("#h01_0"));
    $("#exp00").append($("#v01_0"));
    $("#exp00").append($("#h02_0"));
    $("#exp00").append($("#v02_0"));

    $("#exp10").append($("#h00_1"));
    $("#exp10").append($("#v10_0"));
    $("#exp10").append($("#h01_1"));
    $("#exp10").append($("#v11_0"));
    $("#exp10").append($("#h02_1"));
    $("#exp10").append($("#v12_0"));

    $("#exp01").append($("#h10_0"));
    $("#exp01").append($("#v00_1"));
    $("#exp01").append($("#h11_0"));
    $("#exp01").append($("#v01_1"));
    $("#exp01").append($("#h12_0"));
    $("#exp01").append($("#v02_1"));

    $("#exp11").append($("#h10_1"));
    $("#exp11").append($("#v10_1"));
    $("#exp11").append($("#h11_1"));
    $("#exp11").append($("#v11_1"));
    $("#exp11").append($("#h12_1"));
    $("#exp11").append($("#v12_1"));
  }
  function reverseTechIconMappings() {

    $("#h00").append($("#h00_0"));
    $("#h00").append($("#h00_1"));
    $("#h01").append($("#h01_0"));
    $("#h01").append($("#h01_1"));
    $("#h10").append($("#h10_0"));
    $("#h10").append($("#h10_1"));
    $("#h11").append($("#h11_0"));
    $("#h11").append($("#h11_1"));
    $("#h02").append($("#h02_0"));
    $("#h02").append($("#h02_1"));
    $("#h12").append($("#h12_0"));
    $("#h12").append($("#h12_1"));

    $("#v00").append($("#v00_0"));
    $("#v00").append($("#v00_1"));
    $("#v01").append($("#v01_0"));
    $("#v01").append($("#v01_1"));
    $("#v10").append($("#v10_0"));
    $("#v10").append($("#v10_1"));
    $("#v11").append($("#v11_0"));
    $("#v11").append($("#v11_1"));
    $("#v02").append($("#v02_0"));
    $("#v02").append($("#v02_1"));
    $("#v12").append($("#v12_0"));
    $("#v12").append($("#v12_1"));
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

  $(".tech-icon").on("click", async (event) => {
    // hide original icons
    $(".tech-icon").addClass("hide");
    // enlarge anim icons of the type clicked to simulate the popup effect
    $(event.target).siblings().addClass("anim-tech-icon-clicked");
    // give all anim icons transition styles
    $(".anim-tech-icon").addClass("anim-tech-icon-transitions");

    ToggleModal($("#portfolioContent"), $("#techIconModal"), openModal);

    // 2 second transition time
    await delay(500);
    // place everything post-transition
    $(".expression").addClass("test-transitions");
  });

  $("#techIconCloseBtn").on("click", () => {
    ToggleModal($("#portfolioContent"), $("#techIconModal"), closeModal);
    $(".tech-icon").removeClass("hide");

    $(".expression").removeClass("test-transitions");

    $(".anim-tech-icon").removeClass("anim-tech-icon-clicked");
    $(".anim-tech-icon").removeClass("anim-tech-icon-transitions");
  });
});
