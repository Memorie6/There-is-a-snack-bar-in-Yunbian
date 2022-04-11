window.addEventListener("load", function () {
    const left = document.querySelector(".nav-left");
    const offbtn = document.querySelector(".off-btn");
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", function () {
        left.style.display = "none";
        offbtn.style.display = "block";
    });
    offbtn.addEventListener("click", function () {
        left.style.display = "block";
        offbtn.style.display = "none";
    });
});
