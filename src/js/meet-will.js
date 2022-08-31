// Scrolling section intersection observer

const resumeItems = document.querySelectorAll(".resume-item");
const categoryItems = document.querySelectorAll(".category-item");

const resumeReveal = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.remove("scroll--active");

    if (!entry.isIntersecting) return;

    $('.work').removeClass('scroll--start');
    
    categoryItems.forEach((item) => {
      console.log(`1. ${entry.target.classList[1]}`)
      if (item.classList.contains(`${entry.target.classList[1]}`)) {
        console.log(`2. Added ${entry.target.classList[1]}`)
        item.classList.add("scroll--active");
      } else {
        console.log(`3. removed ${item}`)
        item.classList.remove("scroll--active");
      }
    });

    entry.target.classList.add("scroll--active");
  });
};

const projectObserver = new IntersectionObserver(resumeReveal, {
  root: null,
  threshold: .9,
});

resumeItems.forEach((item, i) => {
  item.classList.remove("scroll--active");
  item.secIndex = i;
  projectObserver.observe(item);
});
