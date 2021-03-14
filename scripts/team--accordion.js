(function () {
    $(".accordion__active").each((i, firstActive) => {
        let firstWrapper = $(firstActive).find(".accordion__wrapper");
        let firstInvisible = $(firstActive).find(".team__mission");
        firstWrapper.height(String(firstInvisible.height()) + "px");
    });

    $("a.accordion__button").each((i, button) => {
        $(button).on("click", event => {
            event.preventDefault();

            let clickYes = $(button).closest(".team__accordion");
            let wrapperYes = clickYes.find(".accordion__wrapper");
            let invisibleYes = wrapperYes.find(".team__mission");

            if (clickYes.hasClass("accordion__active")) {
                clickYes.removeClass("accordion__active");
                wrapperYes.height("0px");
            } else {
                $(".accordion__active").each((i, clickNo) => {
                    $(clickNo).removeClass("accordion__active");
                    let wrapperNo = $(clickNo).find(".accordion__wrapper");
                    wrapperNo.height("0px");
                });
                clickYes.addClass("accordion__active");
                wrapperYes.height(String(invisibleYes.height()) + "px");
            }
        });
    });

    $(window).resize(() => {
        $(".accordion__active").each((i, firstActive) => {
            let firstWrapper = $(firstActive).find(".accordion__wrapper");
            let firstInvisible = $(firstActive).find(".team__mission");
            firstWrapper.height(String(firstInvisible.height()) + "px");
        });
    });
})();