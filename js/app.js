$(document).ready(function () {

    $("#new").click(function () {
        var task = $("#newTask").val();
        if (task != 0) {
            $("#todoUl").append("<li><input id='notchecked' type='checkbox'>" + task + "</li>");
            $('#todoUl').on("change", ":checkbox", function () {
                if (this.checked) {
                    $(this).parent().addClass("lineThrough")
                    $(this).attr("id", "checked");
                } else {
                    $(this).parent().removeClass("lineThrough")
                    $(this).attr("id", "notchecked");
                }
            });
        }
    });

    $("#select").change(function () {
        if (this.value == 1) {
            $("li #checked").parent().hide();
            $("li #notchecked").parent().show()
        }
        if (this.value == 2) {
            $("li #checked").parent().show();
            $("li #notchecked").parent().hide()
        }
        if (this.value == 0) {
            $("li #checked").parent().show();
            $("li #notchecked").parent().show()
        }
    });

    $("#delete").click(function () {
        $("li #checked").parent().remove();
    });

});