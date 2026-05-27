// Placeholder project data for the modal cards.
const projects = [
  {
    name: "Project One",
    description: "A short description of what this project does.",
    date: "May 2026",
    features: ["Feature one", "Feature two", "Feature three"],
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    name: "Project Two",
    description: "A short description of what this project does.",
    date: "May 2026",
    features: ["Feature one", "Feature two", "Feature three"],
    tech: ["Python", "HTML", "CSS"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    name: "Project Three",
    description: "A short description of what this project does.",
    date: "May 2026",
    features: ["Feature one", "Feature two", "Feature three"],
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#"
  }
];

// Modal elements used by the project card interactions.
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelectorAll(".site-nav__links a");
const projectCards = document.querySelectorAll(".project-card");
const projectModal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#project-modal-title");
const modalDate = document.querySelector("#project-modal-date");
const modalDateValue = document.querySelector("#project-modal-date-value");
const modalOverview = document.querySelector("#project-modal-overview");
const modalFeatures = document.querySelector("#project-modal-features");
const modalTags = document.querySelector("#project-modal-tags");
const modalLiveLink = document.querySelector("#project-modal-live");
const modalCodeLink = document.querySelector("#project-modal-code");
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
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navToggle) {
      navToggle.checked = false;
    }
  });
});

// Fills the modal with the project that matches the selected card.
function populateProjectModal(project) {
  modalTitle.textContent = project.name;
  modalOverview.textContent = project.description;
  modalLiveLink.href = project.liveLink;
  modalCodeLink.href = project.githubLink;

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
  projectModal.hidden = false;
  document.body.classList.add("is-modal-open");
  projectModal.querySelector(".project-modal__close").focus();
}

// Closes the modal and returns focus to the card that opened it.
function closeProjectModal() {
  projectModal.hidden = true;
  document.body.classList.remove("is-modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// Keeps Tab and Shift+Tab focus inside the open modal.
function trapModalFocus(event) {
  if (projectModal.hidden || event.key !== "Tab") {
    return;
  }

  const focusableElements = projectModal.querySelectorAll("a[href], button:not([disabled])");
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
});
