function initMap() {
    var latLong = {lat: 45.509011, lng: -73.564732};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: latLong,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        map: map,
        position: latLong,
        title: 'TNM'
    });
}