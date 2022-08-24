// Training project Modal
const modalHandler = function () {
  if (window.matchMedia('(min-width: 992px)').matches) {
    // Opening Modal and setting content
    const modal = $('.training-modal');
    const modalBg = $('.m-background');
    const modalClose = $('.m-close');
    let modalTitle = $('.m-title');
    let modalDescription = $('.m-description');
    let modalProject = $('.m-project');
    let modalRepo = $('.m-repo');
    let modalJS = $('.m-js');
    let modalReact = $('.m-react');

    // Adding the content to the modal for whichever project is selected
    const modalContentHandler = function (title, description, project, repo, builtWith) {
      $('.m-build i').addClass('m-hidden');
      $(modalProject).addClass('m-hidden');
      $(modalTitle).text(title);
      $(modalDescription).text(description);
      $('.m-project.m-project-' + project).removeClass('m-hidden');
      $(modalRepo).attr('href', repo);
      $(builtWith === 'JS' ? modalJS : modalReact).removeClass('m-hidden');
    };

    $('.training-item').click(function (e) {
      $(modal).addClass('modal-opened');

      switch (true) {
        case $(e.target).closest('.training-item').hasClass('number-guesser'):
          modalContentHandler(
            'Number Guesser',
            `A simple single player game where you try and guess a random number in the fewest attempts possible. Maybe if you're lucky you can get it first try?`,
            'number-guesser',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/number-guesser',
            'JS'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('one-n-done'):
          modalContentHandler(
            `One-N'-Done`,
            'The primary use would be to...',
            'one-n-done',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/one-n-done',
            'JS'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('bankist'):
          modalContentHandler(
            'Bankist',
            'The primary use would be to...',
            'bankist',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/bankist',
            'JS'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('bankist2'):
          modalContentHandler(
            'Bankist2',
            'The primary use would be to...',
            'bankist2',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/bankist2',
            'JS'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('mapty'):
          modalContentHandler(
            'Mapty',
            'The primary use would be to...',
            'mapty',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/mapty',
            'JS'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('forkify'):
          modalContentHandler(
            'Forkify',
            'The primary use would be to...',
            'forkify',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/forkify',
            'JS'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('expense-tracker'):
          modalContentHandler(
            'Expense Tracker',
            'The primary use would be to...',
            'expense-tracker',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/expense-tracker',
            'React'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('food-order'):
          modalContentHandler(
            'Food Order',
            'The primary use would be to...',
            'food-order',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/food-order',
            'React'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('dashboard'):
          modalContentHandler(
            'Dashboard',
            'The primary use would be to...',
            'dashboard',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/dashboard',
            'React'
          );
          break;
      }
    });

    // Closing Modal and clearing content

    const hideModal = function () {
      $(modal).removeClass('modal-opened');
      $(modalTitle).text('');
      $(modalDescription).text('');
      $(modalRepo).removeAttr('href');
    };
    $(modalClose).click(hideModal);
    $(modalBg).click(hideModal);
  }
};
modalHandler();

$(window).resize(modalHandler);
