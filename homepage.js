
//testing API
function test() {
    var apiMarvel =
      "https://www.superheroapi.com/api.php/10104712034177731/346";

    fetch(apiMarvel).then(function (response) {
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

// on page load, query API and display 