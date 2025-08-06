const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-links a");

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Auto-close mobile menu on nav link click
navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

const typingText = document.getElementById("typingText");
const titles = [
    "Creative UI/UX Designer",
    "Front-end Web Developer",
    "Data Analyst with Python & Excel",
    "Open to UK Job Opportunities 🇬🇧"
];

let index = 0;
let charIndex = 0;
let currentTitle = "";
let isDeleting = false;

function typeEffect() {
    if (index >= titles.length) index = 0;
    currentTitle = titles[index];

    let displayed = isDeleting
        ? currentTitle.substring(0, charIndex--)
        : currentTitle.substring(0, charIndex++);

    typingText.textContent = displayed;

    if (!isDeleting && charIndex === currentTitle.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
        setTimeout(typeEffect, 300);
    } else {
        setTimeout(typeEffect, isDeleting ? 40 : 80);
    }
}

typeEffect();

function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}