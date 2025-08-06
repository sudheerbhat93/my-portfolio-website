document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sidebar button");
  const sections = document.querySelectorAll(".section");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Hide all sections
      sections.forEach(sec => {
        sec.classList.remove("active");
        sec.style.display = "none";
      });

      // Show the selected section with animation
      const selectedSection = sections[index];
      selectedSection.style.display = "block";
      // Force reflow to restart animation
      void selectedSection.offsetWidth;
      selectedSection.classList.add("active");
    });
  });

  // Optional: Automatically show the first section on load
  buttons[0].classList.add("active");
  sections[0].style.display = "block";
  sections[0].classList.add("active");
});
