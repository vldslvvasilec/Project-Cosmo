const singBtn = document.getElementById("button-sing");
const singMenu = document.getElementById("window-sing");
const singEnter = document.getElementById("sing2");

const toggleSing = function () {
    singMenu.classList.toggle("show1");
};

singBtn.addEventListener("click", function (e1) {
    e1.stopPropagation();
    toggleSing();
});

// document.documentElement.addEventListener("click", function () {
//     if (singMenu.classList.contains("show1")) {
//         toggleSing();
//     }
// });

// const dropdawnBtn = document.getElementById("btn");
// const dropdawnMenu = document.getElementById("dropdown");
// const toggleArrow = document.getElementById("arrow");

// const toggleDropdown = function () {
//     dropdawnMenu.classList.toggle("show");
//     toggleArrow.classList.toggle("arrow");
// };

// dropdawnBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleDropdown();
// });

// document.documentElement.addEventListener("click", function () {
//     if (dropdawnMenu.classList.contains("show")) {
//         toggleDropdown();
//     }
// });
