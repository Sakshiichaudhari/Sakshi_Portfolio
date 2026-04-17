/* Dark Mode Toggle */
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}

/* Smooth Scroll for links (if you add navigation later) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
});
});

/* Simple Fade-in Animation on Load */
window.addEventListener("load", () => {
const sections = document.querySelectorAll(".section");

```
sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    setTimeout(() => {
        section.style.transition = "all 0.6s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }, index * 200);
});
```

});
