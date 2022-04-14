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

// start setting form js

// selecting required element

const add_tag = document.querySelector('.add_tag');
const form = document.querySelector('.form');
const sumbit = document.querySelector('.sumbit');
const input = document.querySelector('.input');
const tag = document.querySelector('.tag');
const text = tag.textContent;

// on clicking add-tag button

add_tag.addEventListener('click', () => {
    form.classList.toggle('toggled');

});

// on submitting value of tag

sumbit.addEventListener('click', () => {

    const added_tag = input.value;
    tag.innerHTML = text + "|" + added_tag;


});
// end setting form js