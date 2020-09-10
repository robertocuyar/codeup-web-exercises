(function ($){
    "use strict";


    $(document).ready(function() {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let currentDate= new Date();
        let convertTime = function(){
            if (currentDate.getHours()>12 && currentDate.getMinutes() > 9) {
                return (currentDate.getHours() - 12) + " : " + currentDate.getMinutes() + " pm"
            }else if (currentDate.getHours()>12 && currentDate.getMinutes() < 9){
                return (currentDate.getHours() - 12) + " : 0" + currentDate.getMinutes() + " pm"
            } else if(currentDate.getHours()<=12 && currentDate.getMinutes() < 9){
                return currentDate.getHours() + " : 0" + currentDate.getMinutes() + " am"
            }
            else {
               return currentDate.getHours() + " : " + currentDate.getMinutes() + " am"
            }
        }
        function tempConversion(temp){
            return Math.trunc((temp - 273.15) * 9 / 5 + 32) + "&#176 F  /  " + Math.trunc((temp - 273.15)) + "&#176 C"
        }
function cardBody(tempData, weather, hum){
            return "<ul class=\"list-group list-group-flush\"> <li class=\"list-group-item\">" + tempConversion(tempData)+ "</li> <li class=\"list-group-item\">"+ weather +"</li> <li class=\"list-group-item\">Humidity : " +hum+"%</li> </ul>\n"
}
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Browser doesn't support geolocation.")
            }
        }
        function showPosition(position) {
            $.get("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude.toFixed(4) + "&lon=" + position.coords.longitude.toFixed(4) + "&appid=" + OPENW_TOKEN).done(function(data){
            console.log(data);
            $('#header_current').append("<p>D-weather for " + data.name +", " + data.sys.country + " is: </p>")
               .append(" <div class='card container'><h5 class='card-title'>"+days[currentDate.getDay()] + "  "+months[currentDate.getMonth()]+ " "+ currentDate.getDate()+ "</h5><img class='container' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' class='card-img-top' alt='...'> <div class='card-body'>  <p class='card-text'>" + cardBody(data.main.temp, data.weather[0].description, data.main.humidity ) + "</p> <p class='card-text'><small class='text-muted'>Last updated at "+convertTime()+"</small></p> </div> </div>"
                )
        })
        }
        getLocation();


    })
})(jQuery)