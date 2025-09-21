$(document).ready(function () {

    var lightMode = true;

    $(document).on("click", "#btnMode", function () {

        if (lightMode) {
            $(this).html("🌝 Light Mode");
            $("body").removeClass("light")
            $("body").addClass("dark")
        } else {
            $(this).html("🌚 Dark Mode");
            $("body").addClass("light");
            $("body").removeClass("dark");
        }

        lightMode=!lightMode;

    })
})