import { useState, useEffect } from 'react';

export default function Map() {
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch("http://localhost:3001/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    useEffect(() => {
        window.initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 33.9022 , lng: -118.0817 },
                zoom: 10,
            });

            map.addListener('click', (event) => {
                const clickedLatLng = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                };
                console.log('Clicked coordinates:', clickedLatLng);
            });
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5z4f1PUjzTAw4_u2W1SFAsJ-1JYJXRnw&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        return () => {document.head.removeChild(script);};
        }, []);

    return (
    <div className="App">
        <p>{!data ? "naw still broken :/" : data}</p>
        <div id="map" style={{ width: '640px', height: '480px' }}></div>
    </div>
    );
}