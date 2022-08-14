// //Lazy Load images
// const images = document.querySelectorAll('img[data-src]');

// const imageReveal = function (entries, observer) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) return;
//     console.log(entry);
//     entry.target.src = entry.target.getAttribute('data-src');
//     entry.target.removeAttribute('data-src');
//     // entry.target.addEventListener('load', function () {
//     //   entry.target.classList.remove('lazy-img');
//     // });
//     observer.unobserve(entry.target);
//   });
// };

// const imageObserver = new IntersectionObserver(imageReveal, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });

// images.forEach(img => imageObserver.observe(img));

// Projects Observer

const projects = document.querySelectorAll('.project-item');

const projectReveal = function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;

        observer.unobserve(entry.target);
    });
};

const projectObserver = new IntersectionObserver(projectReveal, {
    root: null,
    threshold: .7,
});

projects.forEach((project, i) => {
    project.style.transform = 'translateY(100px)';
    project.style.opacity = 0;
    project.style.transitionDelay = `${i % 2 === 0 ?  .2 + (i * .03) : .4 + (i * .02)}s`;
    projectObserver.observe(project);
});