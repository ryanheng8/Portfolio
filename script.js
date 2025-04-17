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
document.querySelectorAll(".menuTabs a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menuTabs");
    const image = document.querySelector(".mobileMenuImage");
    menu.classList.remove("open");
    image.classList.remove("open");
  });
});

function scrollToSection(event, sectionId, duration) {
  event.preventDefault();
  const target = document.getElementById(sectionId);
  const targetY = target.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startY + (targetY - startY) * ease);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);

  toggleMenu();
}

// Select all containers to animate
const containers = document.querySelectorAll(
  ".name, .detailsContainer, .contactInfoContainer"
);

// Intersection Observer to detect when the container is in view or out of view
const observerContainers = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add class to make the container visible and slide in
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      } else {
        // Add class to make the container slide out
        entry.target.classList.add("hidden");
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.3, // Trigger when 30% of the element is in view
  }
);

// Observe each container
containers.forEach((container) => {
  observerContainers.observe(container);
});

// Select all headers to animate
const headers = document.querySelectorAll(
  ".navTabs, .title, .tabTextP2, .socialsContainer"
);

// Intersection Observer to detect when the container is in view or out of view
const observerHeaders = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add class to make the container visible and slide in
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      } else {
        // Add class to make the container slide out
        entry.target.classList.add("hidden");
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.8, // Trigger when 80% of the element is in view
  }
);

// Observe each header
headers.forEach((header) => {
  observerHeaders.observe(header);
});
