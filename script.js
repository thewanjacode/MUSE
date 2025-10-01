
  const chatToggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const chatClose = document.getElementById("chat-close");

  // Show chat box
  chatToggle.addEventListener("click", () => {
    chatBox.style.display = "flex";
    chatToggle.style.display = "none";
  });

  // Close chat box
  chatClose.addEventListener("click", () => {
    chatBox.style.display = "none";
    chatToggle.style.display = "block";
  });
