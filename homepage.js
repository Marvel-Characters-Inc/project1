function test() {
    var apiMarvel =
      "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=67d8c18582668ccfcdaa772663f6e18e&hash=b2a33e8def4a19cbf8d5f13f82ec50e5";
    fetch(apiMarvel).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
        });
      }
    });
  }
  test();
  