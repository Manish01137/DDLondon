const panels = document.querySelectorAll(".panel");
const totalPanels = panels.length;

/* VERY SLOW */
const ease = 0.06;

let current = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - innerHeight;
  const progress = scrollY / maxScroll;

  panels.forEach((panel, i) => {
    const offset = (i - progress * (totalPanels - 1)) * innerHeight;
    panel.style.transform = `translateY(${offset}px)`;
  });
});
