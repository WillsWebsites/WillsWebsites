// Scrolling section intersection observer

const resumeItems = document.querySelectorAll(".resume-item");
const categoryItems = document.querySelectorAll(".category-item");

const resumeReveal = function (entries) {
  entries.forEach(entry => {
    // If entry isn't intersecting then don't account for it
    if (!entry.isIntersecting) return;

    let current;

    // Remove start and active class to begin
    $(".category-item").removeClass("scroll--start");
    $(".category-item").removeClass("scroll--active");

    // Check for each item, add the active class to whichever is instersecting and set current variable to that item
    switch (true) {
      case entry.target.classList.contains("work"):
        $(".work").addClass("scroll--active");
        current = "work";
        break;
      case entry.target.classList.contains("education"):
        $(".education").addClass("scroll--active");
        current = "education";
        break;
      case entry.target.classList.contains("skills"):
        $(".skills").addClass("scroll--active");
        current = "skills";
        break;
      case entry.target.classList.contains("personal"):
        $(".personal").addClass("scroll--active");
        current = "personal";
        break;
    }

    // Remove the active class from each item that isn't the current one to make sure there is only one active at a time.
    // prettier-ignore
    $(`.category-item:not(.${current}), .resume-item:not(.${current})`).removeClass("scroll--active");
  });
};

const projectObserver = new IntersectionObserver(resumeReveal, {
  root: null,
  threshold: 1,
});

resumeItems.forEach(item => {
  projectObserver.observe(item);
});
