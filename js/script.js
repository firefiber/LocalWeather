////OpenWeatherMap API KEY 5b72d586dd7fd8a9036a04859fa2a7c7
//
  navigator.geolocation.getCurrentPosition(success);
  function success(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    alert(lat);
    alert(lon);

  var url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=5b72d586dd7fd8a9036a04859fa2a7c7"
  var newAJAX = new XMLHttpRequest();

  newAJAX.open('GET', url+"&"+"lat="+lat+"&lon="+lon);
  newAJAX.send();
  newAJAX.responseType = 'text';

  newAJAX.onload = function(){
    alert("hello")
    responseObj = newAJAX.response;
    showWeather(responseObj);
  }
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
//  console.log(data);
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

