////OpenWeatherMap API KEY 5b72d586dd7fd8a9036a04859fa2a7c7
//
  var url = "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=5b72d586dd7fd8a9036a04859fa2a7c7"
  var newAJAX = new XMLHttpRequest();

  newAJAX.open('GET', url);
  newAJAX.send();
  newAJAX.responseType = 'json';

  newAJAX.onload = function(){
    alert("hello")
    responseObj = newAJAX.response;
    showWeather(responseObj);
  }

//$.ajax({
//  url: "https://api.openweathermap.org/data/2.5/weather",
//  jsonp: false,
//  data:{
//    "q": "London",
//    "APPID": "5b72d586dd7fd8a9036a04859fa2a7c7",
//    "callback": 'showWeather'
//  }
//});

function showWeather(data){
  console.log(JSON.parse(data));
  alert("test");
}
//
////(function(){
////  jsonp();
////  document.querySelector('button').onclick = function(){
////    jsonp();
////  }
////})();
//
//(function(){
//  jsonp();
//});

