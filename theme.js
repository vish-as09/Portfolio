function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    document.querySelectorAll(".Mode img, .theme-toggle img").forEach((icon) => {
        const isDark = theme === "dark";
        icon.src = isDark ? "icons8-sun-100.png" : "icons8-night-48.png";
        icon.alt = isDark ? "Switch to light mode" : "Switch to dark mode";
        icon.title = icon.alt;
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", function () {
    applyTheme(localStorage.getItem("theme") || "light");

    document.querySelectorAll(".Mode, .theme-toggle").forEach((button) => {
        button.addEventListener("click", toggleTheme);
        button.setAttribute("role", "button");
        button.setAttribute("tabindex", "0");
        button.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleTheme();
            }
        });
    });
});
