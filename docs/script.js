console.log("Script Loaded!");

// Wait until the document is fully loaded.
document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons with the class "toggle-btn"
  const buttons = document.querySelectorAll(".toggle-btn");
  
  // Loop over every button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hide all sections by selecting them via the common class.
      const sections = document.querySelectorAll(".toggle-section");
      sections.forEach((section) => {
        section.style.display = "none";
      });
      
      // Retrieve the target section's ID from the button's data attribute.
      const targetSectionId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
      
      // Hide the background image.
      const bgImg = document.getElementById("bg-img");
      if (bgImg) {
        bgImg.style.display = "none";
      }
    });
  });
});
