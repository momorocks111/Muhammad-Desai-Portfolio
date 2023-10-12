// Menu Toggle
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//  Show Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//  Hide Menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Dark Light Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "light-theme";
const iconTheme = "ri-sun-line";

// Previously Selected Option
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/Deactivate the theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Theme Selector
const icon = document.getElementById("theme-selector");
const container = document.querySelector(".theme-container");
const buttons = document.querySelectorAll(".theme-container button");

icon.addEventListener("click", () => {
  container.classList.toggle("show-selector");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let bgc = getComputedStyle(button).backgroundColor;
    document
      .querySelector(":root")
      .style.setProperty("--default-text-clr", bgc);
    container.classList.remove("show-selector");
    localStorage.setItem("theme", bgc);
  });
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document
    .querySelector(":root")
    .style.setProperty("--default-text-clr", savedTheme);
}

//Swiper
let swiperSkills = new Swiper(".skills__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  breakpoints: {
    1023: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

//Email JS
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //Check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    contactMessage.textContent = "Write all the input fields 📩";
  } else {
    emailjs
      .sendForm(
        "service_19sfmi8",
        "template_emx9a7l",
        "#contact-form",
        "-IPBldQvJv8nYlnOi"
      )
      .then(
        () => {
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent ✅";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 4000);
        },
        (error) => {
          alert("SOMETHING HAS GONE WRONG...", error);
        }
      );
    // Clear input fields
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

// Show Scroll Up Button
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__header`);
sr.reveal(`.about__data`);
sr.reveal(`.skills, .projects, .contact, footer`);
sr.reveal(`.home__content`, {
  delay: 600,
  origin: "bottom",
  interval: 100,
});
sr.reveal(`.about__img`, {
  delay: 600,
  origin: "bottom",
  interval: 100,
});
