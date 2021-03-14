(function () {
    function flip() {
        if ($(window)[0].orientation == 90) {
            $(".modal--container")[0].innerHTML = $("#modal--template")[0].innerHTML;
            $("body").css("overflowY", "hidden");

            let modal = $(".modal");
            modal.find("button").text("ОШИБКА");

            $(modal).find("button").css("background-color", "#9D3F3F");
            $(modal).find("span").text("Пожалуйста, переверните устройство");
        } else {
            $(".modal--container")[0].innerHTML = "";
            $("body").css("overflowY", "visible");
        }
    }

    $(window).on("orientationchange", event => {
        flip();
    });

    if ($(window)[0].orientation == 90) {
        flip();
    }
})();