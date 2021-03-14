(function () {
    let inScroll = false;
    let display = $(".wrapper__content");
    let sectS = $("section");
    let fixList = $("ul.fixedmenu__list");
    let fixliS = $("ul.fixedmenu__list>li");
    sectS.first().addClass("section__active");
    fixList.first().addClass("theme--white");
    fixliS.first().addClass("fixed__active");


    let MOVE = sectNum => {
        if (inScroll == false) {
            inScroll = true;

            let menuTheme = sectS.eq(sectNum).attr("data-fixli");
            fixliS.eq(sectNum).addClass("fixed__active").siblings().removeClass("fixed__active");
            if (menuTheme == "black" && $(fixList[0]).hasClass("theme--white")) {
                $(fixList[0]).toggleClass("theme--white theme--black");
            } else if (menuTheme == "white" && $(fixList[0]).hasClass("theme--black")) {
                $(fixList[0]).toggleClass("theme--black theme--white");
            }

            let posit = sectNum * -100;
            display.css("transform", "translateY(" + String(posit) + "%)");
            sectS.eq(sectNum).addClass("section__active").siblings().removeClass("section__active");

            setTimeout(() => {
                inScroll = false;
            }, 1000);
        }
    }


    let sectView = direct => {
        let sectNOW = sectS.filter(".section__active");
        let sectNEXT = sectNOW.next();
        let sectPREV = sectNOW.prev();

        if (direct == "next" && sectNEXT.length) {
            MOVE(sectNEXT.index());
        }
        if (direct == "prev" && sectPREV.length) {
            MOVE(sectPREV.index());
        }
    }


    $("[data-link]").click(event => {
        event.preventDefault();
        let click = $(event.currentTarget);
        let clickID = click.attr("data-link");
        let sectMOVE = $(`[data-id=${clickID}]`);

        MOVE(sectMOVE.index());
    });


    $(".wrapper").on("touchmove", event => event.preventDefault());


    $(window).on("wheel", event => {
        let deltaY = event.originalEvent.deltaY;

        if (deltaY > 0) sectView("next");
        if (deltaY < 0) sectView("prev");
    });


    $(window).on("keydown", event => {
        let tag = event.target.tagName.toLowerCase();

        if (tag != "input" && tag != "textarea") {
            switch (event.keyCode) {
                case 40:
                    sectView("next");
                    break;

                case 38:
                    sectView("prev");
                    break;
            }
        }
    });


    // https://github.com/hgoebl/mobile-detect.js
    let md = new MobileDetect(window.navigator.userAgent);
    let isMobile = md.mobile();

    // https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
    if (isMobile) {
        $("body").swipe({
            swipe: function (
                event,
                direction,
            ) {
                if (direction == "up") sectView("next");
                if (direction == "down") sectView("prev");
            },
        });
    }
})();