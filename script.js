/* Navbar Toggling */
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* View all Botton */
const buttons = document.querySelectorAll(".view-all-btn");
const hiddenItems = document.querySelectorAll(".hidden");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    hiddenItems.forEach(function (item) {
      item.classList.toggle("hidden");
    });

    button.textContent =
      button.textContent === "View All Categories"
        ? "Show Less"
        : "View All Categories";
  });
});

/* Menu Category -> Explore Page */
const menuItems = document.querySelectorAll(".menu-categories ul li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

/* Navbar Highlight */
const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
