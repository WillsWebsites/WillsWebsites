import * as model from './model.js';
import { MODAL_CLOSE_SECONDS } from './config.js';
import RecipeView from './views/RecipeView.js';
import SearchView from './views/SearchView.js';
import ResultsView from './views/ResultsView.js';
import BookmarksView from './views/BookmarksView.js';
import PageView from './views/PageView.js';
import AddRecipeView from './views/AddRecipeView.js';

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Load spinner
    RecipeView.renderSpinner();

    // Update results to mark selected search result
    ResultsView.update(model.getSearchResultsPage());

    // Update bookmarks
    BookmarksView.update(model.state.bookmarks);

    // Load recipe
    await model.loadRecipe(id);

    // Render recipe
    RecipeView.render(model.state.recipe);
  } catch (err) {
    RecipeView.renderError(`${err}😡`);
  }
};

const controlSearchResults = async function () {
  try {
    //Load spinner
    ResultsView.renderSpinner();

    // Get search query
    const query = SearchView.getQuery();
    if (!query) return ResultsView.renderError(this._errorMessage);

    // Load search results
    await model.loadSearchResults(query);

    // Render results
    ResultsView.render(model.getSearchResultsPage());

    // Render initial page buttons
    PageView.render(model.state.search);

    // Reset page to 1;

  } catch (err) {
    console.error(err);
  }
};

const controlPages = function (goToPage) {
  // Render new results
  ResultsView.render(model.getSearchResultsPage(goToPage));

  // Render new page buttons
  PageView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update recipe view
  // RecipeView.render(model.state.recipe);
  RecipeView.update(model.state.recipe);
}

const controlAddBookmark = function () {
  // Add or remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update recipe view
  RecipeView.update(model.state.recipe);

  // Render bookmarks
  BookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function() {
  BookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function(newRecipe) {
  try {
    // Show loading spinner
    AddRecipeView.renderSpinner();

    // Upload new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    RecipeView.render(model.state.recipe);

    // Display success message
    AddRecipeView.renderMessage();

    // Render Bookmark view
    BookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`)

    // Close form window
    setTimeout(() => {
      AddRecipeView.toggleWindow()
    }, MODAL_CLOSE_SECONDS * 1000);
  } catch (err) {
    console.error(err);
    AddRecipeView.renderError(err.message);
  }
  location.reload();
}

const init = function () {
  BookmarksView.addHandlerRender(controlBookmarks)
  RecipeView.addHandlerUpdateServings(controlServings);
  RecipeView.addHandlerAddBookmark(controlAddBookmark)
  RecipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults);
  PageView.addHandlerClick(controlPages);
  AddRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
