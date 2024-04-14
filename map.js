function initMap() {

    // Map options
    var options = {
        center: { lat: 38.3460, lng: -0.4907 },
        zoom: 10
    };

    // New Map
    var map = new google.maps.Map(document.getElementById("map"), options);

    // Listen for click on map location
    google.maps.event.addListener(map, "click", (event) => {
        // Add Marker
        addMarker({ location: event.latLng });
    });

    // Marker Array
    var markerArray = [
        {
            location: { lat: 37.9922, lng: -1.1307 },
            imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
            content: "<h2>Murcia City</h2>"
        },
        { location: { lat: 39.4699, lng: -0.3763 } },
        { location: { lat: 38.5411, lng: -0.1225 }, content: "<h2>Benidorm City</h2>" }
    ];

    // Add all markers at once
    markerArray.forEach(function (markerInfo) {
        addMarker(markerInfo);
    });

    // Add Marker function
    function addMarker(markerInfo) {
        var marker = new google.maps.Marker({
            position: markerInfo.location,
            map: map
        });

        // Check for custom Icon
        if (markerInfo.imageIcon) {
            marker.setIcon(markerInfo.imageIcon);
        }

        // Check for content and add infowindow
        if (markerInfo.content) {
            var detailWindow = new google.maps.InfoWindow({
                content: markerInfo.content
            });

            // Show infowindow on mouseover
            marker.addListener("mouseover", function () {
                detailWindow.open(map, marker);
            });
        }
    }
}
