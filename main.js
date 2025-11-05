// main.js
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".cookie-overlay");
  if (!overlay) return;

  const dialog = overlay.querySelector(".cookie-dialog");
  const buttons = overlay.querySelectorAll(".cookie-actions .btn");

  // Close function
  function closeOverlay(action) {
    try {
      localStorage.setItem("immfoConsent", action);
    } catch (e) {
      // ignore localStorage errors
    }
    overlay.setAttribute("hidden", "");
  }

  // If already consented, keep it hidden
  try {
    if (localStorage.getItem("immfoConsent")) {
      overlay.setAttribute("hidden", "");
      return;
    }
  } catch (e) {}

  // Button clicks
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action || btn.textContent.trim().toLowerCase();
      closeOverlay(action);
    });
  });

  // Clicking backdrop
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeOverlay("backdrop");
    }
  });

  // Prevent clicks inside dialog from closing
  dialog.addEventListener("click", (e) => e.stopPropagation());

  // Pressing Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hasAttribute("hidden")) {
      closeOverlay("escape");
    }
  });
});
