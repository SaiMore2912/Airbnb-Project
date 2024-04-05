
    mapboxgl.accessToken = mapToken;


    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(coordinates) //listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup())
    .addTo(map);


  