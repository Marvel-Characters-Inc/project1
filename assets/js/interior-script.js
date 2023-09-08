var superHero = document.querySelector("#hero-name")
var heroImage = document.querySelector('#hero-image')
var realName = document.querySelector("#real-name")
var originCity = document.querySelector("#city")
var movieOneTitle = document.querySelector("#movie-one-title")
var movieTwoTitle = document.querySelector("#movie-two-title")
var movieThreeTitle = document.querySelector("#movie-three-title")





document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    // specify options here
  });
});


function getApi() {
  var requestUrl = 'https://superheroapi.com/api.php/3008242709313318/346';
  var chosenCharacter = ''
  var apiUrl = 'https://superheroapi.com/api.php/3008242709313318/' + chosenCharacter;
  fetch(requestUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayCharInfo(data)
          console.log(data)
        })
      }
    })
};




var displayCharInfo = function (hero) {
  var heroName = hero.name
  var heroRealName = hero.biography.publisher
  var heroOriginCity = hero.work.base
  var characterImage = hero.image.url


  superHero.textContent = heroName
  realName.textContent = heroRealName
  originCity.textContent = heroOriginCity
  heroImage.innerHTML = characterImage

};


function getMovieApi() {
  var requestMovieUrl = 'https://api.themoviedb.org/3/search/movie?query=Thor&api_key=fc9331fe648135305ebb2f55e0d07da3';
  fetch(requestMovieUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayCharMovieOne(data.results[0])
          displayCharMovieTwo(data.results[1])
          displayCharMovieThree(data.results[2])
        })
      }
    })
};


var displayCharMovieOne = function (movie) {
  var movOneTitle = movie.original_title

  movieOneTitle.textContent = movOneTitle
}

var displayCharMovieTwo = function (movie) {
  var movTwoTitle = movie.original_title

  movieTwoTitle.textContent = movTwoTitle
}

var displayCharMovieThree = function (movie) {
  console.log(movie.original_title)
  var movThreeTitle = movie.original_title

  movieThreeTitle.textContent = movThreeTitle
}

getApi();

getMovieApi();