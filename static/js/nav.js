document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Logic (from before) ---
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const menuPanel = document.getElementById("mobile-menu-panel");
  const menuOverlay = document.getElementById("menu-overlay");

  if (menuToggle && menuClose && menuPanel && menuOverlay) {
    function openMenu() {
      document.body.classList.add("menu-is-open");
      menuToggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      document.body.classList.remove("menu-is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        document.body.classList.contains("menu-is-open")
      ) {
        closeMenu();
      }
    });
  }

  const langSwitchers = document.querySelectorAll(".js-lang-toggle");

  langSwitchers.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent click from bubbling up to the document

      // Find the menu associated with THIS toggle button
      const menu = toggle.nextElementSibling;

      // Toggle the 'dn' class to show/hide the menu
      if (menu) {
        menu.classList.toggle("dn");
      }
    });
  });

  // Global click listener to close any open language menu
  document.addEventListener("click", function () {
    const allLangMenus = document.querySelectorAll(".js-lang-menu");
    allLangMenus.forEach(function (menu) {
      menu.classList.add("dn");
    });
  });
});
