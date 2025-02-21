// Mobile Menu Variables
const mobileMenu = document.querySelector(".mob-menu");
const menuOpenBtn = document.querySelector(".btn-burger");
const menuCloseBtn = document.querySelector(".btn-mob-close");

// Modal Window Variables
const modal = document.querySelector(".modal-overlay");
const modalOpenBtn = document.querySelector(".btn");
const modalCloseBtn = document.querySelector(".btn-close");

// Navigation Variables - Portfolio
const portfolioNavLink = document.querySelector(
  "li.navitem:nth-child(2) .navi-first"
);
const portfolioMobileLink = document.querySelector(
  "li.nav-mob-list:nth-child(2) .mob-nav-menu"
);
const portfolioSection = document.querySelector(".section-four");

// Navigation Variables - Contacts
const contactsNavLink = document.querySelector(
  "li.navitem:nth-child(3) .navi-first"
);
const contactsMobileLink = document.querySelector(
  "li.nav-mob-list:nth-child(3) .mob-nav-menu"
);
const footerSection = document.querySelector(".end-chapter");

// Mobile Menu Functions
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
};

// Modal Window Functions
const toggleModal = () => {
  modal.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
};

const closeModalOnEscape = (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    toggleModal();
  }
};

const closeModalOnBackdrop = (e) => {
  if (e.target === modal) {
    toggleModal();
  }
};

// Smooth Scroll Function
const smoothScroll = (target) => {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// Portfolio Navigation
if (portfolioNavLink) {
  portfolioNavLink.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(portfolioSection);
  });
}

if (portfolioMobileLink) {
  portfolioMobileLink.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(portfolioSection);
    toggleMobileMenu();
  });
}

// Contacts Navigation
if (contactsNavLink) {
  contactsNavLink.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(footerSection);
  });
}

if (contactsMobileLink) {
  contactsMobileLink.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(footerSection);
    toggleMobileMenu();
  });
}

// Mobile Menu Event Listeners
menuOpenBtn.addEventListener("click", toggleMobileMenu);
menuCloseBtn.addEventListener("click", toggleMobileMenu);

// Modal Window Event Listeners
modalOpenBtn.addEventListener("click", toggleModal);
modalCloseBtn.addEventListener("click", toggleModal);
modal.addEventListener("click", closeModalOnBackdrop);
document.addEventListener("keydown", closeModalOnEscape);

// Close mobile menu on wider screens
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
});
