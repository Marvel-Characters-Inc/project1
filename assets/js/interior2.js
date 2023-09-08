//check URL parameter and get id value
const searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams.has('id')); // true
console.log(searchParams.get('id')); // id value

//define variables
var APIKey = "10104712034177731";
var characterID = searchParams.get('id');
var baseURL = "https://www.superheroapi.com/api.php/"

//assign variables for containers
var characterInfoBox = document.getElementById("characterInfoBox");

//store character ID value in localstorage
//localStorage.setItem("characterID", characterID);

//getCharacterData from API
function getCharacterData() {
    var apiSuperHero = baseURL + APIKey + "/" + characterID;

    fetch(apiSuperHero).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          //output character data in divs
          var characterData1 = $('<div>');
            characterData1.addClass('info-card row');
            //var charName = $("<h4>").text(data.name);
            var charImage = $('<img id="charImg">').attr('src', data.image.url).attr('title', data.name).attr('alt', 'Character Image');

            characterData1.append(charImage);

            var characterData2 = $('<div>');
            characterData2.addClass('hero-info col s7');
            var charName = $("<h3>").text(data.name);
            //var fullName = data.biography.full-name;
            //var city = data.biography.place-of-birth;

            //characterData2.append(charName).append(fullName).append(city);

            characterData2.append(charName);

      $('#characterInfoBox').append(characterData1).append(characterData2);
        });
      }
    });
  }
  getCharacterData();

  //event listener for header banner
heroImage.addEventListener("click", function () {
    location.reload();
    localStorage.clear();
    window.location.href = "index.html";
  });

  //modal function
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      // specify options here
    });
  });