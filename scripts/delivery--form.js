(function () {
    function SWAP() {
        var left = $("#comment--mobile > *");
        var right = $("#comment--desktop > *");
        $("#comment--mobile").append(right);
        $("#comment--desktop").append(left);
    }

    if ($("body").width() <= 768 && $("#comment--mobile").html().trim() == "") {
        SWAP();
    } else if ($("body").width() > 768 && $("#comment--desktop").html().trim() == "") {
        SWAP();
    }


    const myForm = $("#form")[0];

    $(myForm).submit(event => {
        event.preventDefault();
        let form = $(event.currentTarget);
        let formName = form.find("[name='name']");
        let formPhone = form.find("[name='phone']");
        let formTo = form.find("[name='email']");
        let formComment = form.find("[name='comment']");

        function validateForm() {
            let valid = true;
            $([formName, formPhone, formTo, formComment]).each((i, elem) => {
                if (!validateField(elem) || elem.val().trim() == "") {
                    elem.addClass("input--error");
                    valid = false;
                } else {
                    elem.removeClass("input--error");
                }
            });
            return valid;
        }

        function validateField(field) {
            // console.log(field[0].validationMessage);
            return field[0].checkValidity();
        }

        if (validateForm(myForm)) {
            $.ajax({
                url: "https://webdev-api.loftschool.com/sendmail",
                method: "post",
                data: {
                    name: formName[0].value,
                    phone: formPhone[0].value,
                    to: formTo[0].value,
                    comment: formComment[0].value,
                },
                success: answer => {
                    openModal(answer.message, "#2E4E3F");
                },
                error: answer => {
                    openModal(answer.responseJSON.message, "#9D3F3F");
                }
            });

            function openModal(mess, color) {
                $(".modal--container")[0].innerHTML = $("#modal--template")[0].innerHTML;
                $("body").css("overflowY", "hidden");

                let modal = $(".modal");
                let butClose = modal.find("button");

                $(modal).find("button").css("background-color", color);
                $(modal).find("span").text(mess);

                $(butClose).on("click", event => {
                    event.preventDefault();
                    $(".modal--container")[0].innerHTML = "";
                    $("body").css("overflowY", "visible");
                });

                $(modal).on("click", event => {
                    if (event.target == $(modal)[0]) {
                        $(butClose).click();
                    }
                });
            }
        }
    });


    $(window).resize(() => {
        if ($("body").width() <= 768 && $("#comment--mobile").html().trim() == "") {
            SWAP();
        } else if ($("body").width() > 768 && $("#comment--desktop").html().trim() == "") {
            SWAP();
        }
    });
})();