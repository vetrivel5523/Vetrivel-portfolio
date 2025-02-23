
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


