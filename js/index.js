// Selcting the DOM items to be used
const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const socials = document.querySelectorAll(".social-item");
const contact = document.querySelector(".contact");
// const header = document.querySelector("#header");

// const header = document.querySelector("#header");
// const navHeight = header.getBoundingClientRect().height;
// Setting initial state of menu
let menuShow = false;

const toggleMenu = function () {
  if (!menuShow) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    contact.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));
    socials.forEach((item) => item.classList.add("show"));

    menuShow = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    contact.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    socials.forEach((item) => item.classList.remove("show"));

    menuShow = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);

// Function to remove nav-links when clicked for the mobile aspect
const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
  menu.classList.remove("show");
  menuBtn.classList.remove("close");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));
// Sticky Nav
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     header.classList.add("sticky");
//   } else header.classList.remove("sticky");
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });

// headerObserver.observe(header);
// Link to Resume
const resume = document.querySelector(".resume");

resume.target = "_blank";

// Scroll into view
const navLink = document.querySelector(".nav-link");
navLink.addEventListener("click", scrollInto);

function scrollInto(e) {
  e.preventDefault();

  // Using the matching startegy
  if (e.target.classList.contains("log")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
}
// Getting UI elements
const header = document.querySelector("#header");
const h1 = document.querySelector("#pipe");
const par = document.querySelector("#love");
const high = document.querySelector("#highlight");
const button = document.querySelector("#cta");
const about = document.querySelector("#about-me");
const projects = document.querySelector("#projects");
// Creating a Timeline

// const mainTl = gsap.timeline();

// mainTl
//   .from(header, {
//     y: 16,
//     opacity: 0,
//     duratio: 0.5,
//     ease: "power3.inout",
//   })
//   .from(h1, {
//     delay: -0.2,
//     x: -200,
//     duration: 0.7,
//     ease: "power3.out",
//     stagger: {
//       amount: 0.2,
//     },
//   })
//   .from(par, {
//     delay: -0.3,
//     x: -1000,
//     duration: 2,
//     ease: "power3.out",
//     stagger: {
//       amount: 0.25,
//     },
//   })
//   .from(high, {
//     // delay: -0.4,
//     y: -40,
//     opacity: 0,
//     duration: 0.2,
//     ease: "power3.out",
//     stagger: {
//       amount: 0.2,
//     },
//   })
//   .from(button, {
//     // delay: -0.4,
//     y: -60,
//     opacity: 0,
//     duration: 0.8,
//     ease: "power3.out",
//     stagger: {
//       amount: 0.45,
//     },
//   });

const aboutTl = gsap.timeline();

aboutTl.from(about, {
  opacity: 0,
  x: -400,
  duration: 4,
  ease: "power3.out",
  stagger: {
    amount: 0.2,
  },
});

// Using scroll magic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#love",
  triggerHook: 0,
  reverse: false,
})
  // .addIndicators()
  .setTween(aboutTl)
  .addTo(controller);

// Uing scrollMagic for our   Projects worked on
const projectsTl = gsap.timeline();

projectsTl.from(projects, {
  opacity: 0,
  y: 60,
  duration: 4,
  ease: "power3.out",
  stagger: {
    amount: 0.2,
  },
});

const controll = new ScrollMagic.Controller();
const scens = new ScrollMagic.Scene({
  triggerElement: ".me3",
  triggerHook: 0,
  reverse: false,
})
  // .addIndicators()
  .setTween(projectsTl)
  .addTo(controll);
