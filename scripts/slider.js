(function () {
    let contain = $("section.slider .container");
    let mySlider = $("ul.slider__list");
    let slides = $("li.slider__item");
    let leftBut = $(".arrow__left");
    let rightBut = $(".arrow__right");

    mySlider.css("width", String(contain.width()));
    slides.css("width", String(contain.width()));
    mySlider.css("height", String(contain.height()));
    slides.css("height", String(contain.height()));
    $(window).resize(() => {
        mySlider.css("width", String(contain.width()));
        slides.css("width", String(contain.width()));
        mySlider.css("height", String(contain.height()));
        slides.css("height", String(contain.height()));
    });


    slides.each((i, li) => {
        $(li).attr("id", "n" + String(i));
    });
    slides.last().attr("id", "n-1");
    const notId = slides.length - 1;



    leftBut.on("click", event => {
        event.preventDefault();

        if ($(".blank").attr("id") == "n-1") {
            $(".blank").html($("#n1").html());
        } else if ($(".blank").attr("id") == "n0") {
            let left = $("#n-1 > *");
            let right = $("#n1 > *");
            $("#n-1").append(right);
            $("#n1").append(left);
        }

        slides.each((i, li) => {
            let oldID = Number($(li).attr("id").slice(1));
            if (oldID == notId - 1) {
                $(li).attr("id", "n" + String(-1));
            } else {
                $(li).attr("id", "n" + String(oldID + 1));
            }
        });
    });


    rightBut.on("click", event => {
        event.preventDefault();

        if ($(".blank").attr("id") == "n1") {
            $(".blank").html($("#n-1").html());
        } else if ($(".blank").attr("id") == "n0") {
            let left = $("#n-1 > *");
            let right = $("#n1 > *");
            $("#n-1").append(right);
            $("#n1").append(left);
        }

        slides.each((i, li) => {
            let oldID = Number($(li).attr("id").slice(1));
            if (oldID == -1) {
                $(li).attr("id", "n" + String(oldID + notId));
            } else {
                $(li).attr("id", "n" + String(oldID - 1));
            }
        });
    });
})();