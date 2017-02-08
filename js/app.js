$(document).ready(function () {

    $("#button").click(function () {
        var task = $("#newTask").val();

        $("#todoUl").append("<li><input id='notchecked' type='checkbox'>" + task + "</li>");
        $('#todoUl').on("change", ":checkbox", function () {
            if (this.checked) {
                $($(this).parent()).css("text-decoration", "line-through")
                $($(this).attr("id", "checked"));
            } else {
                $($(this).parent()).css("text-decoration", "none")
                $($(this).attr("id", "notchecked"));
            }
        });
    })


    $("#select").change(function () {
        console.log(this.value);
        if (this.value == 1) {
            console.log($("#checked").parent())
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
    })




});