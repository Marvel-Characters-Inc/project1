document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      // specify options here
    });
  });


    function getApi() {
      var requestUrl = 'https://superheroapi.com/api.php/3008242709313318/659/biography';
      var chosenCharacter = ''
      var apiUrl = 'https://superheroapi.com/api.php/3008242709313318/' + chosenCharacter ;
      fetch(requestUrl)
      .then(function (response) {
      return response.json();
      })
      .then(function (data) {
        displayCharInfo(data,)
      console.log(data)
      })}
      getApi();
      