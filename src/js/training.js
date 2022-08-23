// Training project Modal
const modalHandler = function () {
  if (window.matchMedia("(min-width: 992px)").matches) {
    // Opening Modal and setting content
    const modal = $(".training-modal");
    const modalBg = $(".m-background");
    const modalClose = $(".m-close");
    let modalTitle = $(".m-title");
    let modalDescription = $(".m-description");
    let modalProject = $(".m-project");
    let modalRepo = $(".m-repo");
    let modalJS = $(".m-js");
    let modalReact = $(".m-react");

    const modalContentHandler = function (
      title,
      description,
      project,
      repo,
      builtWith
    ) {
      $('.m-build i').addClass('m-hidden');
      $(modalTitle).text(title);
      $(modalDescription).text(description);
      $(modalProject).attr('href', project);
      $(modalRepo).attr('href', repo);
      $(builtWith === 'JS' ? modalJS : modalReact).removeClass('m-hidden');
    };

    $(".training-item").click(function (e) {
      $(modal).addClass("modal-opened");

      switch (true) {
        case $(e.target).closest(".training-item").hasClass("guess-number"):
          modalContentHandler(
            "Guess Number",
            "The primary use would be to...",
            "JS"
          );
          break;
        case $(e.target).closest(".training-item").hasClass("pig-game"):
          modalContentHandler(
            "Pig Game",
            "The primary use would be to...",
            "./pig-game.html",
            "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/pig-game",
            "JS"
          );
          break;
      }
    });

    // Closing Modal and clearing content

    const hideModal = function () {
      $(modal).removeClass("modal-opened");
      $(modalTitle).text("");
      $(modalDescription).text("");
    };
    $(modalClose).click(hideModal);
    $(modalBg).click(hideModal);
  }
};
modalHandler();

$(window).resize(modalHandler);
