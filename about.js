
/* =========================
   SMOOTH SCROLL CONFIG
========================= */
const content = document.getElementById("smooth-content");
let current = 0;
let target = 0;
const ease = 0.045; // smaller = slower (luxury feel)

/* SET BODY HEIGHT */
function setBodyHeight() {
  document.body.style.height =
    content.getBoundingClientRect().height + "px";
}

setBodyHeight();
window.addEventListener("resize", setBodyHeight);

/* TRACK SCROLL */
window.addEventListener("scroll", () => {
  target = window.scrollY;
});

/* =========================
   SMOOTH SCROLL LOOP
========================= */
function smoothScroll() {
  current += (target - current) * ease;
  content.style.transform = `translateY(-${current}px)`;

  revealSections();

  requestAnimationFrame(smoothScroll);
}

/* =========================
   SECTION REVEAL
========================= */
function revealSections() {
  document.querySelectorAll(".about-section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.65) {
      sec.classList.add("visible");
    }
  });
}

smoothScroll();

/* =========================
   MOBILE NAVBAR
========================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

/* TOGGLE MENU */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

/* CLOSE MENU ON LINK CLICK */
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

