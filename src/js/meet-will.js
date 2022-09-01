// Scrolling section intersection observer

const resumeItems = document.querySelectorAll(".resume-item");
const categoryItems = document.querySelectorAll(".category-item");

const resumeReveal = function (entries) {
  entries.forEach((entry) => {
    // If entry isn't intersecting then don't account for it
    if (!entry.isIntersecting) return;

    window.onscroll = function(e) {

      // If scrolling down
      if (this.oldScroll < this.scrollY) {
        switch(true) {
          case entry.target.classList.contains('work'):
            $('.category-item').removeClass('scroll--active');
            $('.work').addClass('scroll--active');
            break;
          case entry.target.classList.contains('education'):
            $('.category-item').removeClass('scroll--active');
            $('.education').addClass('scroll--active');
            $('.work').removeClass('scroll--active');
            break;
          case entry.target.classList.contains('skills'):
            $('.category-item').removeClass('scroll--active');
            $('.skills').addClass('scroll--active');
            $('.work').removeClass('scroll--active');
            $('.education').removeClass('scroll--active');
            break;
          case entry.target.classList.contains('personal'):
            $('.category-item').removeClass('scroll--active');
            $('.personal').addClass('scroll--active');
            $('.work').removeClass('scroll--active');
            $('.education').removeClass('scroll--active');
            $('.skills').removeClass('scroll--active');
            break;
        }
      } else {
        switch(true) {
          case entry.target.classList.contains('work'):
            $('.category-item').removeClass('scroll--active');
            $('.work').addClass('scroll--active');
            $('.education').removeClass('scroll--active');
            $('.skills').removeClass('scroll--active');
            $('.personal').removeClass('scroll--active');
            break;
          case entry.target.classList.contains('education'):
            $('.category-item').removeClass('scroll--active');
            $('.education').addClass('scroll--active');
            $('.skills').removeClass('scroll--active');
            $('.personal').removeClass('scroll--active');
            break;
          case entry.target.classList.contains('skills'):
            $('.category-item').removeClass('scroll--active');
            $('.skills').addClass('scroll--active');
            $('.personal').removeClass('scroll--active');
            break;
          case entry.target.classList.contains('personal'):
            $('.category-item').removeClass('scroll--active');
            $('.personal').addClass('scroll--active');
            break;
        }
      }

      this.oldScroll = this.scrollY;
    }

    // if (entry.isIntersecting) {
    //   entry.target.setAttribute("data-isin", "1");
    // } else entry.target.removeAttribute("data-isin");

    // if (!entry.isIntersecting) return;

    // // $('.category-item').removeClass('scroll--active')
    // for (i = 0; i < resumeItems.length; i++) {
    //   console.log(resumeItems[i]);
    //   if (resumeItems[i].getAttribute("data-isin")) {
    //     if (
    //       resumeItems[i - 1]?.hasAttribute("data-isin") ||
    //       resumeItems[i + 1]?.hasAttribute("data-isin")
    //     ) {
    //       resumeItems[i - 1]?.removeAttribute("data-isin");
    //       resumeItems[i + 1]?.removeAttribute("data-isin");
    //     }
    //     resumeItems[i].setAttribute("data-isin", "1");
    //     break;
    //   }
    // }


    // entry.target.classList.add("scroll--active");
  });
};

const projectObserver = new IntersectionObserver(resumeReveal, {
  root: null,
  threshold: 1,
});

resumeItems.forEach((item, i) => {
  item.classList.remove("scroll--active");
  item.secIndex = i;
  projectObserver.observe(item);
});
