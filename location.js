$(document).ready(function () {
    console.log("mukya")
    $("#location").click(function () {
        console.log("geolocation")
    
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function (location) {
                console.log(location.country_name)
                console.log(location.state)
                console.log(location.city)
                console.log(location.latitude)
                console.log(location.longitude)
                console.log(location.IPv4)
    
                $('#location_name').text(cn);
                //   $('#state').html(location.state);
                //   $('#city').html(location.city);
                //   $('#latitude').html(location.latitude);
                //   $('#longitude').html(location.longitude);
                //   $('#ip').html(location.IPv4);
            }
        });
    
    });




})



