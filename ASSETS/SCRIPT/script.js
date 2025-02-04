// Toggle the menu for mobile view
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

// Close the menu after clicking a link (mobile only)
function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.remove('active');
    burger.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.getElementById('hero-title');
    setTimeout(function () {
        heroTitle.classList.add('start-typewriter');
    }, 500);
});

document.querySelectorAll('.progress-bar').forEach(bar => {
    let progress = bar.getAttribute('data-progress');
    bar.querySelector('::after').style.width = progress + '%';
});

// Show the button when the user scrolls down 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.back-to-top').style.display = 'block';
    } else {
        document.querySelector('.back-to-top').style.display = 'none';
    }
};

