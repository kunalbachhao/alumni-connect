// --------------------------
// 🔍 Search with loader
// --------------------------
function handleSearch(e) {
  e.preventDefault();
  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) {
    showToast("⚠️ Please enter something to search.", "warning");
    return;
  }

  input.disabled = true;
  showToast("🔍 Searching...");

  setTimeout(() => {
    input.disabled = false;
    input.value = "";
    showToast(`✅ Found results for: "${query}"`, "success");
  }, 1000);
}

// --------------------------
// ✅ Toast Notification
// --------------------------
function showToast(message, type = "success") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "fixed top-5 right-5 z-[9999] bg-green-500 text-white px-4 py-2 rounded shadow-md transition-all transform opacity-0";
    document.body.appendChild(toast);
  }

  // Color based on type
  toast.classList.remove("bg-green-500", "bg-red-500", "bg-yellow-500");
  if (type === "success") toast.classList.add("bg-green-500");
  if (type === "error") toast.classList.add("bg-red-500");
  if (type === "warning") toast.classList.add("bg-yellow-500");

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
  }, 3000);
}

// --------------------------
// 🔘 Button Ripple Effect
// --------------------------
document.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    const button = e.target;
    const ripple = document.createElement("span");

    ripple.className = "absolute bg-white opacity-30 rounded-full animate-ping pointer-events-none";
    ripple.style.width = ripple.style.height = "60px";
    ripple.style.left = `${e.offsetX - 30}px`;
    ripple.style.top = `${e.offsetY - 30}px`;

    button.style.position = "relative";
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 500);
  }
});

// --------------------------
// 🔔 Mark Notifications Read
// --------------------------
const notifBtn = document.getElementById("markAllRead");
if (notifBtn) {
  notifBtn.addEventListener("click", () => {
    document.querySelectorAll(".notif-item").forEach(el => el.classList.add("hidden"));
    showToast("🔕 All notifications cleared");
  });
}

// --------------------------
// 🤝 Connect Button Logic
// --------------------------
document.querySelectorAll(".connect-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "Pending";
    btn.disabled = true;
    btn.classList.add("bg-gray-300", "cursor-not-allowed");
    showToast("🤝 Connection Request Sent");
  });
});

// --------------------------
// 🧭 Sidebar Active Link Highlight
// --------------------------
document.querySelectorAll("aside a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("bg-white/10", "font-semibold");
  }
});

// --------------------------
// 📱 Toggle Sidebar (optional)
// --------------------------
const sidebarToggleBtn = document.getElementById("toggleSidebar");
if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", () => {
    document.querySelector("aside.sidebar").classList.toggle("hidden");
  });
}