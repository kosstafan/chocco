(function () {
    let screenW = $("body").width();
    let itemW = $(".accord__name").width();
    const firstActive = $(".accordion__open");
    const firstWrapper = $(".accordion__open").find(".accord__value");


    function OPEN() {
        if ($("body").width() <= 768) {
            if ($("body").width() <= 480) {
                return String(screenW - itemW) + "px";
            } else {
                return String(screenW - itemW * 3) + "px";
            }
        } else {
            let title = $(".menu__title").outerWidth(true);
            if (screenW - itemW * 3 - title > 524) {
                return "524px";
            } else {
                return String(screenW - itemW * 3 - title) + "px";
            }
        }
    }


    function TEXT() {
        let textAll = $(".accord__value>p");
        let minus = parseInt(textAll.css("margin-left"), 10) + parseInt(textAll.css("margin-right"), 10);
        textAll.css("min-width", String(parseInt(OPEN(), 10) - minus) + "px");
    }

    TEXT();


    if ($("body").width() <= 768) {
        firstActive.removeClass("accordion__open");
        if ($(".menu__accordion").find(".accordion__open").length == 0) {
            $(".menu>.container").find(".menu__title").fadeIn(300);
        } else {
            $(".menu>.container").find(".menu__title").fadeOut(0);
        }
    } else {
        firstWrapper.width(OPEN());
        $(".menu>.container").find(".menu__title").fadeIn(300);
    }



    $("a.accord__name").each((i, button) => {
        $(button).on("click", event => {
            event.preventDefault();

            let clickYes = $(button).closest(".menu__accord");
            let wrapperYes = clickYes.find(".accord__value");

            if (clickYes.hasClass("accordion__open")) {
                clickYes.removeClass("accordion__open");
                wrapperYes.width("0px");
            } else {
                $(".accordion__open").each((i, clickNo) => {
                    $(clickNo).removeClass("accordion__open");
                    let wrapperNo = $(clickNo).find(".accord__value");
                    wrapperNo.width("0px");
                });
                clickYes.addClass("accordion__open");
                wrapperYes.width(OPEN());

                TEXT();
            }

            if ($("body").width() <= 768) {
                if ($(".menu__accordion").find(".accordion__open").length == 0) {
                    $(".menu>.container").find(".menu__title").fadeIn(300);
                } else {
                    $(".menu>.container").find(".menu__title").fadeOut(200);
                }
            }
        });
    });



    $(window).resize(() => {
        screenW = $("body").width();
        itemW = $(".accord__name").width();

        TEXT();

        if ($("body").width() <= 768) {
            if ($(".menu__accordion").find(".accordion__open").length == 0) {
                $(".menu>.container").find(".menu__title").fadeIn(300);
            } else {
                $(".menu>.container").find(".menu__title").fadeOut(0);
            }
        } else {
            $(".menu>.container").find(".menu__title").fadeIn(300);
        }

        $(".accordion__open .accord__value").width(OPEN());
    });
})();