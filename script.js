const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(link => {
        link.addEventListener("click", function() {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
