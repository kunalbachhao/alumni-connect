// ✅ Highlight current page in navbar
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// ✅ Alumni Search Function
const searchInput = document.getElementById("searchInput");
const alumniList = document.getElementById("alumniList");
const alumniCards = alumniList.getElementsByClassName("alumni-card");

searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();

    Array.from(alumniCards).forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();
        const details = Array.from(card.querySelectorAll("p"))
            .map(p => p.innerText.toLowerCase())
            .join(" ");

        if (name.includes(filter) || details.includes(filter)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});
