document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      // specify options here
    });
  });
          

  function getApi() {

    var requestUrl = 'https://superheroapi.com/api.php/3008242709313318/659';
    fetch(requestUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data)
          displayCharacterInfo(data);
        });
    }})}


function displayCharacterInfo = 













    getApi();
    