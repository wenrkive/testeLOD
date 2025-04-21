document.addEventListener("DOMContentLoaded", function() {
    const featureBoxes = document.querySelectorAll(".feature-box");
    
    featureBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.background = "#ffcc29";
            box.style.transform = "scale(1.05)";
            box.style.transition = "all 0.3s ease-in-out";
        });
        box.addEventListener("mouseout", () => {
            box.style.background = "#f39c12";
            box.style.transform = "scale(1)";
        });
    });

    document.querySelector(".lucky-spin").addEventListener("click", () => {
        alert("Lucky Spin Activated!");
    });
});

