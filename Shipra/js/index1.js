const toggle = document.getElementById("darkToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Handle login form (basic validation example)
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Login successful!");
});
