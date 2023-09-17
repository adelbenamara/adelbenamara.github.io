// Toggle the navigation menu for mobile devices
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Toggle theme in localStorage to persist user choice
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);

    // Toggle the stylesheet link
    const themeStylesheet = document.getElementById("theme-stylesheet");
    if (isDarkMode) {
        themeStylesheet.href = "dark-theme.css";
    } else {
        themeStylesheet.href = "styles.css";
    }
}

// Check if user has a preference for dark mode in localStorage
const prefersDarkMode = localStorage.getItem("dark-mode");
if (prefersDarkMode === "true") {
    toggleDarkMode();
}
