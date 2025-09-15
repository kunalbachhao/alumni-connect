// Change Email
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const newEmail = document.getElementById("newEmail").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(newEmail)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Email updated successfully! (simulation)");
  this.reset();
});

// Change Password
document.getElementById("passwordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const current = document.getElementById("currentPassword").value.trim();
  const newPass = document.getElementById("newPassword").value.trim();
  const confirmPass = document.getElementById("confirmPassword").value.trim();

  if (newPass.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (newPass !== confirmPass) {
    alert("New passwords do not match.");
    return;
  }

  alert("Password updated successfully! (simulation)");
  this.reset();
});

// Save About & Bio
document.getElementById("bioForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Profile information saved successfully! (simulation)");
  this.reset();
});

// Delete Account
document.getElementById("deleteAccount").addEventListener("click", function () {
  if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
    alert("Account deleted. (simulation)");
    window.location.href = "../signup/index.html";
  }
});

// Logout
document.getElementById("logout").addEventListener("click", function () {
  alert("You have been logged out. (simulation)");
  window.location.href = "../login/index.html";
});