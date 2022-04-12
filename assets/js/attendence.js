console.log("hello world");

const x = document.querySelector('#attendence');
const y = document.querySelector('#Leaves');
const z = document.querySelector('#working');
const a = document.querySelector('.btn');

const dx = document.querySelector('#display_attendence');
const dy = document.querySelector('#display_leaves');
const dz = document.querySelector('#display_days');
const dp = document.querySelector('#display_percent');



a.addEventListener('click', function () {
    console.log("click");
    var attendencex = x.value;
    var leaves = y.value;
    var working = z.value;


    var int_attendencex = parseInt(attendencex);
    var int_leaves = parseInt(leaves);
    var int_working = parseInt(working);


    dx.textContent = int_attendencex;
    dy.textContent = int_leaves;
    dz.textContent = int_working;

    console.log(int_attendencex + int_leaves);
    console.log(int_working);
    if (int_attendencex + int_leaves > int_working) {
        dp.textContent = "wrong input given";
    }
    else {
        if (Math.round((int_attendencex / int_working) * 100) < 75) {

            dp.textContent = Math.round(((int_attendencex / int_working) * 100)) + "%!! Its low please make it up";
        }
        else {
            dp.textContent = Math.round(((int_attendencex / int_working) * 100)) + "%";

        }
    }
});
