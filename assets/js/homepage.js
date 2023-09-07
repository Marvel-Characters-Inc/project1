//define variables
var APIKey = "10104712034177731";
var characterID = "346";
var baseURL = "https://www.superheroapi.com/api.php/"

var ogAvengersContainer = document.getElementById("ogAvengersContainer");
var villainsContainer = document.getElementById("villainsContainer");
var sheroesContainer = document.getElementById("sheroesContainer");
var heroesContainer = document.getElementById("heroesContainer");

var ogAvengersBtn = document.getElementById("ogAvengersBtn");
var villainsBtn = document.getElementById("villainsBtn");
var sheroesBtn = document.getElementById("sheroesBtn");
var heroesBtn = document.getElementById("heroesBtn");

var ogAvengersTitle = document.getElementById("ogAvengersTitle");
var villainsTitle = document.getElementById("villainsTitle");
var sheroesTitle = document.getElementById("sheroesTitle");
var heroesTitle = document.getElementById("heroesTitle");

      
//location.reload();
      
//testing API
function test() {
    var apiSuperHero = baseURL + APIKey + "/" + characterID;

    fetch(apiSuperHero).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
        });
      }
    });
  }
  test();

  //event listener for theme = Og Avengers button
  ogAvengersBtn.addEventListener("click", function () {
    ogAvengersContainer.classList.remove("hide");
    ogAvengersTitle.classList.remove("hide");
    villainsContainer.classList.add("hide");
    villainsTitle.classList.add("hide");
    sheroesContainer.classList.add("hide");
    sheroesTitle.classList.add("hide");
    heroesContainer.classList.add("hide");
    heroesTitle.classList.add("hide");

    //Function to pull OgAvengers Characters
    //Theme 1 (OG Avengers) array should contain ids=Thor(659),Hulk(332),Iron Man (346), Captain America (149)

    function getOgAvengers() {
      var character1ID = "659";
      var character2ID = "332";
      var character3ID = "346";
      var character4ID = "149";

      var apiSuperHero659 = baseURL + APIKey + "/" + character1ID;
      fetch(apiSuperHero659).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var characterData = $('<div>');
      characterData.addClass('col s3');
      var charID = data.id
      var charName = $("<h4>").text(data.name);
      var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
      $('#ogAvengersContainer').append(characterData);
          });
        }
      });

      var apiSuperHero332 = baseURL + APIKey + "/" + character2ID;
      fetch(apiSuperHero332).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var characterData = $('<div>');
      characterData.addClass('col s3');
      var charID = data.id
      var charName = $("<h4>").text(data.name);
      var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
      $('#ogAvengersContainer').append(characterData);
          });
        }
      });

      var apiSuperHero346 = baseURL + APIKey + "/" + character3ID;
      fetch(apiSuperHero346).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var characterData = $('<div>');
      characterData.addClass('col s3');
      var charID = data.id
      var charName = $("<h4>").text(data.name);
      var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
      $('#ogAvengersContainer').append(characterData);
          });
        }
      });

      var apiSuperHero149 = baseURL + APIKey + "/" + character4ID;
      fetch(apiSuperHero149).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var characterData = $('<div>');
      characterData.addClass('col s3');
      var charID = data.id
      var charName = $("<h4>").text(data.name);
      var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
      $('#ogAvengersContainer').append(characterData);
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

  //Function to pull Villains Characters
  //Theme 2 (Villains) array should contain characters/id = Loki(414), Magneto(423), Thanos (655), Green Goblin (299)

  function getVillains() {
    var char1ID = "414";
    var char2ID = "423";
    var char3ID = "655";
    var char4ID = "299";

    var apiSuperHero414 = baseURL + APIKey + "/" + char1ID;
    fetch(apiSuperHero414).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#villainsContainer').append(characterData);
        });
      }
    });

    var apiSuperHero423 = baseURL + APIKey + "/" + char2ID;
    fetch(apiSuperHero423).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#villainsContainer').append(characterData);
        });
      }
    });

    var apiSuperHero655 = baseURL + APIKey + "/" + char3ID;
    fetch(apiSuperHero655).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#villainsContainer').append(characterData);
        });
      }
    });

    var apiSuperHero299 = baseURL + APIKey + "/" + char4ID;
    fetch(apiSuperHero299).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#villainsContainer').append(characterData);
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

  //Theme 3 (Sheroes) array should contain characters/id = Black Widow (107), Scarlet Witch (579), Captain Marvel (156), Jean Grey (356)

  function getSheroes() {
    var character1ID = "107";
    var character2ID = "579";
    var character3ID = "156";
    var character4ID = "356";

    var apiSuperHero107 = baseURL + APIKey + "/" + character1ID;
    fetch(apiSuperHero107).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#sheroesContainer').append(characterData);
        });
      }
    });

    var apiSuperHero579 = baseURL + APIKey + "/" + character2ID;
    fetch(apiSuperHero579).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#sheroesContainer').append(characterData);
        });
      }
    });

    var apiSuperHero156 = baseURL + APIKey + "/" + character3ID;
    fetch(apiSuperHero156).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#sheroesContainer').append(characterData);
        });
      }
    });

    var apiSuperHero356 = baseURL + APIKey + "/" + character4ID;
    fetch(apiSuperHero356).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#sheroesContainer').append(characterData);
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

//Theme 4 (Heroes) array should contain characters/id = Black Panther (106), Ant Man (31), Spider Man (620), Wolverine (717)


  function getHeroes() {
    var character1ID = "106";
    var character2ID = "31";
    var character3ID = "620";
    var character4ID = "717";

    var apiSuperHero106 = baseURL + APIKey + "/" + character1ID;
    fetch(apiSuperHero106).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#heroesContainer').append(characterData);
        });
      }
    });

    var apiSuperHero31 = baseURL + APIKey + "/" + character2ID;
    fetch(apiSuperHero31).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#heroesContainer').append(characterData);
        });
      }
    });

    var apiSuperHero620 = baseURL + APIKey + "/" + character3ID;
    fetch(apiSuperHero620).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#heroesContainer').append(characterData);
        });
      }
    });

    var apiSuperHero717 = baseURL + APIKey + "/" + character4ID;
    fetch(apiSuperHero717).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var characterData = $('<div>');
    characterData.addClass('col s3');
    var charID = data.id
    var charName = $("<h4>").text(data.name);
    var charImage = $('<img>').attr('src', data.image.url);characterData.append(charName).append(charImage);
    $('#heroesContainer').append(characterData);
        });
      }
    });
  }
  getHeroes();

});




// First Function should be on page load, query SuperHeros API and match character ids with theme selected

  //Sub Function should be an event listener for what theme the user clicks and should display characters for each theme based on what is defined in each array/theme (see theme arrays defined above)


//Second Function should be event listener for what character the user clicks

//Third Function should be appending the character id value to the interior page URL