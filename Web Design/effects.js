document.addEventListener("DOMContentLoaded", function () {
    // tes scrolling
    const sections = document.querySelectorAll(".page-section");

    sections.forEach((section) => {
        section.addEventListener("click", function () {
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    const observer = new IntersectionObserver(activateSection, { threshold: 0.5 });

    sections.forEach((section) => {
        observer.observe(section);
    });

    function activateSection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }

    // change color dari title
    const title = document.querySelector(".title");
    let colorIndex = 0;
    const colors = ["red", "blue", "green", "orange", "white"];

    title.addEventListener("click", function () {
        title.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});
