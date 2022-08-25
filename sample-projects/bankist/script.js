'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open Modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Starting Lectures

// Functions
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomRgb = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

// Event Handlers
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Option that isn't as efficient because it adds function to each item
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

//More efficient solution because of event delegation, add event listener to common parent, then determine what element in there caused the event
// Smooth Scrolling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link') && !e.target.classList.contains('btn--show-modal')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Operations tab functionality
tabsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('operations__tab')) {
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    e.target.classList.add('operations__tab--active');

    //Show tab content
    const tabNumber = e.target.dataset.tab;
    tabsContent.forEach(function (tab) {
      tab.classList.remove('operations__content--active');
    });
    document
      .querySelector(`.operations__content--${tabNumber}`)
      .classList.add('operations__content--active');
  }
});

//Changing opacity Function
const navHoverHandler = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');

    siblings.forEach(sib => {
      if (sib !== link) sib.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', navHoverHandler.bind(0.5));
nav.addEventListener('mouseout', navHoverHandler.bind(1));

//Add class with scroll event listener, not recommended
// const sectionCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY >= sectionCoords.top) nav.classList.add('sticky')
//   else (nav.classList.remove('sticky'));
// });

//Intersection Observers

//Sticky Header
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//Section Reveal
const allSections = document.querySelectorAll('.section');

const sectionReveal = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//Lazy Load images
const images = document.querySelectorAll('img[data-src]');

const imageReveal = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    switch (true) {
      case entry.target.alt === 'Computer':
        entry.target.src = new URL("./img/digital.jpg", import.meta.url);
        break;
      case entry.target.alt === 'Plant':
        entry.target.src = new URL("./img/grow.jpg", import.meta.url);
        break;
      case entry.target.alt === 'Credit card':
        entry.target.src = new URL("./img/card.jpg", import.meta.url);
        break;
    }
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
};

const imageObserver = new IntersectionObserver(imageReveal, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

images.forEach(img => imageObserver.observe(img));

// Rotator
const rotator = function () {
  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    dotContainer
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    dotContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(function (s, i) {
      s.style.transform = `translate(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    currentSlide++;
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  const prevSlide = function () {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = maxSlide - 1;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const initRotator = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  initRotator();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
rotator();
