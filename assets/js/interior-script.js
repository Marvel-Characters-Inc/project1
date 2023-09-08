var superHero = document.querySelector("#hero-name")
var realName = document.querySelector("#real-name")
var originCity = document.querySelector("#city")







document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    // specify options here
  });
});


function getApi() {
  var requestUrl = 'https://superheroapi.com/api.php/3008242709313318/659';
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
  var heroRealName = hero.biography['full-name']
  var heroOriginCity = hero.work.base
  
  superHero.textContent = heroName
  realName.textContent = heroRealName
  originCity.textContent = heroOriginCity

};

getApi();