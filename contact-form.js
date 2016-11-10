$(document).ready(function () {
    $("#contact-form").submit(function (e) {
        $('#error_form').css('display','none');
        $('#success_form').css('display','none');
        $(".errorForm").removeClass("errorForm");
        var send = true;
        if ($("#name").val() == "") {
            send = false;
            $("#name").addClass("errorForm");
            $('#error_form').fadeIn('fast');
        }
        if ($("#phone").val() == "") {
            send = false;
            $("#phone").addClass("errorForm");
            $('#error_form').fadeIn('fast');
        }
        if ($("#surname").val() == "") {
            send = false;
            $("#surname").addClass("errorForm");
            $('#error_form').fadeIn('fast');
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
                        $('#client_name').text(name);
                        $('#error_form').fadeOut('slow');
                        $('#success_form').fadeIn('slow');
                        $('#contact-form').trigger("reset");

                        /*$("#okay-button").html("Ваше замовлення успішно відправлено");*/
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