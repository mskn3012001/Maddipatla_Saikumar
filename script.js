// Smooth Scroll for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Accordion effect for Internship Experience
const internships = document.querySelectorAll('.accordion .internship');

internships.forEach(internship => {
    internship.addEventListener('click', function () {
        // Toggle active class for the clicked internship
        this.classList.toggle('active');
        
        // Close all other internships
        internships.forEach(otherInternship => {
            if (otherInternship !== this) {
                otherInternship.classList.remove('active');
            }
        });
    });
});
