"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const loadingEl = document.querySelector('.search-loading');
const searchField = document.querySelector('.search-field');
const search = document.querySelector('.search');
const errorMsg = document.querySelector('.error-message');

const renderCountry = function (data, className = "") {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} million people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
          </div>
      </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (message) {
  const errorHtml = `
    <p class="error-message">${message}<br />Please Try Again</p>`;

  countriesContainer.insertAdjacentHTML("afterend", errorHtml);
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = (country) => {
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];
      if (!neighbor) throw new Error("No Neighboring Country Found");
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        "Neighboring country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 😩`);
      renderError(`Something went wrong: ${err.message.toLowerCase()}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('germany');
// });

//////////////////////////////////////////////////////////

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then((pos) => {
    return pos;
  })
  .catch((err) => {
    console.error(err);
  });

const whereAmI = async function (country) {
  try {
    loadingEl.classList.add('is-loading');

    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //prettier-ignore
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en)`);
    if (!resGeo.ok) throw new Error(`Couldn't retrieve data`);
    const dataGeo = await resGeo.json();

    const countryElements = document.querySelectorAll(".country");
    Array.from(countryElements).forEach((countryEl, i) => {
      i <= 1 ? countryEl.classList.add("hidden-first") : "";
      setTimeout(() => {
        i <= 1 ? countryEl.style.display = "none" : '';
      }, 500)
    });

    

    getCountryData(dataGeo.countryName);
    countriesContainer.style.opacity = 1;
    loadingEl.classList.remove('is-loading');

    return dataGeo.countryName;
  } catch (err) {
    console.log(err);
    renderError(`Bad ${err}`);
  }
};
btn.addEventListener("click", whereAmI);

const getACountry = async function (country) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${country}`),
    ]);
    getCountryData(country);
  } catch {
    console.error(err);
  }
};

getACountry("portugal");

search.addEventListener('submit', function(e) {
  console.log(e)
  e.preventDefault();
  getCountryData(searchField.value);
  searchField.value = '';
});