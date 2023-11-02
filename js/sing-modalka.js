const singBtn = document.getElementById("button-sing");
const dropdawnMenu = document.getElementById("window-sing");

const toggleDropdown = function () {
    dropdawnMenu.classList.toggle("show");
};

dropdawnBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
    if (dropdawnMenu.classList.contains("show")) {
        toggleDropdown();
    }
});
