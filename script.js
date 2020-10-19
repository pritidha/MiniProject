
let cn = location.country_name;
$(document).ready(function () {
    $('[id^="a"]').click(function () {
        place = $(this).text()
        console.log(place)
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: `http://api.weatherapi.com/v1/current.json?key=b8ed6e4725ec44a89fe85459201910&q=${place}`,
            success: function (res) {
                console.log('responce from server')
                console.log(res)
                console.log(res.location.name)
                console.log(res.location.lat)
                console.log(res.current.humidity)
                console.log(res.current.temp_c)
                console.log(res.current.temp_f)
            }
        })
    })

    
})


