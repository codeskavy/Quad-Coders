function displayMap(lat, lon) {
    // Initialize map
    var map = L.map('map').setView([lat, lon], 13);
    
    // Add tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add marker to the map
    L.marker([lat, lon]).addTo(map)
        .bindPopup('Your Location')
        .openPopup();
}
