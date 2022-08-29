// Scrolling section intersection observer

const scrollSections = document.querySelectorAll(".scroll-section");

const sectionReveal = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.remove('scroll--active');
    if (!entry.isIntersecting) return;
    
    entry.target.classList.add("scroll--active");
  });
};

const projectObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.6,
});

scrollSections.forEach((section, i) => {
  projectObserver.observe(section);
});