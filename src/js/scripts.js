// Function to toggle the mobile menu visibility
function toggleMobileMenu() {
    const navList = document.querySelector('.nav-list');
    if (navList) {
        navList.classList.toggle('active');
    }
}

// Event listener for resizing the window (optional)
window.addEventListener('resize', function() {
    // Add any logic you may want to run on window resize
});

// Initialize the mobile menu functionality
const menuButton = document.querySelector('.menu-btn');
if (menuButton) {
    menuButton.addEventListener('click', toggleMobileMenu);
}

const color = getComputedStyle(document.documentElement).getPropertyValue('--water-font-color');
document.getElementById('testimonial').style.backgroundColor = color + '50'; // Append 80 for 50% opacity in hex
