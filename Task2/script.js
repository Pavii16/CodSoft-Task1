// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out, Pavithra will contact you soon!');
    document.getElementById('contact-form').reset();
});
