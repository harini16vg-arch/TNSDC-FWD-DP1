// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  const toggle = document.querySelector(".theme-toggle");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! (Not really, this is a demo.)");
});