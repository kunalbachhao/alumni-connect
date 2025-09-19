document.getElementById("signupForm").addEventListener("submit", function (e) {

  const email = document.getElementById("email").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const gradYear = document.getElementById("gradYear").value;

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Student ID check
  if (studentId.length < 3) {
    alert("Student ID must be at least 3 characters.");
    return;
  }

  // Graduation year check
  if (gradYear < 1980 || gradYear > 2035) {
    alert("Please enter a valid graduation year.");
    return;
  }

  // All validations passed
  this.submit(); // <--- SUBMIT the form to backend
});
