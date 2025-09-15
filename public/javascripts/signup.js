// Signup form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

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

  alert("Sign-Up Successful! (This is a placeholder)");
  this.reset();
});

// === Terms & Conditions Toggle ===
const signupSection = document.getElementById("signupSection");
const termsSection = document.getElementById("termsSection");
const readTerms = document.getElementById("readTerms");
const acceptTerms = document.getElementById("acceptTerms");

// Show Terms Section
readTerms.addEventListener("click", function (e) {
  e.preventDefault();
  signupSection.style.display = "none";
  termsSection.style.display = "block";
});

// Accept Terms and return to form
acceptTerms.addEventListener("click", function () {
  termsSection.style.display = "none";
  signupSection.style.display = "block";
  document.getElementById("terms").checked = true; // Auto-check the box
});