/* =============================
   EXTRA SLOW SCROLL FEEL
============================= */
let currentScroll = window.pageYOffset;
let targetScroll = currentScroll;
let ease = 0.05;

window.addEventListener("wheel", (e) => {
  e.preventDefault();
  targetScroll += e.deltaY * 0.7;
  targetScroll = Math.max(
    0,
    Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
  );
}, { passive: false });

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * ease;
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();
