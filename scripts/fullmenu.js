(function () {
    let body = $("body");
    let menu = $(".fullmenu");
    let openBut = $(".fullmenu__open");
    let closeBut = $(".fullmenu__close");

    openBut.on("click", event => {
        event.preventDefault();
        body.css("overflowY", "hidden");
        menu.fadeIn(300);
    });

    menu.find("a").each((i, links) => {
        $(links).on("click", event => {
            body.css("overflowY", "visible");
            menu.fadeOut(200);
        });
    });

    closeBut.on("click", event => {
        event.preventDefault();
        body.css("overflowY", "visible");
        menu.fadeOut(200);

    });

    $(window).resize(() => {
        body.css("overflowY", "visible");
        menu.fadeOut(0);
    });
})();