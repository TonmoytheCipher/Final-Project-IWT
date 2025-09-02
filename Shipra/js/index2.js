const toggle = document.getElementById("darkToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Handle signup form (basic validation example)
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Signup successful!");
});

