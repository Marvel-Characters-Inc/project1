//check URL parameter and get id & theme value
const searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams.has('id')); // true
console.log(searchParams.get('id')); // id value
console.log(searchParams.get('theme')); // theme value
//define variables
var APIKey = "10104712034177731";
var characterID = searchParams.get('id');
var theme = searchParams.get('theme');
var baseURL = "https://www.superheroapi.com/api.php/"
//assign variables for containers
var characterInfoBox = document.getElementById("characterInfoBox");
var newCharacterButton = document.getElementById("newCharacterButton");
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
            
            var fullName = data.biography['full-name'];
            var charFullName = $("<h4>").text(fullName);
            var placeOfBirth = data.biography['place-of-birth'];
            var city = $("<p>").text("City: " + placeOfBirth);
            characterData2.append(charName).append(charFullName).append(city);
            
            $('#characterInfoBox').append(characterData1).append(characterData2);
            //store character data to local storage
        localStorage.setItem("theme", theme);
        localStorage.setItem("characterID", characterID);
        localStorage.setItem("characterName", data.name);
        localStorage.setItem("characterFullName", fullName);
        localStorage.setItem("characterPlaceOfBirth", placeOfBirth);
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
    //event listener for newCharacterButton
newCharacterButton.addEventListener("click", function () {
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