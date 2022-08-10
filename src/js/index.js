// $('<div id="headerView" aria-hidden="true"/>').prependTo("body");

//Get Height of header
//Used for anchor support
var headerHeight = document.querySelector('.header').getBoundingClientRect().height;
console.log(headerHeight)
function getHeaderHeight(){
  var headerHeight = document.querySelector('.header').offsetHeight;
  console.log(headerHeight)
  return headerHeight;
}

document.querySelector('main').style.paddingTop = `${headerHeight}px`;



//Anchor tag implementation
//On click of anchor tag
$('a[href*="#"]:not([href="#"])').click(function (e) {
  var urlPath = this.href.substring(0, this.href.indexOf("#")); //url wthout hash
  var locationPath = location.href;
  if(locationPath.includes("#")){
    locationPath = location.href.substring(0, location.href.indexOf("#")); //url wthout hash
  }
  if(urlPath == locationPath){ //If the urls are the same then do the anchor animation
    var target = $(this.href.substring(this.href.indexOf("#")));
    if (target.length) {
      var headerHeight = getHeaderHeight();
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
  }
  // Close mobile nav for on page anchors, if clicked in the navigation
  if($(this).closest('ul').hasClass('c-topnav__container') || $(this).closest('ul').hasClass('c-topnav__submenu')){
    $('.js-navbar__toggle').trigger("click");
  }
});


//On load of site going to the anchor tag
$(window).on('pageshow',function(){ 
  var hash = window.location.hash
  if (hash == '' || hash == '#' || hash == undefined) return false;
  var target = $(hash);
  //target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    var headerHeight = getHeaderHeight();
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



// //Observer options
// const resizeOptions = {
//   threshold: 1,
// };

// //Activate observer for added item
// const resizeObserver = new IntersectionObserver((entries) => {
//   entries.forEach(function callbackFN(entry) {
//     //Once visible
//     if (entry.isIntersecting) {
//       document.getElementsByClassName("header")[0].classList.remove("scrolled"); //remove when item is visible
//     } else {
//       document.getElementsByClassName("header")[0].classList.add("scrolled"); //Add when item is not visible
//     }
//   });
// }, resizeOptions);
// resizeObserver.observe(document.querySelector("#headerView"));