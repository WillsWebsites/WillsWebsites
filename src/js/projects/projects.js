import React from "react";
import ReactDOM from "react-dom/client";
import Project from "./Project";

const root = ReactDOM.createRoot(document.getElementById("project-list"));
root.render(<Project />);

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

$(document).ready(function () {
  setTimeout(() => {
      // Projects Observer
  const projects = document.querySelectorAll(".project-item");

  if (projects) {
    document.querySelector(".testing").textContent =
      projects[0].getBoundingClientRect().height;
  } else {
    document.querySelector(".testing").textContent = "Projects not found";
  }
  const projectReveal = function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);
      if (!entry.isIntersecting) return;

      entry.target.classList.add("project-reveal");
      observer.unobserve(entry.target);
    });
  };

  const projectObserver = new IntersectionObserver(projectReveal, {
    root: null,
    threshold: 0.2,
  });

  projects.forEach((project, i) => {
    project.style.transitionDelay = `${
      i % 2 === 0 ? 0.2 + i * 0.03 : 0.4 + i * 0.02
    }s`;
    projectObserver.observe(project);
  });
  }, 500);

  // Website Count Bar Animation
  const websitesBar = document.getElementById("websites-bar");
  const websiteCount = document.getElementById("website-count");

  const barAnimation = function () {
    setTimeout(() => {
      let height = 1;
      let adjustHeight = setInterval(frame, 0.1);

      const websitesHandler = function (heightSpeed) {
        height += heightSpeed;
        websitesBar.style.height = height * 0.69 + "%";
        websiteCount.textContent = Math.floor(height);
      };

      function frame() {
        if (height >= 104) {
          clearInterval(adjustHeight);
        } else if (height >= 100) {
          websitesHandler(0.03);
        } else if (height >= 93) {
          websitesHandler(0.07);
        } else if (height >= 80) {
          websitesHandler(0.15);
        } else if (height >= 70) {
          websitesHandler(0.25);
        } else if (height >= 60) {
          websitesHandler(0.35);
        } else if (height >= 50) {
          websitesHandler(0.45);
        } else if (height >= 40) {
          websitesHandler(0.55);
        } else {
          websitesHandler(0.85);
        }
      }
    }, 650);
  };

  // Turn off the website bar animation for any device below tablet
  if (window.matchMedia("(min-width: 768px)").matches) {
    barAnimation();
  } else {
    websitesBar.style.height = 104 * 0.69 + "%";
    websiteCount.textContent = Math.floor(104);
  }
});

// Fix mobile touch on projects
setTimeout(() => {
  function mobileDetails() {
    if (window.matchMedia("(max-width: 991px)").matches) {
      $(".open-details").on("click touchend", function () {
        $(this).closest(".project-item").addClass("reveal-details");
      });
  
      $(".close-details").on("click touchend", function () {
        $(this).closest(".project-item").removeClass("reveal-details");
      });
    }
  }
  mobileDetails();
  $(window).on("load resize", function () {
    mobileDetails();
  });
}, 500);

