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

// Style Google Translate dropdown once it loads
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const googleDropdown = document.querySelector("#google_translate_element select");
    if (googleDropdown) {
      googleDropdown.style.padding = "6px 10px";
      googleDropdown.style.borderRadius = "6px";
      googleDropdown.style.border = "1px solid #3dcbdb";
      googleDropdown.style.backgroundColor = "#fff";
      googleDropdown.style.fontFamily = "Outfit, sans-serif";
      googleDropdown.style.fontSize = "14px";
      googleDropdown.style.color = "#333";
      observer.disconnect(); // stop watching once styled
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
