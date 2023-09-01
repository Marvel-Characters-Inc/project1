// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=67d8c18582668ccfcdaa772663f6e18e&hash=b2a33e8def4a19cbf8d5f13f82ec50e5

function test() {
  //     var apiMarvel =
  //   `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiPublicKEY}&hash=${hashvalue}`;
  var apiMarvel =
    "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=67d8c18582668ccfcdaa772663f6e18e&hash=b2a33e8def4a19cbf8d5f13f82ec50e5";
  // var apiPublicKEY = "67d8c18582668ccfcdaa772663f6e18e";
  // var apiPrivateKEY = "f061a40c4eb19e87ab518b6e467a3da6055dcc49";
  // var ts = 1
  // var hashvalue = 'b2a33e8def4a19cbf8d5f13f82ec50e5'
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
