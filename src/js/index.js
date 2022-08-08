// Header intersection observer - add class scrolled once scrolled
const header = document.querySelector('.header');

const headerReveal = function (entry, headerObserver) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('hidden');
    headerObserver.unobserve(entry.target);
}

const headerObserver = new IntersectionObserver(headerReveal, {
  root: null,
  threshold: .2,
});

header.classList.add('hidden');
headerObserver.observe(header);

// const observer = new IntersectionObserver(
//   ([entry]) => {
//     if (entry.boundingClientRect.top < 0) {
//       if (entry.isIntersecting) {
//         // entered viewport at the top edge, hence scroll direction is up
//       } else {
//         // left viewport at the top edge, hence scroll direction is down
//       }
//     }
//   },
//   {
//     root: rootElement,
//   },
// );



// Fix header scrolling on anchor tag
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1200,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
