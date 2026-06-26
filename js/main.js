document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission
      
      // Basic validation is handled by HTML5 (required attributes)
      // Here we simulate a successful submission
      
      // Disable button
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        contactForm.reset(); // Clear inputs
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        formMessage.classList.add('success');
        formMessage.textContent = 'Message Sent Successfully! We will get back to you shortly.';
        
        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.classList.remove('success');
        }, 5000);
      }, 1000);
    });
  }
});
