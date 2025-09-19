function openForm(cause) {
  const form = document.getElementById("donationForm");
  form.style.display = "block";
  document.getElementById("donationFormElement").reset();
  document.getElementById("cause").value = cause;
  document.getElementById("successMessage").style.display = "none";
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function goBack() {
  window.location.href = "pr.html"; // Replace with your home page
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("donationFormElement")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const amount = parseFloat(document.getElementById("amount").value);
      if (amount < 10) {
        alert("Minimum donation amount is ₹10.");
        return;
      }

      // Show thank you message
      const successMsg = document.getElementById("successMessage");
      successMsg.textContent = "Thank you for your generous donation!";
      successMsg.style.display = "block";

      // Optional: Reset and hide form
      setTimeout(() => {
        document.getElementById("donationFormElement").reset();
        document.getElementById("donationForm").style.display = "none";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2500);
    });
});
function goToHome() {
  window.location.href = "/"; // 🔁 Change this to your actual homepage file name
}
