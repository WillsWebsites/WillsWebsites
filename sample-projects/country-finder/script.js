'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// Coding Challenges
/* Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time 

Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).

2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating 

3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”

4. Chain a .catch method to the end of the promise chain and log errors to the
console

5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message

PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.

7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)

Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474 */

// const whereAmI = function (lat, lng) {
//   //prettier-ignore
//   fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `There is an error getting connecting to country data ${response.status}`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city} ${data.countryName}`, data);
//       getCountryData(data.countryName)
//     })
//     .catch(err => {
//       console.error(`Very Very bad error ${err}`)
//     });
// };
// whereAmI('52.508', '13.381');
// whereAmI('19.037', '72.873');
// whereAmI('-33.933', '18.474');

/* Coding Challenge #2

For this challenge you will actually have to watch the video! Then, build the image
loading functionality that I just showed you on the screen.
Your tasks:

Tasks are not super-descriptive this time, so that you can figure out some stuff by
yourself. Pretend you're working on your own

PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path

2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise

3. If this part is too tricky for you, just watch the first part of the solution

PART 2
4. Consume the promise using .then and also add an error handler

5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier

6. After the 2 seconds have passed, hide the current image (set display CSS
property to 'none'), and load a second image (Hint: Use the image element
returned by the 'createImage' promise to hide the current image. You will
need a global variable for that 😉)

7. After the second image has loaded, pause execution for 2 seconds again

8. After the 2 seconds have passed, hide the current image

Test data: Images in the img folder. Test the error handler by passing a wrong
image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
otherwise images load too fast */

// const imageContainer = document.querySelector('.images');
// let currentImage;

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement('img');
//     image.src = imgPath;
//     image.addEventListener('load', function () {
//       imageContainer.append(image);
//       currentImage = image;
//       resolve(image);
//     });
//     image.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log(img)
//     return wait(2)
//   })
//   .then(() => {
//       currentImage.style.display = 'none';
//       createImage('img/img-2.jpg');
//       return wait(2);
//   })
//   .then(() => {
//       currentImage.style.display = 'none';
//       createImage('img/img-3.jpg');
//       return wait(5);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     createImage('img/img-1.jpg')
//   })
//   .catch(err => {
//     console.error(err);
//   });

//   function countBy(x, n) {
//     let z = [];
//     for (let i = x; i <= n; i+= x){
//       z.push(i);
//     }
//     return z;
//   }
// console.log(countBy(2, 10))

/* Coding Challenge #3

Your tasks:

PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before)

2. Compare the two versions, think about the big differences, and see which one
you like more

3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab

PART 2
1. Create an async function 'loadAll' that receives an array of image paths
'imgArr'

2. Use .map to loop over the array, to load all the images with the
'createImage' function (call the resulting array 'imgs')

3. Check out the 'imgs' array in the console! Is it like you expected?

4. Use a promise combinator function to actually get the images from the array

5. Add the 'parallel' class to all the images (it has some CSS styles)

Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', */





// const imageContainer = document.querySelector('.images');

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement('img');
//     image.src = imgPath;
//     image.addEventListener('load', function () {
//       imageContainer.append(image);
//       resolve(image);
//     });
//     image.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// const loadNPause = async function() {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     await wait(2)

//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     await wait(2);

//     img.style.display = 'none';
//     img = await createImage('img/img-3.jpg');
//     await wait(5);

//     img.style.display = 'none';
//     await createImage('img/img-1.jpg');
//   } catch (err) {
//     console.error(err);
//   }
// }
// btn.addEventListener('click', loadNPause);

// const loadAll = async function(imgArr) {
//   try {
//     const imgs =  imgArr.map(async img => {
//        return await createImage(img);
//     });
//     const imgElements =  await Promise.all(imgs);
//     imgElements.forEach(img => img.classList.add('parallel'))
//   } catch (err) {
//     console.error(err)
//   }
// }
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);







///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

const renderCountry = function (data, className = '') {
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
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//         </div>
//     </article>`;

//     console.log(data.languages);

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');

// const getCountryAndNeighbor = function (country) {
//     const request = new XMLHttpRequest();

//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//         renderCountry(data);

//         //Get neighbor
//         const [neighbor] = data?.borders;
//         const request2 = new XMLHttpRequest();

//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//         request2.send();
//         request2.addEventListener('load', function () {
//           const data2 = JSON.parse(this.responseText);
//           renderCountry(data2, 'neighbour')
//     });
//   });
// };

//   getCountryAndNeighbor('usa');

// Promises

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = country => {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];
      if (!neighbor) throw new Error('No Neighboring Country Found');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Neighboring country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 😩`);
      renderError(`something went wrong ${err.message}😩`);
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
  .then(pos => {
    return pos;
  })
  .catch(err => {
    console.error(err);
  });

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitutde: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(
          `There is an error getting connecting to country data ${response.status}`
        );
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city} ${data.countryName}`, data);
      getCountryData(data.countryName);
    })
    .catch(err => {
      console.error(`Very Very bad error ${err}`);
    });
};

btn.addEventListener('click', whereAmI);

// const whereAmI = async function (country) {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //prettier-ignore
//     const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en)`);
//     if (!resGeo.ok) throw new Error(`Couldn't retrieve data`);
//     const dataGeo = await resGeo.json();

//     //prettier-ignore
//     const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
//     const data = await res.json();
//     renderCountry(data[0]);
//     countriesContainer.style.opacity = 1;
//     return dataGeo.countryName
//   } catch (err) {
//     console.log(err);
//     renderError(`Bad ${err}`);
//   }
// }

// console.log(1);


// (async function() {
//   try {
//     const city = await whereAmI();
//     console.log(`2 ${city}`)
//   } catch (err) {
//     console.error(`3 ${err.message}`)
//   }
//   console.log(`3 all finished up`);
// })();
// btn.addEventListener('click', whereAmI);

// const get3Countries = async function(c1, c2, c3) {
//   try {
//     const  data = await Promise.all([getJSON(`https://restcountries.com/v2/name/${c1}`),
//     getJSON(`https://restcountries.com/v2/name/${c2}`),
//     getJSON(`https://restcountries.com/v2/name/${c3}`)]);
//     console.log(data.map(d => d[0].capital))
//   } catch {
//     console.error(err)
//   }
// }

// get3Countries('portugal', 'canada', 'usa')

