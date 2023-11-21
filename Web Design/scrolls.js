document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".page-section");

    sections.forEach((section) => {
        section.addEventListener("click", function () {
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
