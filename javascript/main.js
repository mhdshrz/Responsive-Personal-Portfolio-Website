// -------------------- show menu -------------------- //
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// validating if the constant value exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

// validating if the constant value exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

// -------------------- remove menu mobile -------------------- //
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show__menu");
};

navLink.forEach((item) => item.addEventListener("click", linkAction));

// -------------------- shadow header -------------------- //
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 5
    ? header.classList.add("shadow__header")
    : header.classList.remove("shadow__header");
};

window.addEventListener("scroll", shadowHeader);

// -------------------- email -------------------- //
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_8k01m8h",
      "template_4hqcg1q",
      "#contact-form",
      "ViyE9Dy-3WzfZqPF5"
    )
    .then(
      () => {
        // show sent message success
        contactMessage.textContent = "Message sent successfully ✅";
        // remove sent message success after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        // clear input fields
        contactForm.reset();
      },
      () => {
        //show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// -------------------- show scroll up -------------------- //
const scrollUp = () => {
  const scrollUpElement = document.getElementById("scroll-up");
  // when the scroll is higher than 350 vh, show the button
  this.scrollY >= 350
    ? scrollUpElement.classList.add("show__scroll")
    : scrollUpElement.classList.remove("show__scroll");
};

window.addEventListener("scroll", scrollUp);

// -------------------- scroll section active link -------------------- //
// all section elements that has an id attribute
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((item) => {
    const sectionHeight = item.offsetHeight;
    const headerHeight = document.getElementById("header").offsetHeight;
    const sectionTop = item.offsetTop - headerHeight;
    const sectionId = item.getAttribute("id");
    const sectionClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
      sectionClass.classList.add("active__link");
    else sectionClass.classList.remove("active__link");
  });
};

window.addEventListener("scroll", scrollActive);

// -------------------- light/dark theme -------------------- //
const themeButton = document.getElementById("theme-button");

// previously selected theme (if any)
const selectedTheme = localStorage.getItem("selected-theme");

// applying user's chosen them (if any)
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    "dark__theme"
  );
  themeButton
    .querySelector("i")
    .classList.add(selectedTheme === "dark" ? "ri-sun-line" : "ri-moon-line");
}

// getting the current theme
const getCurrentTheme = () =>
  document.body.classList.contains("dark__theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.querySelector("i").classList.contains("ri-sun-line")
    ? "ri-sun-line"
    : "ri-moon-line";

// toggling the theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark__theme");
  localStorage.setItem("selected-theme", getCurrentTheme());

  if (getCurrentIcon() === "ri-moon-line") {
    themeButton.querySelector("i").classList.remove("ri-moon-line");
    themeButton.querySelector("i").classList.add("ri-sun-line");
  } else {
    themeButton.querySelector("i").classList.remove("ri-sun-line");
    themeButton.querySelector("i").classList.add("ri-moon-line");
  }
});

// -------------------- scroll reveal animation -------------------- //
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(
  `.home__profile, .about__image, 
    .contact__mail`,
  { origin: "right" }
);
sr.reveal(
  `.home__name, .home__info, .about__container 
    .section__title__1, .about__info, .contact__social, 
    .contact__data`,
  { origin: "left" }
);
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
