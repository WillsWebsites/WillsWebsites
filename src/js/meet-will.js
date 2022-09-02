// Scrolling section intersection observer

const resumeItems = document.querySelectorAll(".resume-item");
const categoryItems = document.querySelectorAll(".category-item");

const resumeReveal = function (entries) {
  entries.forEach(entry => {
    // If entry isn't intersecting then don't account for it
    if (!entry.isIntersecting) return;
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    if (!window.matchMedia('(min-height: 700px)').matches) return

    let current;

    // Remove start and active class to begin
    $(".category-item, .resume-item").removeClass("scroll--start");
    $(".category-item, .resume-item").removeClass("scroll--active");

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




$(".page-meet-will .digital-resume a").on("load scroll touchend click resize", function () {
  const locationPath = this.href;

  if (window.matchMedia("(min-width: 992px)").matches &&
  window.matchMedia("(min-height: 701px)").matches) {
    if (this.href.length) {


      // const resumeItem = this.href.slice(this.href.indexOf('#') + 1);

      const pageCenter = ($(window).height() / 2);
      const target = $(this.href.substring(this.href.indexOf("#")));

      //prettier-ignore
      $('html,body').stop().animate({
        scrollTop: target.offset().top - pageCenter - 20
        }, {
          // ensures that it goes all the way to the anchor link
          complete: function() {
            //prettier-ignore
              $('html,body').animate({
                scrollTop: target.offset().top - pageCenter - 20
              }, 1);
            $('html,body').stop(true, true);
          }
      });
    }
  }

  if (
    window.matchMedia("(max-width: 991px)").matches ||
    (window.matchMedia("(min-width: 992px)").matches && window.matchMedia("(max-height: 700px)").matches)
  ) {
    switch (true) {
      case locationPath.includes("#work"):
        $(".category-item, .resume-item").removeClass("tab--active");
        $(".work").addClass("tab--active");
        break;
      case locationPath.includes("#education"):
        $(".category-item, .resume-item").removeClass("tab--active");
        $(".education").addClass("tab--active");
        break;
      case locationPath.includes("#skills"):
        $(".category-item, .resume-item").removeClass("tab--active");
        $(".skills").addClass("tab--active");
        break;
      case locationPath.includes("#personal"):
        $(".category-item, .resume-item").removeClass("tab--active");
        $(".personal").addClass("tab--active");
        break;
    }
  }
});