const content = document.getElementById("smooth-content");

let current = 0;
let target = 0;

/* 🔥 VERY VERY SLOW */
const ease = 0.035;

/* SET BODY HEIGHT */
function setBodyHeight() {
  document.body.style.height =
    content.getBoundingClientRect().height + "px";
}

setBodyHeight();
window.addEventListener("resize", setBodyHeight);

window.addEventListener("scroll", () => {
  target = window.scrollY;
});

function smoothScroll() {
  current += (target - current) * ease;
  content.style.transform = `translateY(-${current}px)`;
  requestAnimationFrame(smoothScroll);
}

smoothScroll();
