//check URL parameter and get id & theme value
const searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams.has('id')); // true
console.log(searchParams.get('id')); // id value
console.log(searchParams.get('theme')); // theme value
console.log(searchParams.get('name')); // character name value
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
                //output character data in div card
                var characterData1 = $('<div>').addClass('info-card hero-info');
                var charImage = $('<img id="charImg">').attr('src', data.image.url).attr('title', data.name).attr('alt', 'Character Image');
                var charName = $("<h3>Character Name: ").text(data.name);
                var fullName = data.biography['full-name'];
                var charFullName = $("<h4>Full Name: ").text(fullName);
                var placeOfBirth = data.biography['place-of-birth'];
                var city = $("<p>").text("Place of Birth: " + placeOfBirth);
                characterData1.append(charImage).append(charName).append(charFullName).append(city);
                $('#characterInfoBox').append(characterData1);
              // $('#characterInfoBox').append(characterData1).append(characterData2);
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
getMovie();
//function to get data from OMDB API and display in Modal
function getMovie(data) {
    var movieResults = document.getElementById("movieResults");
    var APIKey = "c11badfe";
    var name = searchParams.get('name');
    var baseURL = "http://www.omdbapi.com/?t=";
    var apiOmdb = baseURL + name + "&apikey=" + APIKey;
    //var apiOmdb = "http://www.omdbapi.com/?t=Hulk&r=xml&apikey=c11badfe"
    //console.log(apiOmdb);
    fetch(apiOmdb).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                //output movie data inside modal
                var charImage = $('<img id="movieImg">').attr('src', data.Poster).attr('title', data.Title).attr('alt', 'Movie Poster').addClass('moviesImage');
                // var movieTitle = "<h3>" + data.Title + "</h3>";
                var modalContent = "<div class='movieInfo'><h4>" + data.Title + "</h4><p>Release Date: " + data.Released + "</p><p class='plot'>" + data.Plot + "</p><p>Awards: " + data.Awards + "</p><p>Rated: " + data.Rated + "</p><p>Directed By: " + data.Director + "</div>";
                $('#modalContent').append(charImage).append(modalContent);
            });
        }
    });
}
var movieReadMoreBtn = document.getElementById("myBtn");
//event listener for View Movie Button or myBtn
movieReadMoreBtn.addEventListener("click", function () {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
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