var superHero = document.querySelector("#hero-name")
var heroImage = document.querySelector('#hero-image')
var realName = document.querySelector("#real-name")
var originCity = document.querySelector("#city")







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
<<<<<<< HEAD
  var heroRealName = hero.biography['full-name']
=======
  var heroRealName = hero.biography.publisher
>>>>>>> 2a6320c0d97c9616836a207d8b97b65d001c28d7
  var heroOriginCity = hero.work.base
  var imageHero = hero.image.url
  
  superHero.textContent = heroName
  realName.textContent = heroRealName
  originCity.textContent = heroOriginCity
  heroImage.textContent = imageHero
};

getApi();