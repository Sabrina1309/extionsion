const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
  const icon = document.getElementById("theme-icon");
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  if (icon.classList.contains("ri-sun-line")) {
    icon.classList.replace("ri-sun-line", "ri-moon-line");
  } else {
    icon.classList.replace("ri-moon-line", "ri-sun-line");
  }
});
