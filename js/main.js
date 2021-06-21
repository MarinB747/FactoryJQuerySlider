jQuery(function ($) {
  $("#prev").on("click", function () {
    $(".slider__img:first-child")
      .animate({ marginRight: +this.width }, function () {
        $(this).hide().appendTo($(this).parent()).css({ marginRight: 5 });
      })
      .show("normal");
  });
  $("#prev").on("click", function () {
    $(this).attr("class", "arrow__btn--left--active");
    $("#next").attr("class", "arrow__btn--right--inactive");
  });
  $("#next").on("click", function () {
    $(".slider__img:last-child")
      .hide("normal")
      .animate({ marginLeft: +this.width }, function () {
        $(this).prependTo($(this).parent()).show("fast").css({ marginLeft: 5 });
      });
  });
  $("#next").on("click", function () {
    $(this).attr("class", "arrow__btn--right--active");
    $("#prev").attr("class", "arrow__btn--left--inactive");
  });
});
