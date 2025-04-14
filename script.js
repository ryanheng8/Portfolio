function toggleMenu() {
  const menu = document.querySelector(".menuTabs");
  const image = document.querySelector(".mobileMenuImage");
  const button = document.querySelector(".mobileMenuImage");

  menu.classList.toggle("open");
  image.classList.toggle("open");

  // Toggle accessibility attributes
  const isOpen = menu.classList.contains("open");
  button.setAttribute("aria-expanded", isOpen);
  button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

// Close the menu when a link is clicked
document.querySelectorAll('.menuTabs a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector(".menuTabs");
    const image = document.querySelector(".mobileMenuImage");
    menu.classList.remove("open");
    image.classList.remove("open");
  });
});
