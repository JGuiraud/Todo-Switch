$(document).ready(function () {
    console.log("wesh");
    // alert("bienvenue!")

    $("#button").click(function () {
        var task = $("#newTask").val();
        console.log(task)
        $("#todoUl").append("<li><input class='checkbox' type='checkbox'>" + task + "</li>");
    })

    /*!!!!!!!!!!!!!!!! marche pas encore !!!!!!!!!!!!!!!!!!!!! */
    $(":checkbox").change(function () {

        alert("check")
        console.log("checked")
        //Do stuff

    });

});