jQuery(function (t) {
  t("#prev").on("click", function () {
    t("#prev").attr({ disabled: !0, class: "arrow__btn--left--inactive" }),
      t(".slider__img:first-child").hide("normal", function () {
        t(this)
          .appendTo(t(this).parent())
          .show("normal")
          .css({ marginRight: "10px" });
      });

    setTimeout(() => {
      t("#prev").attr({ disabled: !1, class: "arrow__btn--left--active" });
    }, 800);
  }),
    t("#next").on("click", function () {
      t("#next").attr({ disabled: !0, class: "arrow__btn--right--inactive" }),
        t(".slider__img:last-child").hide("normal", function () {
          t(this)
            .prependTo(t(this).parent())
            .show("normal")
            .css({ marginLeft: "10px" });
        });
      setTimeout(() => {
        t("#next").attr({ disabled: !1, class: "arrow__btn--right--active" });
      }, 400);
    });
});
