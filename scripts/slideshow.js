(function () {
    let cards = $(".reviews__card").children();
    let icons = $(".reviews__list").children();

    icons.each((i, ico) => {
        $(ico).on("click", event => {
            event.preventDefault();

            // $(".visible").removeClass("visible");
            // $(cards[i]).addClass("visible");

            let data = $(ico).attr("data-circle");
            $(cards).filter((i, item) => {
                if ($(item).attr("data-card") == data) {
                    $(".visible").removeClass("visible");
                    $(item).addClass("visible");
                }
            });

            $(ico).addClass("reviews__active").siblings().removeClass("reviews__active");
        });
    });
})();