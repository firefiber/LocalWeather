////OpenWeatherMap API KEY 5b72d586dd7fd8a9036a04859fa2a7c7
//
////var url = "https://samples.openweathermap.org/data/2.5/weather?appid=b1b15e88fa797225412429c1c50c122a1&q=London,uk"
////var newAJAX = new XMLHttpRequest();
////
////newAJAX.open('GET', url);
////newAJAX.send();
////newAJAX.responseType = 'json';
////
////newAJAX.onload = function(){
////  responseObj = newAJAX.response;
////  console.log(responseObj);
////}
//
//$.ajax({
//  url: "https://api.openweathermap.org/data/2.5/weather",
//  data:{
//    "q": "London",
//    "APPID": "5b72d586dd7fd8a9036a04859fa2a7c7",
//    "callback": 'showWeather'
//  }
//});

function showWeather(data){
  console.log(data);
  alert("hello");
}
