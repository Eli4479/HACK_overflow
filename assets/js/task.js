// start side-bar js
var li_items = document.querySelectorAll(".side_bar_bottom ul li");

li_items.forEach(function (li_main) {
    li_main.addEventListener("click", function () {
        li_items.forEach(function (li) {
            li.classList.remove("active");
        })
        li_main.classList.add("active");
    })
})
// end side-bar js

// start task list js

// Check Off Specific Task By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$(".list ul").on("click", "span", function (event) {
    $(this)
        .parent()
        .fadeOut(500, function () {
            $(this).remove();
        });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $(".list ul").append(
            "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
        );
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});
// end task list js