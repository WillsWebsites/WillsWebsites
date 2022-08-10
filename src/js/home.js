// // Services Observer

// const services = document.querySelectorAll(".service");

// const serviceReveal = function (entries, observer) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;

//     entry.target.style.opacity = 1;
//     entry.target.style.transform = "translateY(0)";
//     entry.target.style.boxShadow = "-1px 2px 0px rgba(238, 237, 237, .5)";
//     observer.unobserve(entry.target);
//   });
// };

// const serviceObserver = new IntersectionObserver(serviceReveal, {
//   root: null,
//   threshold: 0.3,
// });

// services.forEach(function (service, i) {
//   serviceObserver.observe(service);
//   service.style.opacity = 0;
//   service.style.transform = "translateY(50px)";
//   service.style.transition = "all .5s ease-in";
//   service.style.transitionDelay = `.${i}s`;
//   service.style.boxShadow = "-1px 2px 0px rgba(238, 237, 237, 0)";
// });
