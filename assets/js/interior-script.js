var superHero = document.querySelector("#hero-name")
var heroImage = document.querySelector('#hero-image')
var realName = document.querySelector("#real-name")
var originCity = document.querySelector("#city")
var movieOneTitle = document.querySelector("#movie-one")







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
  


  superHero.textContent = heroName
  realName.textContent = heroRealName
  originCity.textContent = heroOriginCity

};


function getMovieApi() {
  var requestMovieUrl = 'https://api.themoviedb.org/3/search/movie?query=Thor&api_key=fc9331fe648135305ebb2f55e0d07da3';
  fetch(requestMovieUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data)
          displayCharMovie()
          
        })
      }
    })
};

var displayCharMovie = function (movie) {
var movieOne = movie.page[0].results[0].original_title



movieOneTitle.textContent = movieOne



}

getApi();

getMovieApi();