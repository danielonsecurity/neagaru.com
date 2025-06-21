document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mainMenu = document.getElementById("main-menu");

  if (menuToggle && mainMenu) {
    const icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", function () {
      const isOpen = mainMenu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen);

      // Change hamburger icon to an 'X' and back
      if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }
});
