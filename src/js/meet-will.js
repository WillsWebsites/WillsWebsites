// Scrolling section intersection observer

// const scrollSections = document.querySelectorAll(".scrollable-right");

// const sectionReveal = function (entries) {

//   entries.forEach((entry) => {
//     entry.target.closest('.scroll-section').classList.remove('scroll--active');
//     if (!entry.isIntersecting) return;
//     entry.target.closest('.scroll-section').classList.add("scroll--active");
//   });
// };

// const projectObserver = new IntersectionObserver(sectionReveal, {
//   root: null,
//   threshold: .663,
// });

// scrollSections.forEach((section, i) => {
//     section.closest('.scroll-section').classList.remove('scroll--active');
//     section.secIndex = i;
//   projectObserver.observe(section);
// });