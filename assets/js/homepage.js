//define API variables
var APIKey = "10104712034177731";
var baseURL = "https://www.superheroapi.com/api.php/"

//container variables
var ogAvengersContainer = document.getElementById("ogAvengersContainer");
var villainsContainer = document.getElementById("villainsContainer");
var sheroesContainer = document.getElementById("sheroesContainer");
var heroesContainer = document.getElementById("heroesContainer");

//theme image button variables
var ogAvengersBtn = document.getElementById("ogAvengersBtn");
var villainsBtn = document.getElementById("villainsBtn");
var sheroesBtn = document.getElementById("sheroesBtn");
var heroesBtn = document.getElementById("heroesBtn");
var heroImage = document.getElementById("heroImage");

//theme title variables
var ogAvengersTitle = document.getElementById("ogAvengersTitle");
var villainsTitle = document.getElementById("villainsTitle");
var sheroesTitle = document.getElementById("sheroesTitle");
var heroesTitle = document.getElementById("heroesTitle");

//theme variables
var theme1 = "ogavengers";
var theme2 = "villains";
var theme3 = "sheroes";
var theme4 = "heroes";

//event listener for theme = Og Avengers button
ogAvengersBtn.addEventListener("click", function (event) {
ogAvengersContainer.classList.remove("hide");
ogAvengersTitle.classList.remove("hide");
villainsContainer.classList.add("hide");
villainsTitle.classList.add("hide");
sheroesContainer.classList.add("hide");
sheroesTitle.classList.add("hide");
heroesContainer.classList.add("hide");
heroesTitle.classList.add("hide");

// Prevent the default behavior
event.preventDefault();
//store Theme value in localstorage
localStorage.setItem("theme", theme1);

//Function to pull OgAvengers Characters
//Theme 1 (OG Avengers) array should contain ids= Thor(659),Hulk(332),Iron Man (346), Captain America (149)

function getOgAvengers() {
var character1ID = "659";
var character2ID = "332";
var character3ID = "346";
var character4ID = "149";

// clears duplicate row for OG Avengers
$('#ogAvengersContainer').empty()
//Og Avengers character 1 Thor (ID: 659)
var apiSuperHero659 = baseURL + APIKey + "/" + character1ID;
fetch(apiSuperHero659).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id;
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg1">').attr('src', data.image.url).attr('title', 'Learn more about Thor').attr('alt', 'Thor Image');
characterData.append(charName).append(charImage);

$('#ogAvengersContainer').append(characterData);

//event listener for character 1 image click
var characterImageBtn = document.getElementById("charImg1");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
//link to interior page and append character id value in URL
window.location.href = "interior.html?id=" + charID + "&theme=" + theme1 + "&name=" + data.name;

//store character data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}

});
}
});

//Og Avengers character 2 Hulk (ID: 332)
var apiSuperHero332 = baseURL + APIKey + "/" + character2ID;
fetch(apiSuperHero332).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg2">').attr('src', data.image.url).attr('title', 'Learn more about Hulk').attr('alt', 'Hulk Image');
characterData.append(charName).append(charImage);
$('#ogAvengersContainer').append(characterData);

//event listener for character 2 image click
var characterImageBtn = document.getElementById("charImg2");

characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme1 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}

});
}
});

//Og Avengers character 3 Iron Man (ID: 346)
var apiSuperHero346 = baseURL + APIKey + "/" + character3ID;
fetch(apiSuperHero346).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg3">').attr('src', data.image.url).attr('title', 'Learn more about Iron Man').attr('alt', 'Iron Man Image');characterData.append(charName).append(charImage);
$('#ogAvengersContainer').append(characterData);

//event listener for character 3 image click
var characterImageBtn = document.getElementById("charImg3");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme1 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Og Avengers character 4 Captain America (ID: 149)
var apiSuperHero149 = baseURL + APIKey + "/" + character4ID;
fetch(apiSuperHero149).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg4">').attr('src', data.image.url).attr('title', 'Learn more about Captain America').attr('alt', 'Captain America Image');characterData.append(charName).append(charImage);
$('#ogAvengersContainer').append(characterData);

//event listener for character 4 image click
var characterImageBtn = document.getElementById("charImg4");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme1 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});
}
getOgAvengers();
});

//event listener for theme = Villains button
villainsBtn.addEventListener("click", function () {

ogAvengersContainer.classList.add("hide");
ogAvengersTitle.classList.add("hide");
villainsContainer.classList.remove("hide");
villainsTitle.classList.remove("hide");
sheroesContainer.classList.add("hide");
sheroesTitle.classList.add("hide");
heroesContainer.classList.add("hide");
heroesTitle.classList.add("hide");

localStorage.setItem("theme", theme2);

//Function to pull Villains Characters
//Theme 2 (Villains) array should contain characters/id = Loki(414), Magneto(423), Thanos (655), Ultron (680)
function getVillains() {
var char1ID = "414";
var char2ID = "423";
var char3ID = "655";
var char4ID = "680";

// clears duplicate row for Villians
$('#villainsContainer').empty()

//Villains character 1 Loki (ID: 414)
var apiSuperHero414 = baseURL + APIKey + "/" + char1ID;
fetch(apiSuperHero414).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg2a">').attr('src', data.image.url).attr('title', 'Learn more about Loki').attr('alt', 'Loki Image');
characterData.append(charName).append(charImage);
$('#villainsContainer').append(characterData);

//event listener for character 1 image click
var characterImageBtn = document.getElementById("charImg2a");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme2 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Villains character 2 Magneto (ID: 423)
var apiSuperHero423 = baseURL + APIKey + "/" + char2ID;
fetch(apiSuperHero423).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg2b">').attr('src', data.image.url).attr('title', 'Learn more about Magneto').attr('alt', 'Magneto Image');
characterData.append(charName).append(charImage);
$('#villainsContainer').append(characterData);

//event listener for character 2 image click
var characterImageBtn = document.getElementById("charImg2b");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme2 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Villains character 3 Thanos (ID: 655)
var apiSuperHero655 = baseURL + APIKey + "/" + char3ID;
fetch(apiSuperHero655).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg2c">').attr('src', data.image.url).attr('title', 'Learn more about Thanos').attr('alt', 'Thanos Image');
characterData.append(charName).append(charImage);
$('#villainsContainer').append(characterData);
//event listener for character 3 image click
var characterImageBtn = document.getElementById("charImg2c");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme2 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Villains character 4 Ultron (ID: 680)
var apiSuperHero680 = baseURL + APIKey + "/" + char4ID;
fetch(apiSuperHero680).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg2d">').attr('src', data.image.url).attr('title', 'Learn more about Green Goblin').attr('alt', 'Green Goblin Image');characterData.append(charName).append(charImage);
$('#villainsContainer').append(characterData);
//event listener for character 4 image click
var characterImageBtn = document.getElementById("charImg2d");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme2 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});
}
getVillains();
});

//event listener for theme = Sheroes button
sheroesBtn.addEventListener("click", function () {
ogAvengersContainer.classList.add("hide");
ogAvengersTitle.classList.add("hide");
villainsContainer.classList.add("hide");
villainsTitle.classList.add("hide");
sheroesContainer.classList.remove("hide");
sheroesTitle.classList.remove("hide");
heroesContainer.classList.add("hide");
heroesTitle.classList.add("hide");

localStorage.setItem("theme", theme3);

//Function to pull Sheroes Characters
//Theme 3 (Sheroes) array should contain characters/id = She Hulk (589), Spider-Woman (623), Captain Marvel (157), Black Widow (107)

function getSheroes() {
var character1ID = "589";
var character2ID = "623";
var character3ID = "157";
var character4ID = "107";

// clears duplicate row for Sheroes
$('#sheroesContainer').empty()

//Sheroes character 1 She Hulk (ID: 589)
var apiSuperHero589 = baseURL + APIKey + "/" + character1ID;
fetch(apiSuperHero589).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg3a">').attr('src', data.image.url).attr('title', 'Learn more about Invisible Woman').attr('alt', 'Invisible Woman Image');
characterData.append(charName).append(charImage);
$('#sheroesContainer').append(characterData);

//event listener for character 1 image click
var characterImageBtn = document.getElementById("charImg3a");
characterImageBtn.addEventListener("click", characterPageLink);
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme3 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Sheroes character 2 Spider-Woman (ID: 623)
var apiSuperHero623 = baseURL + APIKey + "/" + character2ID;
fetch(apiSuperHero623).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg3b">').attr('src', data.image.url).attr('title', 'Learn more about Scarlet Witch').attr('alt', 'Scarlet Witch Image');
characterData.append(charName).append(charImage);
$('#sheroesContainer').append(characterData);

//event listener for character 2 image click
var characterImageBtn = document.getElementById("charImg3b");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme3 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Sheroes character 3 Captain Marvel (ID: 157)
var apiSuperHero157 = baseURL + APIKey + "/" + character3ID;
fetch(apiSuperHero157).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg3c">').attr('src', data.image.url).attr('title', 'Learn more about Storm').attr('alt', 'Storm Image');
characterData.append(charName).append(charImage);
$('#sheroesContainer').append(characterData);

//event listener for character 3 image click
var characterImageBtn = document.getElementById("charImg3c");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme3 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Sheroes character 4 Black Widow (ID: 107)
var apiSuperHero165 = baseURL + APIKey + "/" + character4ID;
fetch(apiSuperHero165).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg3d">').attr('src', data.image.url).attr('title', 'Learn more about Catwoman').attr('alt', 'Catwoman Image');
characterData.append(charName).append(charImage);
$('#sheroesContainer').append(characterData);

//event listener for character 4 image click
var characterImageBtn = document.getElementById("charImg3d");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme3 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});
}
getSheroes();
});

//event listener for theme = Heroes button
heroesBtn.addEventListener("click", function () {
ogAvengersContainer.classList.add("hide");
ogAvengersTitle.classList.add("hide");
villainsContainer.classList.add("hide");
villainsTitle.classList.add("hide");
sheroesContainer.classList.add("hide");
sheroesTitle.classList.add("hide");
heroesContainer.classList.remove("hide");
heroesTitle.classList.remove("hide");

localStorage.setItem("theme", theme4);

//Function to pull Heroes Characters
//Theme 4 (Heroes) array should contain characters/id = Black Panther (106), Ant Man (30), Spider Man (620), Wolverine (717)

function getHeroes() {
var character1ID = "106";
var character2ID = "30";
var character3ID = "620";
var character4ID = "717";

// clears duplicate row for Heroes
$('#heroesContainer').empty()

//Heroes character 1 Black Panther (ID: 106)
var apiSuperHero106 = baseURL + APIKey + "/" + character1ID;
fetch(apiSuperHero106).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg4a">').attr('src', data.image.url).attr('title', 'Learn more about Black Panther').attr('alt', 'Black Panther Image');
characterData.append(charName).append(charImage);
$('#heroesContainer').append(characterData);

//event listener for character 1 image click
var characterImageBtn = document.getElementById("charImg4a");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme4 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Heroes character 2 Ant Man (ID: 30)
var apiSuperHero31 = baseURL + APIKey + "/" + character2ID;
fetch(apiSuperHero31).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg4b">').attr('src', data.image.url).attr('title', 'Learn more about Ant Man').attr('alt', 'Ant Man Image');
characterData.append(charName).append(charImage);
$('#heroesContainer').append(characterData);

//event listener for character 2 image click
var characterImageBtn = document.getElementById("charImg4b");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme4 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Heroes character 3 Spider Man (ID: 620)
var apiSuperHero620 = baseURL + APIKey + "/" + character3ID;
fetch(apiSuperHero620).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg4c">').attr('src', data.image.url).attr('title', 'Learn more about Spider Man').attr('alt', 'Spider Man Image');
characterData.append(charName).append(charImage);
$('#heroesContainer').append(characterData);

//event listener for character 3 image click
var characterImageBtn = document.getElementById("charImg4c");
characterImageBtn.addEventListener("click", characterPageLink);

//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme4 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});

//Heroes character 4 Wolverine (ID: 717)
var apiSuperHero717 = baseURL + APIKey + "/" + character4ID;
fetch(apiSuperHero717).then(function (response) {
if (response.ok) {
response.json().then(function (data) {
console.log(data);
var characterData = $('<div>');
characterData.addClass('col s3');
var charID = data.id
var charName = $("<h4>").text(data.name);
var charImage = $('<img id="charImg4d">').attr('src', data.image.url).attr('title', 'Learn more about Wolverine').attr('alt', 'Wolverine Image');characterData.append(charName).append(charImage);
$('#heroesContainer').append(characterData);

//event listener for character 4 image click
var characterImageBtn = document.getElementById("charImg4d");
characterImageBtn.addEventListener("click", characterPageLink);
//function that appends the character id value to the interior page URL
function characterPageLink () {
window.location.href = "interior.html?id=" + charID + "&theme=" + theme4 + "&name=" + data.name;

//store data to local storage
localStorage.setItem("characterID", charID);
localStorage.setItem("characterName", data.name);
}
});
}
});
}
getHeroes();
});

//event listener for homepage header banner
heroImage.addEventListener("click", function () {
location.reload();
localStorage.clear();
});