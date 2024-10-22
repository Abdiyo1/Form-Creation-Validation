document.addEventListener('DOMContentLoaded', function() {
  // Form and Feedback Division Selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Form Submission Event Listener
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting

      // Input Retrieval and Trimming
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Initialize Validation Variables
      let isValid = true;
      let messages = [];

      // Username Validation
      if (username.length < 3) {
          isValid = false;
          messages.push("Username must be at least 3 characters long.");
      }

      // Email Validation
      if (!email.includes('@') || !email.includes('.')) {
          isValid = false;
          messages.push("Please enter a valid email address.");
      }

      // Password Validation
      if (password.length < 8) {
          isValid = false;
          messages.push("Password must be at least 8 characters long.");
      }

      // Display Feedback
      feedbackDiv.style.display = 'block'; // Show the feedback div

      if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745"; // Success green color
      } else {
          feedbackDiv.innerHTML = messages.join('<br>'); // Join error messages with <br>
          feedbackDiv.style.color = "#dc3545"; // Error red color
      }
  });
});
