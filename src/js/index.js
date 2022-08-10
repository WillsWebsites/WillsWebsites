let headerHeight;
console.log(headerHeight, 'initial');

const getHeaderHeight = function () {
    headerHeight = document.querySelector("header").getBoundingClientRect().height;
    console.log(headerHeight, 'run function');
    return headerHeight
};

$(document).ready(function() {
  getHeaderHeight()
  console.log('executed')
});
const init = function() {
  $('<div id="headerView" aria-hidden="true"/>').prependTo("body");
  getHeaderHeight();
}
init();

//Observer options
const resizeOptions = {
  threshold: 1,
};

//Activate observer for added item
const resizeObserver = new IntersectionObserver((entries) => {
  entries.forEach(function callbackFN(entry) {
    //Once visible
    if (entry.isIntersecting) {
      document.getElementsByClassName("header")[0].classList.remove("scrolled"); //remove when item is visible
    } else {
      document.getElementsByClassName("header")[0].classList.add("scrolled"); //Add when item is not visible
    }
  });
}, resizeOptions);
resizeObserver.observe(document.querySelector("#headerView"));

// Fix header scrolling on anchor tag
$(document).ready(function () {
  const headerHeight = getHeaderHeight();
  console.log(headerHeight, 'main')

  $('main').css('padding-top', headerHeight)
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
          scrollTop: $(hash).offset().top - headerHeight,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});


//On load of site going to the anchor tag
$(window).on('pageshow',function(){ 
  const hash = window.location.hash
  
  if (hash == '' || hash == '#' || hash == undefined) return false;
    const target = $(hash);
  
    if (target.length) {
    let headerHeight = getHeaderHeight();
    $('html,body').stop().animate({
        scrollTop: target.offset().top - headerHeight //offsets for fixed header
        }, {
        complete: function() { //ensures that it goes all the way to the anchor link
            headerHeight = getHeaderHeight();
            if(document.body.scrollTop != headerHeight || document.documentElement.scrollTop != headerHeight){
                $('html,body').animate({
                    scrollTop: target.offset().top - headerHeight //offsets for fixed header
                }, 1);
            }
            $('html,body').stop(true, true);
        }
    });
  }
});