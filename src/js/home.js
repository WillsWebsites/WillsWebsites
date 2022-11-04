// Adding class to Home blobs on touchend to make sure background color is always filled in on touch

if (window.matchMedia("(max-width: 991px)").matches) {
  $(".hero-right .blob-btn").on("click touchstart", function (e) {
    $(".blob-btn").removeClass("blob--active");
    $(this).closest(".blob-btn").addClass("blob--active");
  });
}
