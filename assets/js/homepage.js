//define variables
var APIKey = "10104712034177731";
var characterID = "346";

// define variables for Theme Arrays
      //Theme 1 (OG Avengers) array should contain ids=Thor(659),Hulk(332),Iron Man (346), Captain America (149)

      //Theme 2 (Villains) array should contain characters/id = Loki(414), Magneto(423), Thanos (655), Green Goblin (299)

      //Theme 3 (Sheroes) array should contain characters/id = Black Widow (107), Scarlet Witch (579), Captain Marvel (156), Jean Grey (356)

      //Theme 4 (Heroes) array should contain characters/id = Black Panther (106), Ant Man (31), Spider Man (620), Wolverine (717)

//testing API
function test() {
    var apiSuperHero = "https://www.superheroapi.com/api.php/" + APIKey + "/" + characterID;

    fetch(apiSuperHero).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          var characterData = $('<div>');
          characterData.addClass('col s3');
          var charID = data.id
          var charName = $("<h5>").text(data.name);
          var charImage = $('<img>').attr('src', data.image.url);
          characterData.append(charName).append(charImage);
          $('#charactersBox').append(characterData);

        });
      }
    });
  }
  test();

// First Function should be on page load, query SuperHeros API and match character ids with theme selected

  //Sub Function should be an event listener for what theme the user clicks and should display characters for each theme based on what is defined in each array/theme (see theme arrays defined above)

//Second Function should be event listener for what character the user clicks

//Third Function should be appending the character id value to the interior page URL