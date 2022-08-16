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


// Website Count Bar Animation
const websitesBar = document.getElementById('websites-bar');
const websiteCount = document.getElementById('website-count');

const barAnimation = function() {
    setTimeout(() => {
        let height = 1;
        let adjustHeight = setInterval(frame, .1);

        const websitesHandler = function(heightSpeed) {
            height += heightSpeed;
            websitesBar.style.height = (height * .69) + '%';
            websiteCount.textContent = Math.floor(height);
        }
        
        function frame() {
            if (height >= 104) {
                clearInterval(adjustHeight);
            } else if (height >= 100) {
                websitesHandler(.03)
            } else if (height >= 93) {
                websitesHandler(.07)
            } else if (height >= 80) {
                websitesHandler(.15)
            } else if (height >= 70) {
                websitesHandler(.25)
            } else if (height >= 60) {
                websitesHandler(.35)
            } else if (height >= 50) {
                websitesHandler(.45)
            } else if (height >= 40) {
                websitesHandler(.55)
            } else {
                websitesHandler(.85)
            }
        }
    }, 650);
}

$(document).ready(function() {
    // Turn off the website bar animation for any device below tablet
    if ($(this).width() >= 768) {
        barAnimation();
    } else {
        websitesBar.style.height = (104 * .69) + '%';
        websiteCount.textContent = Math.floor(104);
    }

    // Fix mobile touch on projects
    if ($(this).width() <= 991) {
        // document.querySelector('.projects .container').addEventListener('touchend', function(e) {
        //     if (!e.target.closest('.project-item')) return;
        //     e.target.closest('.project-item').classList.toggle('project-tapped');
        // });

        // document.querySelectorAll('.close-mobile').forEach(phone => phone.addEventListener('touchend', function(e) {
        //     this.closest('.desktop-overlay').style.height = 0;
        //     this.closest('.desktop-overlay').style.opacity = 0;
        //     this.closest('.project-item').querySelector('.mobile-overlay').style.height = 0;
        //     this.closest('.project-item').querySelector('.mobile-overlay').style.opacity = 0;
        // }))
        $(element)
        .on('touchstart', function () {
            $(this).data('moved', '0');
        })
        .on('touchmove', function () {
            $(this).data('moved', '1');
        })
        .on('touchend', function () {
            if($(this).data('moved') == 0){
                // HERE YOUR CODE TO EXECUTE ON TAP-EVENT

                this.closest('.desktop-overlay').style.height = 0;
                this.closest('.desktop-overlay').style.opacity = 0;
                this.closest('.project-item').querySelector('.mobile-overlay').style.height = 0;
                this.closest('.project-item').querySelector('.mobile-overlay').style.opacity = 0;
            }
        });
    }
});

