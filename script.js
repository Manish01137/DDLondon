// =====================
// GSAP SETUP
// =====================
gsap.registerPlugin(ScrollTrigger);

// =====================
// HERO → OVERLAP SLIDE (FIXED)
// =====================
gsap.fromTo(
  ".overlap",
  { yPercent: 100 },
  {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".overlap",
      start: "top bottom",
      end: "top top",
      scrub: 0.6,
      invalidateOnRefresh: true   // 🔑 CRITICAL
    }
  }
);

// =====================
// HERO BRAND TEXT FADE (REVERSIBLE)
// =====================
gsap.to(".hero h1", {
  opacity: 0,
  y: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".overlap",
    start: "top 80%",
    end: "top 30%",
    scrub: 0.6,
    invalidateOnRefresh: true
  }
});

// =====================
// EDITORIAL FADE-UP (FIX SCROLL-UP)
// =====================
gsap.utils.toArray(
  ".overlap h2, .project, .journal-item"
).forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse", // 🔑 FIX
      invalidateOnRefresh: true
    }
  });
});

// =====================
// PROJECT IMAGE SOFT REVEAL
// =====================
gsap.utils.toArray(".project img").forEach(img => {
  gsap.from(img, {
    scale: 1.06,
    opacity: 0,
    duration: 1.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true
    }
  });
});

// =====================
// FOOTER BRAND TEXT (NO FLASH)
// =====================
gsap.from(".footer-brand h1", {
  opacity: 0,
  y: 60,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    toggleActions: "play none none reverse",
    invalidateOnRefresh: true
  }
});

// =====================
// FINAL SAFETY REFRESH
// =====================
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

const projectCards = document.querySelectorAll('.project');

  const projectObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          projectObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  projectCards.forEach(card => projectObserver.observe(card));