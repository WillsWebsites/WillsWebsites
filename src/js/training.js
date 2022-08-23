// Training project Modal
const modalHandler = function () {
  if (window.matchMedia('(min-width: 992px)').matches) {
    // Opening Modal and setting content
    const modal = $('.training-modal');
    const modalBg = $('.m-background');
    const modalClose = $('.m-close');
    let modalTitle = $('.m-title');
    let modalDescription = $('.m-description');

    $('.training-item').click(function (e) {
      $(modal).addClass('modal-opened');

      if ($(e.target).hasClass('guess-number')) {
        $(modalTitle).text('Guess Number');
        $(modalDescription).text('The primary use would be to...');
      }
    });

    // Closing Modal and clearing content

    const hideModal = function () {
      $(modal).removeClass('modal-opened');
      $(modalTitle).text('');
      $(modalDescription).text('');
    };
    $(modalClose).click(hideModal);
    $(modalBg).click(hideModal);
  }
};
modalHandler();

$(window).resize(modalHandler);
