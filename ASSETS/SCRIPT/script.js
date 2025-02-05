// Function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('active'); // Toggle the active class on the nav-links
    burger.classList.toggle('active');   // Toggle the active class on the burger
  }

  // Function to close the menu (in case of clicking on a nav link)
  function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.remove('active'); // Remove active class when a link is clicked
    burger.classList.remove('active');   // Remove active class from burger
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


