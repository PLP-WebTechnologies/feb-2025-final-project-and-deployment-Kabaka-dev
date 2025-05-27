// Dark Mode Toggle
document.getElementById('toggle-mode')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Simple Contact Form Feedback
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-response').textContent = "Thanks for reaching out!";
  this.reset();
});
