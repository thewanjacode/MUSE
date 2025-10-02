document.addEventListener("DOMContentLoaded", () => {
  // Chat box toggle
  const chatToggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const chatClose = document.getElementById("chat-close");

  if (chatToggle && chatBox && chatClose) {
    chatToggle.addEventListener("click", () => {
      chatBox.style.display = "flex";
      chatToggle.style.display = "none";
    });

    chatClose.addEventListener("click", () => {
      chatBox.style.display = "none";
      chatToggle.style.display = "block";
    });
  }

  // Hamburger menu toggle
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
