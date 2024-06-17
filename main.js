// JavaScript for menu toggle and scroll behavior
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
});

// Smooth scrolling
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for FAQ accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqBoxes = document.querySelectorAll('.faq-box');

    faqBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Remove active class from all other faq boxes
            faqBoxes.forEach(b => {
                if (b !== this) {
                    b.classList.remove('active');
                }
            });

            // Toggle the active class for the clicked faq box
            this.classList.toggle('active');
        });
    });
});

// Verify application function
function verifyApplication() {
    const appNumber = document.getElementById('application-number').value;
    if(appNumber) {
        alert(`Verification status for application number ${appNumber}: Verified`);
    } else {
        alert('Please enter an application number.');
    }
}
