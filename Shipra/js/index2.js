const toggle = document.getElementById("darkToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Signup successful!");
});
