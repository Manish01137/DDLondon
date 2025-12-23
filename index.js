let current = 0;
let target = 0;

/*
  Smaller value = slower scroll
  0.03 is ultra-luxury slow
*/
const ease = 0.035;

const panels = document.querySelectorAll(".panel");
document.body.style.height = panels.length * 100 + "vh";

window.addEventListener("wheel", (e) => {
  target += e.deltaY;
  target = Math.max(
    0,
    Math.min(target, document.body.scrollHeight - innerHeight)
  );
  e.preventDefault();
}, { passive: false });

function smoothScroll() {
  current += (target - current) * ease;
  window.scrollTo(0, current);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();
