// Placeholder project data for the modal cards.
const projects = [
  {
    name: "Taskly",
    image: "assets/images/taskly.png",
    description: "Taskly is a multi-project task manager where users sign in with Google and manage tasks across all their projects in real time. A dashboard-first design surfaces overdue, today, and upcoming tasks in one view, so there is no digging through projects. Tasks stay accessible offline and sync automatically when connectivity returns. Built with Firebase Auth, Firestore, and Cloud Messaging.",
    cardDescription: "A real-time task manager with Firebase sync and offline support. Manage multiple projects and never miss a deadline.",
    date: "In Development",
    features: [
      "Real-time cross-device sync",
      "Dashboard aggregates all projects by urgency",
      "Offline support with auto-sync on reconnect",
      "Browser push notifications for overdue tasks"
    ],
    tech: ["HTML", "CSS", "Vanilla JavaScript", "Firebase Auth", "Firebase Firestore", "Firebase Cloud Messaging", "Vercel"],
    liveLink: "",
    githubLink: "https://github.com/LunaCedrick/Taskly",
    docsLink: "https://github.com/LunaCedrick/Taskly/blob/main/README.md"
  },
  {
    name: "Weather Dashboard",
    image: "assets/images/weatherDashboard.png",
    description: "A living weather interface that transforms the entire experience around real-time weather data. Users can search any city, view live conditions and a 5-day forecast, toggle between Celsius and Fahrenheit instantly, and browse city suggestions as they type. The background shifts to match the current weather condition, creating an immersive sky-themed design with frosted glass cards for readability and polish.",
    cardDescription: "An immersive weather app with live forecasts, city search suggestions, unit toggles, and weather-reactive sky backgrounds.",
    date: "June 2026",
    features: [
      "Live weather search for any city with real-time API data",
      "City autocomplete suggestions as the user types",
      "Dynamic background that changes based on weather and time of day",
      "5-day forecast with frosted glass UI and temperature unit toggle"
    ],
    tech: [
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "OpenWeatherMap API",
      "Vercel"
    ],
    liveLink: "https://weather-dashboard-cl-builds.vercel.app",
    githubLink: "https://github.com/LunaCedrick/WeatherDashboard",
    docsLink: "https://github.com/LunaCedrick/WeatherDashboard/blob/main/README.md"
  },
  {
    name: "Personal Portfolio",
    image: "assets/images/portfolio-thumbnail.png",
    description: "A responsive portfolio that brings together my background, selected projects, and contact details in one place. The site uses semantic HTML, a custom CSS design system, and lightweight JavaScript for the project carousel and detail dialogs.",
    date: "June 2026",
    features: ["Responsive layouts for mobile and desktop", "Project detail dialogs with keyboard support", "Accessible navigation and reduced-motion support"],
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://lunacedrick.github.io/MyPortfolio/",
    githubLink: "https://github.com/LunaCedrick/MyPortfolio",
    docsLink: ""
  }
];

// Modal elements used by the project card interactions.
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelectorAll(".site-nav__links a");
const siteNav = document.querySelector(".site-nav");
const navIndicator = document.querySelector(".site-nav__indicator");
const navItems = document.querySelectorAll(".site-nav__logo, .site-nav__links a");
const projectCards = document.querySelectorAll(".project-card");
const projectModal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#project-modal-title");
const modalDate = document.querySelector("#project-modal-date");
const modalDateValue = document.querySelector("#project-modal-date-value");
const modalOverview = document.querySelector("#project-modal-overview");
const modalImage = document.querySelector("#project-modal-image");
const modalImageCaption = document.querySelector("#project-modal-image-caption");
const modalFeatures = document.querySelector("#project-modal-features");
const modalTags = document.querySelector("#project-modal-tags");
const modalLiveLink = document.querySelector("#project-modal-live");
const modalCodeLink = document.querySelector("#project-modal-code");
const modalDocsLink = document.querySelector("#project-modal-docs");
const modalCloseItems = document.querySelectorAll("[data-modal-close]");
const projectsTrack = document.querySelector("#projects-track");
const projectsArrowLeft = document.querySelector(".projects__arrow--left");
const projectsArrowRight = document.querySelector(".projects__arrow--right");
let lastFocusedElement = null;

// Creates a small list item for modal features and tech tags.
function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

// Closes the mobile navigation after a section link is selected.
function syncMobileMenuState() {
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(navToggle.checked));
  }
}

if (navToggle) {
  navToggle.addEventListener("change", syncMobileMenuState);
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navToggle) {
      navToggle.checked = false;
      syncMobileMenuState();
    }
  });
});

// Moves the shared active dot beneath the selected desktop navigation item.
function setActiveNavItem(sectionId) {
  const activeItem = [...navItems].find((item) => item.hash === `#${sectionId}`);
  if (!activeItem || !siteNav || !navIndicator) return;

  navItems.forEach((item) => {
    if (item === activeItem) {
      item.setAttribute("aria-current", "location");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  const navBounds = siteNav.getBoundingClientRect();
  const itemBounds = activeItem.getBoundingClientRect();
  const scale = navBounds.width ? siteNav.clientWidth / navBounds.width : 1;
  const center = (itemBounds.left + itemBounds.width / 2 - navBounds.left) * scale;
  siteNav.style.setProperty("--nav-indicator-x", `${center}px`);
}

setActiveNavItem("home");
window.addEventListener("resize", () => {
  const activeItem = [...navItems].find((item) => item.hasAttribute("aria-current"));
  if (activeItem) setActiveNavItem(activeItem.hash.slice(1));
});

// Fills the modal with the project that matches the selected card.
function populateProjectModal(project) {
  modalTitle.textContent = project.name;
  modalOverview.textContent = project.description;
  modalImage.src = project.image;
  modalImage.alt = `${project.name} project preview`;
  modalImageCaption.textContent = `${project.name} interface preview`;

  // Hide action buttons when a project does not provide that link yet.
  if (project.liveLink) {
    modalLiveLink.href = project.liveLink;
    modalLiveLink.hidden = false;
  } else {
    modalLiveLink.href = "#";
    modalLiveLink.hidden = true;
  }

  if (project.githubLink) {
    modalCodeLink.href = project.githubLink;
    modalCodeLink.hidden = false;
  } else {
    modalCodeLink.href = "#";
    modalCodeLink.hidden = true;
  }

  // Show the documentation button only when the project provides docs.
  if (project.docsLink) {
    modalDocsLink.href = project.docsLink;
    modalDocsLink.hidden = false;
  } else {
    modalDocsLink.href = "#";
    modalDocsLink.hidden = true;
  }

  // Show the created date only when the selected project provides one.
  if (project.date) {
    modalDateValue.textContent = project.date;
    modalDate.hidden = false;
  } else {
    modalDateValue.textContent = "";
    modalDate.hidden = true;
  }

  modalFeatures.replaceChildren(...project.features.map(createListItem));
  modalTags.replaceChildren(...project.tech.map(createListItem));
}

// Opens the modal and moves keyboard focus into it.
function openProjectModal(projectIndex) {
  const project = projects[projectIndex];

  if (!project) {
    return;
  }

  lastFocusedElement = document.activeElement;
  populateProjectModal(project);
  projectModal.classList.remove("is-closing");
  projectModal.classList.remove("is-open");
  projectModal.hidden = false;
  document.body.classList.add("is-modal-open");
  window.requestAnimationFrame(() => projectModal.classList.add("is-open"));
  projectModal.querySelector(".project-modal__close").focus();
}

// Closes the modal and returns focus to the card that opened it.
function closeProjectModal() {
  if (projectModal.hidden || projectModal.classList.contains("is-closing")) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    projectModal.hidden = true;
    projectModal.classList.remove("is-open", "is-closing");
    document.body.classList.remove("is-modal-open");
    if (lastFocusedElement) lastFocusedElement.focus();
    return;
  }

  projectModal.classList.add("is-closing");
  document.body.classList.remove("is-modal-open");

  window.setTimeout(() => {
    projectModal.hidden = true;
    projectModal.classList.remove("is-open", "is-closing");
    if (lastFocusedElement) lastFocusedElement.focus();
  }, 220);
}

// Keeps Tab and Shift+Tab focus inside the open modal.
function trapModalFocus(event) {
  if (projectModal.hidden || event.key !== "Tab") {
    return;
  }

  const focusableElements = projectModal.querySelectorAll("a[href]:not([hidden]), button:not([disabled]):not([hidden])");
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

// Opens the correct project when a card is clicked.
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    openProjectModal(Number(card.dataset.projectIndex));
  });
});

// Horizontal carousel arrows scroll the project track by one card at a time.
function scrollProjects(direction) {
  const firstCard = projectsTrack.querySelector(".project-card");
  const trackStyles = window.getComputedStyle(projectsTrack);
  const trackGap = Number.parseFloat(trackStyles.columnGap) || 0;
  const scrollAmount = firstCard.offsetWidth + trackGap;

  projectsTrack.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

if (projectsTrack && projectsArrowLeft && projectsArrowRight) {
  projectsArrowLeft.addEventListener("click", () => {
    scrollProjects(-1);
  });

  projectsArrowRight.addEventListener("click", () => {
    scrollProjects(1);
  });
}

// Closes the modal from either the X button or backdrop.
modalCloseItems.forEach((item) => {
  item.addEventListener("click", closeProjectModal);
});

// Keyboard support for Escape close and focus trapping.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !projectModal.hidden) {
    closeProjectModal();
  }

  trapModalFocus(event);

  if (event.key === "Escape" && navToggle?.checked) {
    navToggle.checked = false;
    syncMobileMenuState();
  }
});

// Marks the section currently in view in the primary navigation.
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    setActiveNavItem(entry.target.id);
  });
}, { rootMargin: "-35% 0px -55% 0px" });

document.querySelectorAll("main > section[id]").forEach((section) => sectionObserver.observe(section));

// Makes the floating navigation slightly denser after the hero leaves view.
const siteHeader = document.querySelector(".site-header");
const heroSection = document.querySelector(".hero");
const navStateObserver = new IntersectionObserver(([entry]) => {
  siteHeader.classList.toggle("is-scrolled", !entry.isIntersecting);
}, { threshold: 0.08 });

navStateObserver.observe(heroSection);

// Adds scroll reveals only when the browser supports them and motion is allowed.
function initScrollReveals() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealTargets = document.querySelectorAll(
    ".about__header, .about__media, .about__name-block, .about__bio, .about__skills, .about__drivers, .projects__header, .project-card, .contact__header, .contact__cards, .contact__cta, .site-footer__inner"
  );

  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  revealTargets.forEach((target) => target.classList.add("reveal"));
  document.documentElement.classList.add("has-reveals");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });

  revealTargets.forEach((target) => revealObserver.observe(target));
}

// Uses one animation frame to update the subtle hero and project pointer effects.
function initPointerEffects() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const hero = document.querySelector(".hero");
  const portrait = document.querySelector(".hero__photo-wrap");
  const code = document.querySelector(".hero__code");
  const cards = document.querySelectorAll(".project-card");
  const glowSections = document.querySelectorAll(".about, .projects, .contact");

  if (reducedMotion.matches || !finePointer.matches) return;

  // A stationary pointer does not always emit pointerleave while anchor navigation scrolls.
  // Hide the last pointer position during scrolling and resume when the pointer moves again.
  let pointerGlowResetFrame = 0;
  const clearPointerGlow = () => {
    document.documentElement.classList.add("pointer-glow-paused");
    glowSections.forEach((section) => {
      section.style.removeProperty("--section-pointer-x");
      section.style.removeProperty("--section-pointer-y");
    });
  };
  window.addEventListener("scroll", () => {
    if (pointerGlowResetFrame) window.cancelAnimationFrame(pointerGlowResetFrame);
    pointerGlowResetFrame = window.requestAnimationFrame(clearPointerGlow);
  }, { passive: true });
  window.addEventListener("pointermove", () => {
    document.documentElement.classList.remove("pointer-glow-paused");
  }, { passive: true });

  let heroFrame = 0;
  let pointerClientX = 0;
  let pointerClientY = 0;

  hero.addEventListener("pointermove", (event) => {
    pointerClientX = event.clientX;
    pointerClientY = event.clientY;

    if (heroFrame) return;
    heroFrame = window.requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      const pointerX = pointerClientX - bounds.left;
      const pointerY = pointerClientY - bounds.top;
      hero.style.setProperty("--pointer-x", `${pointerX}px`);
      hero.style.setProperty("--pointer-y", `${pointerY}px`);
      const normalizedX = (pointerX / bounds.width - 0.5) * 2;
      const normalizedY = (pointerY / bounds.height - 0.5) * 2;
      portrait.style.setProperty("--portrait-x", `${normalizedX * 5}px`);
      portrait.style.setProperty("--portrait-y", `${normalizedY * 4}px`);
      code.style.setProperty("--code-x", `${normalizedX * -7}px`);
      code.style.setProperty("--code-y", `${normalizedY * -5}px`);
      heroFrame = 0;
    });
  }, { passive: true });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--pointer-x", "72%");
    hero.style.setProperty("--pointer-y", "34%");
    portrait.style.setProperty("--portrait-x", "0px");
    portrait.style.setProperty("--portrait-y", "0px");
    code.style.setProperty("--code-x", "0px");
    code.style.setProperty("--code-y", "0px");
  });

  // Carries the same soft pointer light through the content sections.
  glowSections.forEach((section) => {
    let sectionFrame = 0;
    let sectionClientX = 0;
    let sectionClientY = 0;

    section.addEventListener("pointermove", (event) => {
      sectionClientX = event.clientX;
      sectionClientY = event.clientY;

      if (sectionFrame) return;
      sectionFrame = window.requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        section.style.setProperty("--section-pointer-x", `${sectionClientX - bounds.left}px`);
        section.style.setProperty("--section-pointer-y", `${sectionClientY - bounds.top}px`);
        sectionFrame = 0;
      });
    }, { passive: true });

    section.addEventListener("pointerleave", () => {
      section.style.removeProperty("--section-pointer-x");
      section.style.removeProperty("--section-pointer-y");
    });
  });

  cards.forEach((card) => {
    let cardFrame = 0;
    let cardClientX = 0;
    let cardClientY = 0;

    card.addEventListener("pointermove", (event) => {
      cardClientX = event.clientX;
      cardClientY = event.clientY;

      if (cardFrame) return;
      cardFrame = window.requestAnimationFrame(() => {
        const bounds = card.getBoundingClientRect();
        const cardPointerX = cardClientX - bounds.left;
        const cardPointerY = cardClientY - bounds.top;
        card.style.setProperty("--pointer-x", `${cardPointerX}px`);
        card.style.setProperty("--pointer-y", `${cardPointerY}px`);
        const rotateX = ((cardPointerY / bounds.height) - 0.5) * -6;
        const rotateY = ((cardPointerX / bounds.width) - 0.5) * 6;
        card.style.setProperty("--tilt-x", `${rotateX}deg`);
        card.style.setProperty("--tilt-y", `${rotateY}deg`);
        cardFrame = 0;
      });
    }, { passive: true });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
    });
  });
}

initScrollReveals();
initPointerEffects();
