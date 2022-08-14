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
    threshold: .25,
});

projects.forEach((project, i) => {
    project.style.transform = 'translateY(100px)';
    project.style.opacity = 0;
    project.style.transitionDelay = `${i % 2 === 0 ?  .2 + (i * .03) : .4 + (i * .02)}s`;
    projectObserver.observe(project);
});

$(document).ready(function() {
    const containerHeight = document.querySelector('.project-intro .container').getBoundingClientRect().height;
    document.querySelector('.project-intro .container .project-info-right').style.minHeight = `${containerHeight * .8}px`;


    setTimeout(() => {
        const websitesBar = document.getElementById('websites-bar');
        const websiteCount = document.getElementById('website-count');
        let height = 1;
        let adjustHeight = setInterval(frame, .5);
        function frame() {
            if (height >= 100) {
                    clearInterval(adjustHeight);
            } else if (height >= 97) {
                height += .02;
                websitesBar.style.height = height + '%';
                websiteCount.textContent = Math.floor(height);
            } else if (height >= 90) {
                height += .05;
                websitesBar.style.height = height + '%';
                websiteCount.textContent = Math.floor(height);
            } else if (height >= 80) {
                height += .1;
                websitesBar.style.height = height + '%';
                websiteCount.textContent = Math.floor(height);
            } else if (height >= 70) {
                height += .2;
                websitesBar.style.height = height + '%';
                websiteCount.textContent = Math.floor(height);
            } else if (height >= 60) {
                height += .3;
                websitesBar.style.height = height + '%';
                websiteCount.textContent = Math.floor(height);
            } else if (height >= 50) {
                height += .4;
                websitesBar.style.height = height + '%';
                websiteCount.textContent = Math.floor(height);
            } else if (height >= 40) {
                height += .5;
                websitesBar.style.height = height + '%';
                websiteCount.textContent = Math.floor(height);
            } else {
                height += .8; 
                websitesBar.style.height = height + '%'; 
                websiteCount.textContent = Math.floor(height);
            }
        }
    }, 750);
});

