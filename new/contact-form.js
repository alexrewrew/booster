$(document).ready(function () {
    $("#contact-form").submit(function (e) {
        $(".errorForm").removeClass("errorForm");
        var send = true;
        if ($("#name").val() == "") {
            send = false;
            $("#name").addClass("errorForm");
            $('.send_error').show('fast');
        }
        if ($("#phone").val() == "") {
            send = false;
            $("#phone").addClass("errorForm");
            $('.send_error').show('fast');
        }
        if ($("#surname").val() == "") {
            send = false;
            $("#surname").addClass("errorForm");
            $('.send_error').show('fast');
        }

        if (send) {
            var name = $("#name").val();
            var sername = $("#surname").val();
            var phone = $("#phone").val();
            var kol = $("#pm").val();

            $.ajax({
                method: "POST",
                url: "send.php",
                data: {name: name, sername: sername, phone: phone, kol: kol},
                success: function (data) {
                    if (data == "") {
                        /*window.location.href = "index.html";//edit start page of site*/
                        $("#okay-button").html("Ваше замовлення успішно відправлено");
                    }
                }
            });
        }
        e.preventDefault();
    });

    $("#name").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#email").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#message").change(function () {
        $(this).removeClass("errorForm");
    });
});