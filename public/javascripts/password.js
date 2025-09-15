// Password reset form
document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const messageEl = document.getElementById("message");

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messageEl.style.color = "red";
    messageEl.textContent = "Please enter a valid email address.";
    return;
  }

  // Simulate reset link sending
  messageEl.style.color = "green";
  messageEl.textContent = `A password reset link has been sent to ${email} (simulation).`;

  this.reset();
});