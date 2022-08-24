// Training project Modal
const modalHandler = function () {
  if (window.matchMedia('(min-width: 992px)').matches) {
    // Opening Modal and setting content
    const modal = $('.training-modal');
    const modalBg = $('.m-background');
    const modalClose = $('.m-close');
    let modalTitle = $('.m-title');
    let modalDescription = $('.m-description');
    let modalInstructions = $('.m-instructions');
    let modalTakeaways = $('.m-takeaways');
    let modalProject = $('.m-project');
    let modalRepo = $('.m-repo');
    let modalJS = $('.m-js');
    let modalReact = $('.m-react');

    // Adding the content to the modal for whichever project is selected
    // prettier-ignore
    const modalContentHandler = function (title, description, project, repo, builtWith) {
      $('.m-build i').addClass('m-hidden');
      $(modalProject).addClass('m-hidden');
      $(modalTitle).text(title);
      $(modalDescription).text(description[0]);
      $(modalInstructions).text(description[1]);
      $(modalTakeaways).text(description[2]);
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
            [
              `A simple single player game where you try and guess a random number in the fewest attempts possible. Maybe if you're lucky you can get it first try?`,
              `Guess a number between 1-20. You will then find out if your guess is too high or too low from the wording on the right. Each time you guess incorrectly, your score will decrease. Once you guess the correct number your score will be kept and you can try again to beat it. How good of a score can you get?`,
              `How to implement logic based on user feedback and display them to the DOM.`,
            ],
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
            [
              `A convenient recipe finder that you can use to discover and save tasty new recipes.`,
              `Search recipes by typing a type of food into the search bar. Click through the options to view the recipes. You can also increase the servings and even bookmark your favorite recipes. If you want to add your own recipes you can do that as well!`,
              `How to write a more complex application using MVC architecture. Connecting with an API for GET and POST requests and working with promises. Further learned how to use external libraries such as Fracty.`,
            ],
            'forkify',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/forkify',
            'JS'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('expense-tracker'):
          modalContentHandler(
            'Expense Tracker',
            [
              `An application to keep track of outgoing expenses and sort them by year.`,
              `There are already a few sample expense items so you can see how it functions. Add as many other expenses as you'd like into the tracker and then sort them by year to keep things organized.`,
              `How to work with React components. Focused on structuring the component tree to keep things organized while still being accessible. Passed data through multiple components using props.`,
            ],
            'expense-tracker',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/expense-tracker',
            'React'
          );
          break;
        case $(e.target).closest('.training-item').hasClass('wills-meals'):
          modalContentHandler(
            'Food Order',
            'The primary use would be to...',
            'wills-meals',
            'https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/wills-meals',
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
