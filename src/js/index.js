// Get header height for anchor support
let headerHeight = document.querySelector('.header').getBoundingClientRect().height;

const getHeaderHeight = function() {
  headerHeight = document.querySelector('.header').getBoundingClientRect().height;
  return headerHeight;
}

const clickHandler = function(target) {
  if (target.length) {
    headerHeight = getHeaderHeight();
    $('html,body').stop().animate({
      // offsets for fixed header
      scrollTop: target.offset().top - headerHeight
      }, {
        // ensures that it goes all the way to the anchor link
        complete: function() {
          headerHeight = getHeaderHeight();
          //prettier-ignore
          if(document.body.scrollTop !== headerHeight || document.documentElement.scrollTop !== headerHeight) {
            $('html,body').animate({
              // offsets for fixed header
              scrollTop: target.offset().top - headerHeight
            }, 1);
          }
          $('html,body').stop(true, true);
        }
    });
  }
}

document.querySelector('main').style.paddingTop = `${headerHeight}px`;

//Anchor tag click implementation
$('a[href*="#"]:not([href="#"])').click(function (e) {
  const urlPath = this.href.substring(0, this.href.indexOf('#')); // url wthout hash
  let locationPath = location.href;

  if (locationPath.includes('#')) {
    locationPath = location.href.substring(0, location.href.indexOf('#')); // url wthout hash
  }
  // If the urls are the same then do the anchor animation
  if (urlPath == locationPath) {
    const target = $(this.href.substring(this.href.indexOf("#")));
    clickHandler(target);
  }
  // Close mobile nav for on page anchors, if clicked in the navigation
  if($(this).closest('ul').hasClass('menu-list')) {
    $('input[type="checkbox"]').trigger("click");
  }
});

// Go to the anchor tag on site load
$(window).on('pageshow',function() { 
  const hash = window.location.hash;

  //prettier-ignore
  if (hash == '' || hash == '#' || hash == undefined) return false;

  const target = $(hash);
  clickHandler(target);
});

// Header observer
$('<div id="headerView" aria-hidden="true"/>').prependTo('body');
const headerView = document.getElementById('headerView');

const headerOptions = {
  threshold: 1,
  rootMargin: '50px'
};

const headerReveal = ([entry]) => {
    if (entry.isIntersecting) {
      $('.header').removeClass('scrolled');
    } else {
      $('.header').addClass('scrolled');
    }
  };

const headerObserver = new IntersectionObserver(headerReveal, headerOptions);

headerObserver.observe(headerView);