var marker_color = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

function initMap() {
    var latlng = {lat: 25.668191, lng: -100.2466512};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: latlng
    });

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: marker_color,
        title: "Estadio BBVA"
    });
}