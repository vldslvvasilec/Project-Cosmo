// const dropdownBtn = document.getElementById("btn");
// const dropdownMenu = document.getElementById("Menu");
// const toggleArrow = document.getElementById("btn");

// const toggleDropdown = function () {
//     dropdownMenu.classList.toggle("show");
//     toggleArrow.classList.toggle("arrow");
// };

// dropdownBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleDropdown();
// });

// document.documentElement.addEventListener("click", function () {
//     if (dropdownMenu.classList.contains("show")) {
//         toggleDropdown();
//     }
// });
function myFunction() {
    document.getElementById("Menu").classList.toggle("show");

    window.onclick = function (event) {
        if (!event.taget.matches(".btn")) {
            var dropdowns = document.getElementsByClassName("Menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdawn = dropdowns[i];
                if (openDropdawn.classList.contains("show"));
                {
                    openDropdawn.classList.remove("show");
                }
            }
        }
    };
}
