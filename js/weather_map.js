(function ($) {
    "use strict";


    $(document).ready(function () {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let currentDate = new Date();
        let convertTime = function () {
            if (currentDate.getHours() > 12 && currentDate.getMinutes() > 9) {
                return (currentDate.getHours() - 12) + " : " + currentDate.getMinutes() + " pm"
            } else if (currentDate.getHours() > 12 && currentDate.getMinutes() < 9) {
                return (currentDate.getHours() - 12) + " : 0" + currentDate.getMinutes() + " pm"
            } else if (currentDate.getHours() <= 12 && currentDate.getMinutes() < 9) {
                return currentDate.getHours() + " : 0" + currentDate.getMinutes() + " am"
            } else {
                return currentDate.getHours() + " : " + currentDate.getMinutes() + " am"
            }
        }
        function tempConversion(temp) {
            return Math.trunc((temp - 273.15) * 9 / 5 + 32) + "&#176 F  /  " + Math.trunc((temp - 273.15)) + "&#176 C"
        }
        function mapDisplay(){
            mapboxgl.accessToken = MAPBOX_TOKEN;
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });
        }
        function toggleLoad (){
            return $('header').toggleClass('d-none')
        }
        function cardBody(tempData, weather, hum) {
            return "<ul class=\"list-group list-group-flush\"> <li class=\"list-group-item\">" + tempConversion(tempData) + "</li> <li class=\"list-group-item\">" + weather + "</li> <li class=\"list-group-item\">Humidity : " + hum + "%</li> </ul>\n"
        }
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Browser doesn't support geolocation.")
            }
        }
        function currentCard(data){
            $('#header_current').append("<p>D-weather for " + data.name + ", " + data.sys.country + " is: </p>")
                .append("<div class='card container weather_card'><h5 class='card-title'>" + days[currentDate.getDay()] + "  " + months[currentDate.getMonth()] + " " + currentDate.getDate() + "</h5><img class='container' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' class='card-img-top' alt='...'> <div class='card-body'>  <p class='card-text'>" + cardBody(data.main.temp, data.weather[0].description, data.main.humidity) + "</p> <p class='card-text'><small class='text-muted'>Last updated at " + convertTime() + "</small></p> </div> </div>"
                )}
        function fiveCard(info) {
            let dayUpdate = 1;
            for (let i = 3; i <= 35; i += 8) {
                $('#fiveDay').append("<div class='card container weather_card mx-3'><h5 class='card-title'>" + days[(currentDate.getDay() + dayUpdate)] + "  " + months[currentDate.getMonth()] + " " + (currentDate.getDate() + dayUpdate) + "</h5><img class='container' src='http://openweathermap.org/img/w/" + info.list[i].weather[0].icon + ".png' class='card-img-top' alt='...'> <div class='card-body'>  <p class='card-text'>" + cardBody(info.list[i].main.temp, info.list[i].weather[0].description, info.list[i].main.humidity) + "</p></div></div>"
                )
                dayUpdate += +1;
            }
        }
        function showPosition(position) {
            $('#dashboard').toggleClass('d-none')
            toggleLoad();
            $.get("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude.toFixed(4) + "&lon=" + position.coords.longitude.toFixed(4) + "&appid=" + OPENW_TOKEN).done(function (data) {
                toggleLoad();
                currentCard(data);

            $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude.toFixed(4) + "&lon=" + position.coords.longitude.toFixed(4) + "&appid=" + OPENW_TOKEN).done(function (info){
                console.log(info);
                //months need to be fixed to change
                //days need to be fixed as well
                fiveCard(info);
        })
            })
        }
        $('.input_button').click(function() {
            $('#dashboard').addClass('d-none')
            toggleLoad();
            let input = $('.input_text').val()
            if (input.length === 5 && Number.isInteger(parseInt(input)) && input.includes('.') !== true) {
                $.get("http://api.openweathermap.org/data/2.5/weather?zip=" + input + "&appid=" + OPENW_TOKEN).done(function (data) {
                    $('#header_current, #fiveDay').children().remove();
                    toggleLoad();
                    currentCard(data);
                    $.get("http://api.openweathermap.org/data/2.5/forecast?zip=" + input + "&appid=" + OPENW_TOKEN).done(function (info) {
                        fiveCard(info);
                    })
                })
            }
            else {
                $.get("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + OPENW_TOKEN).done(function (data) {
                    $('#header_current, #fiveDay').children().remove();
                    toggleLoad();
                    currentCard(data);
                    $.get("http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + OPENW_TOKEN).done(function (info) {
                        fiveCard(info);
                    })
                }).fail(function(){
                    $('#header_current, #fiveDay').children().remove();
                    toggleLoad();
                    $('#dashboard').css('background-color', 'var(--accent-color)').toggleClass('d-none')
                    $("#dashboard h1").html("Error Location Not Found")
                    $('#cloud_logo').html('<i class="fas fa-sad-tear"></i>')
                    $('#dashboard h2').html('Please enter valid city name or zipcode.')
                })
                    }
        })
        getLocation();
    })
})(jQuery)