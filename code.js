$(document).ready(function() {
    var position = navigator.geolocation.getCurrentPosition(LatLong,null);

    FindLocation();
    LatLong(position);
});






    function FindLocation() {

        if (!navigator.geolocation) {
            $("#display").text("Use a different bowser");
            console.log("error");
        } else {
            console.log("nice");
        }
    }
        function LatLong(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var WeatherType;
            var weather;
            var DynamicWeather;
            var wind;
            var area;
            var html;


            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + "1c3dfe0d9317c6d9db73bc54e907d7de", function (data) {

                weather = data.weather[0].main;
                WeatherType = data.weather[0].description;
                wind = data.wind.speed;
                area = data.name;



                if(weather === "Rain"){
                    $("body").css("background-image",'url("http://i.imgur.com/8aX07js.jpg")');
                }
                if(weather === "Clouds"){
                    $("body").css("background-image",'url("http://i.imgur.com/IaEHwyB.jpg")');
                }
                if(weather === "Clear") {
                    $("body").css("background-image",'url("https://farm1.staticflickr.com/691/20664938416_4e4b224684_h.jpg")');

                }

                html = '<p>';
                html += area;
                html += '</p>';



                $( '<p>' + area + '</p>').appendTo(".area");

                $( '<p>' + weather + '</p>').appendTo(".type");



                console.log(area);


                console.log(weather);
                console.log(wind);
                console.log(WeatherType);

                console.log(latitude);
                console.log(longitude);

                console.log(data);
            });

}









