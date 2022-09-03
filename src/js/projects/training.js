// Training project Modal
const modalHandler = function () {
  // Opening Modal and setting content
  const modal = $(".training-modal");
  const modalBg = $(".m-background");
  const modalClose = $(".m-close");
  let modalTitle = $(".m-title");
  let modalDescription = $(".m-description");
  let modalInstructions = $(".m-instructions");
  let modalTakeaways = $(".m-takeaways");
  let modalProject = $(".m-project");
  let modalRepo = $(".m-repo");
  let modalJS = $(".m-js");
  let modalReact = $(".m-react");

  // Adding the content to the modal for whichever project is selected
  // prettier-ignore
  const modalContentHandler = function (title, description, project, repo, builtWith, credit, construction = false) {
      $('.m-build i').addClass('m-hidden');
      $(modalProject).addClass('m-hidden');
      $(modalTitle).text(title);
      $(modalDescription).text(description[0]);
      $(modalInstructions).text(description[1]);
      $(modalTakeaways).text(description[2]);
      $('.m-project.m-project-' + project).removeClass('m-hidden');
      $(modalRepo).attr('href', repo);
      $(builtWith === 'JS' ? modalJS : modalReact).removeClass('m-hidden');
      $(construction ? modal : '').addClass('modal-construction');

      if (credit === 'maximillian') {
        $('.m-credit h3').show();
        $('.m-credit-description').text('Project idea credit to Maximilian Schwarzmüller of');
        $('.m-credit-link').text('Academind').attr('href', 'https://academind.com/');
      } else if (credit === 'jonas') {
        $('.m-credit h3').show();
        $('.m-credit-description').text('Project idea credit to Jonas Schmedtmann of');
        $('.m-credit-link').text('Coding Heroes').attr('href', 'https://codingheroes.io/');
      } else {
        $('.m-credit h3').hide();
        $('.m-credit-description').text('');
        $('.m-credit-link').text('').removeAttr('href');
      }
    };

  const trainingInfoHandler = function (e) {
    switch (true) {
      case $(e.target).closest(".training-item").hasClass("forkify"):
        modalContentHandler(
          "Forkify",
          [
            `A convenient recipe finder that you can use to discover and save tasty new recipes.`,
            `Search recipes by typing a type of food into the search bar. Click through the options to view the recipes. You can also increase the servings and even bookmark your favorite recipes. If you have some recipes of your own, you can also add them and they will be automatically added as a bookmark.`,
            `How to write a more complex application using a MVC, object-oriented architecture. Handled resolved and rejected promises from POST and GET requests to a recipe API. Further learned how to use external libraries such as Fracty.`,
          ],
          "forkify",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/forkify",
          "JS",
          "jonas"
        );
        break;
      case $(e.target).closest(".training-item").hasClass("one-n-done"):
        modalContentHandler(
          `One-N'-Done`,
          [
            `A 2-player game to see who can get to 100 points first. But be careful, if you roll a 1 then any points you haven't held will be lost!`,
            `The goal is to be the first player to 100 points. You accumulate points by rolling the dice and then 'holding' those points. However if you roll a '1' then whatever points you haven't held will be lost and it will switch to the other players turn. Don't get too greedy!`,
            `How to manipulate things in the DOM based on random numbers. Tied in user input based on different portions of logic and provided feedback to the user.`,
          ],
          "one-n-done",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/one-n-done",
          "JS",
          "jonas"
        );
        break;
      case $(e.target).closest(".training-item").hasClass("country-finder"):
        modalContentHandler(
          "Country Finder",
          [
            `View data on the country you're in or search a country of your choice.`,
            `You have to enable location services for this application to work. A sample country with some data about the country is loaded in view to start. To search for that same information about the current country you're in, utilize the "Where am I?" box. To search for data on a specific country of your choice, utilize the "Search a Country" box.`,
            `How to deal with AJAX calls to an external API and handle both resolved and rejected promises. Also focused on handling user input to search for external data and ultimately have that data displayed to the DOM.`,
          ],
          "country-finder",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/country-finder",
          "JS",
          "jonas",
          true
        );
        break;
      case $(e.target).closest(".training-item").hasClass("bankist"):
        modalContentHandler(
          "Bankist",
          [
            `A mock banking website that neatly displays the company's details to help guide clients to open up an account.`,
            `Scroll through the website and interact with features such as the Operation section's "tab divider", or the Testimonial section's "rotator". You can also click on open an account buttons to mock sign up for an account (doesn't create a real account).`,
            `How to implement Lazy Loading images for increased speed and performance. Creating a tab divider content to display different pieces of content based on user selection. Creating a rotator to rotate through different slides of content.`,
          ],
          "bankist",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/bankist",
          "JS",
          "jonas"
        );
        break;
      case $(e.target).closest(".training-item").hasClass("number-guesser"):
        modalContentHandler(
          "Number Guesser",
          [
            `A simple single player game where you attempt to guess a random number in the fewest attempts possible.`,
            `Guess a number between 1-20. You will then find out if your guess is too high or too low from the wording on the right. Each time you guess incorrectly your score will decrease. Once you guess the correct number your score will be kept and you can try again to beat it. Maybe if you're lucky you can get it first try?`,
            `How to implement logic based on user feedback and adjust the DOM accordingly.`,
          ],
          "number-guesser",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/number-guesser",
          "JS",
          "jonas"
        );
        break;
      case $(e.target).closest(".training-item").hasClass("thread-bank"):
        modalContentHandler(
          "Thread Bank",
          [
            `An online banking application where you can mock transfer money to other accounts, request loans, and even close your account if you want (not actual transactions).`,
            `Get started by logging in using demo login credentials. Once inside you can request a loan which can take a few seconds to process, or you can transfer money by inputting another demo users information, or close your account by confirming your demo credentials. You can also sort the transactions in the list, and keep in mind it will log you out of your account after 10 minutes for security reasons!`,
            `How to write a more complex application with different areas of logic. Working with mock authentication, timers, sorting, and internationalization of formatting dates, currencies, and time.`,
          ],
          "thread-bank",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/thread-bank",
          "JS",
          "jonas"
        );
        break;
      case $(e.target).closest(".training-item").hasClass("wills-meals"):
        modalContentHandler(
          `Will's Meals`,
          [
            `A food ordering application that allows you to add items to your cart and adjust things in the cart.`,
            `Add items to your cart in whatever quanitites you'd like. Then you can access the cart and update any items if needed and all the totals will be calculated for you. Nothing happens when you checkout for now but more features to be added soon!`,
            `How to configure an app wide context for managing state. Creating items based on user input and needing to handle the side effects that happen as a result of working with form and user input.`,
          ],
          "wills-meals",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/wills-meals",
          "React",
          "maximillian"
        );
        break;
      case $(e.target).closest(".training-item").hasClass("expense-tracker"):
        modalContentHandler(
          "Expense Tracker",
          [
            `An application to keep track of outgoing expenses and sort them by year.`,
            `There are already a few sample expense items so you can see how it functions. Add as many other expenses as you'd like into the tracker and then sort them by year to keep things organized.`,
            `How to structure React components. Focused on structuring the component tree to keep things organized while still being accessible. Passed data through multiple components using props.`,
          ],
          "expense-tracker",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/expense-tracker",
          "React",
          "maximillian"
        );
        break;
      case $(e.target).closest(".training-item").hasClass("team-styler"):
        modalContentHandler(
          "Team Styler",
          [
            `A way to neatly display your team members and will eventually include various features to add more members and sections, and have a lot more adjustable settings.`,
            `As the project is under construction, for now you can click on the settings cog wheel on the upper right of any team section and then choose a team style to apply to the team members. You can also click on the add section button (+) to select a new section, although it will not add it to the section list for now. Many more features to come!`,
            `How to build a React application from scratch and structure/organize it in a convenient and reusable way. Also added a modal to adjust settings and apply css based on user input. Implemented various hooks and modern React features.`,
          ],
          "team-styler",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/team-styler",
          "React",
          "self",
          true
        );
        break;
      case $(e.target).closest(".training-item").hasClass("activity-tracker"):
        modalContentHandler(
          "Activity Tracker",
          [
            `A great way to keep track of fitness activites completed by location.`,
            `You have to enable location services for this application to work. Click somewhere on the map to add a location pin for your activity then fill out the appropriate information and hit enter. You will see your pin added to the map with the corresponding details. As this project is under construction there are various bugs to fix and features to be added.`,
            `How to work with an external library/API in a more complex, object-oriented structure. Rendered an interactive map that allows users to place pins based on location.`,
          ],
          "activity-tracker",
          "https://github.com/WillsWebsites/wills-websites/tree/main/sample-projects/activity-tracker",
          "JS",
          "jonas",
          true
        );
        break;
    }
  };

  $(".training-item").click(function (e) {
    if (window.matchMedia("(min-width: 992px)").matches) {
      $(modal).addClass("modal-opened");
      $("body").addClass("modal--disable");
      trainingInfoHandler(e);
    }
  });

  $(".training-item .btn").on("click touchend", function (e) {
    if (window.matchMedia("(max-width: 991px)").matches) {
      $(modal).addClass("modal-opened");
      $("body").addClass("modal--disable");
      trainingInfoHandler(e);
    }
  });

  // Closing Modal and clearing content

  const hideModal = function () {
    $("body").removeClass("modal--disable");
    $(modal).removeClass("modal-opened");
    $(modal).removeClass("modal-construction");
    $(modalTitle).text("");
    $(modalDescription).text("");
    $(modalRepo).removeAttr("href");
  };
  $(modalClose).click(hideModal);
  $(modalBg).click(hideModal);
};
modalHandler();

$(window).resize(modalHandler);
$(document).ready(function () {
  modalHandler();
});

// Training Projects Observer
const trainingProjects = document.querySelectorAll(".training-item");

const trainingReveal = function (entries, observer) {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("training-reveal");
    setTimeout(() => {
      entry.target.style.transitionDelay = "0s";
    }, 1000);

    // Tries to play the first two video elements on mobile and tablet. If there's an error (only error so far is IOS low power mode) then replace videos with images
    // $(".training-projects").addClass("video-error");

    // const imageSwapHandler = function(figure) {
    //   const forkifyStandard = new URL("../../img/projects/posters/forkify-standard.jpg", import.meta.url);
    //   const forkifyTall = new URL("../../img/projects/posters/forkify-tall.jpg", import.meta.url);
    //   const oneDone = new URL("../../img/projects/posters/one-n-done.jpg", import.meta.url);

    //   switch (true) {
    //     case $(figure).hasClass('forkify-standard'):
    //       $(figure).find('video').replaceWith(`<img src="${forkifyStandard}" alt="Forkify Preview" />`)
    //       break;
    //     case $(figure).hasClass('forkify-tall'):
    //       $(figure).find('video').replaceWith(`<img src="${forkifyTall}" alt="Forkify Preview" />`)
    //       break;
    //     case $(figure).parent().hasClass('one-n-done'):
    //       $(figure).find('video').replaceWith(`<img src="${oneDone}" alt="One N' Done Preview" />`)
    //       break;
    //   }
    // }

    // $('.training-item figure').each(function(){
    //   imageSwapHandler(this);
    // });
    if (window.matchMedia('(prefers-reduced-motion)').matches) return;
    
    if (i < 2) {
      entry.target
        .querySelector("video")
        .play()
        .then(() => {})
        .catch((err) => {
          $(".training-projects").addClass("video-error");
          console.error(err);
        });
    }

    observer.unobserve(entry.target);
  });
};

const trainingObserver = new IntersectionObserver(trainingReveal, {
  root: null,
  threshold: 0.2,
});

trainingProjects.forEach((project, i) => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    project.style.transitionDelay = `${Math.random().toFixed(4)}s`;
  } else {
    project.style.transitionDelay = `${i < 7 ? i * 0.1 : i * 0.07}s`;
  }
  trainingObserver.observe(project);
});

// Don't autoplay videos on reduce motion settings
const removeAutoplay = function() {
  if (window.matchMedia("(prefers-reduced-motion").matches) {
    $(".training-item video")
      .attr('preload', 'none')
      .removeAttr('muted')
      .removeAttr("autoplay")
      .removeAttr("loop")
      .removeAttr("playsinline");
    videos = document.querySelectorAll(".training-item video");
    for (video of videos) {
      video.pause();
    }
  }
}
removeAutoplay();

$(document).ready(function() {
  removeAutoplay();
});
$(window).resize(function() {
  removeAutoplay();
})
