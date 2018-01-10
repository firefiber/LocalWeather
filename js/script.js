////OpenWeatherMap API KEY 5b72d586dd7fd8a9036a04859fa2a7c7
////Google API Key AIzaSyAKue3iOUaEZzcFkBk61UV7kTv1qSNGwlI

function json(){
  navigator.geolocation.getCurrentPosition(success);
  function success(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=5b72d586dd7fd8a9036a04859fa2a7c7"
    let gmapsURL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAKue3iOUaEZzcFkBk61UV7kTv1qSNGwlI"

    let locResp, tempResp = "";

    //Google Location Request
    let mapsRequest = new XMLHttpRequest();

    mapsRequest.open('GET', gmapsURL+"&latlng="+lat+","+lon);
    mapsRequest.send();
    mapsRequest.responseType = 'json';

    mapsRequest.onload = function(){
      locResp = mapsRequest.response;
      showLocation(locResp);
    }

    //Weather Request
    let weatherRequest = new XMLHttpRequest();

    weatherRequest.open('GET', weatherURL+"&"+"lat="+lat+"&lon="+lon);
    weatherRequest.send();
    weatherRequest.responseType = 'json';

    weatherRequest.onload = function(){
      tempResp = weatherRequest.response;
      showWeather(tempResp);
    }
  }
}

function showLocation(data){
  let country = document.createElement('p');
  country.textContent = data.results[3].formatted_address;
  let div = document.getElementById("weatherStats");
  div.appendChild(country);
}
function showWeather(data){
  let iconURL = "http://openweathermap.org/img/w/";
  let temp = document.createElement('p');
  let img = document.createElement('img');

  temp.textContent = data.main.temp+" °C";
  img.src=iconURL+data.weather[0].icon+".png";
  let div = document.getElementById("weatherStats");
  div.appendChild(temp);
  div.appendChild(img);

  document.getElementById("far").onclick = function(){
    let farTmp = ((data.main.temp)*9/5)+32
    temp.textContent = farTmp.toFixed(2)+" °F";
  };
  document.getElementById("cel").onclick = function(){
    temp.textContent = data.main.temp+" °C";
  };
}

//function changetoFar(data, temp){
//  farTemp = data.main.temp*32
//  temp.textContent = farTemp+" °F";
//}



(function(){
  json();
})();

