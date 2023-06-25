import { useState, useEffect } from 'react';

export default function Map() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const handleMarkerClick = (markerName) => {
            fetch(`http://localhost:3001/api?marker=${markerName}`)
                .then((res) => res.json())
                .then((data) => {setData(data.data); console.log(data)})
        }

        window.initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 33.9022 , lng: -118.0817 },
                zoom: 10,
            });

            const markers = [
                { position: { lat: 34.0022089 , lng: -117.7303366 }, title: "Chick-Fil-A" },
                { position: { lat: 34.1678353 , lng: -118.3489001 }, title: "Porto's Bakery" },
                { position: { lat: 33.7271959 , lng: -117.787643 }, title: "Target" },
                { position: { lat: 33.9712075 , lng: -117.6919376 }, title: "Starbucks" },
                { position: { lat: 33.9712075 , lng: -117.6919376 }, title: "Veggie Grill" },
                { position: { lat: 33.7225654 , lng: -117.7925624 }, title: "Harkins Theatres" },
                { position: { lat: 34.0126746 , lng: -117.7415678 }, title: "Rite Aid" },
                { position: { lat: 33.9584905 , lng: -117.7199668 }, title: "Kija Hair Salon" },
                { position: { lat: 33.7050124 , lng: -117.7753697 }, title: "Nguyen Tan K, MD" },
                { position: { lat: 33.988947 , lng: -117.7067445 }, title: "The Home Depot" },
                { position: { lat: 33.9991842 , lng: -117.7343281 }, title: "United States Postal Service" },
                { position: { lat: 33.557678 , lng: -117.6718468 }, title: "Fossil Store" },
                { position: { lat: 34.03691 , lng: -118.3514107 }, title: "Oskar's Barbershop" },
                { position: { lat: 33.9614046 , lng: -117.6980379 }, title: "Albertson's" },
                { position: { lat: 33.1298023 , lng: -117.3169285 }, title: "LEGOLAND" },
                { position: { lat: 33.8576302 , lng: -118.0928784 }, title: "BAMBU Desserts and Drinks" },
                { position: { lat: 34.0620855 , lng: -117.885964 }, title: "South Hills High School" },
                { position: { lat: 33.9587151 , lng: -117.7155767 }, title: "Michael G. Wickman Elementary School" },
                { position: { lat: 34.0469418 , lng: -117.8515352 }, title: "Mt. San Antonio College" },
                { position: { lat: 34.4010674 , lng: -118.5707859 }, title: "College of the Canyons" },
                { position: { lat: 34.1636372 , lng: -118.3169031 }, title: "AAA - Automobile Club of Southern California" },
                { position: { lat: 33.9488499 , lng: -117.4024849 }, title: "RISE Interpreting" },
                { position: { lat: 34.1180382 , lng: -118.2962752 }, title: "Greek Theatre" },
                { position: { lat: 33.8066523 , lng: -117.9147013 }, title: "House of Blues" },
                { position: { lat: 34.0230132 , lng: -118.244348 }, title: "1720" },
                { position: { lat: 34.0448271 , lng: -118.2064922 }, title: "The Paramount" },
                { position: { lat: 34.0446984 , lng: -118.2677113 }, title: "The Novo" },
                { position: { lat: 34.0533447265625 , lng: -118.24234771728516 }, title: "Beginning Urban Jazz Dance" },
                { position: { lat: 34.41562 , lng: -118.5521611 }, title: "ASL Pizza Social - Topper's Pizza" },
                { position: { lat: 33.8701187 , lng: -117.9277322 }, title: "Deaf Night Out at Roscoe's" },
                { position: { lat: 34.021848 , lng: -117.33868 }, title: "ASL Night - Starbucks" },
                { position: { lat: 33.795551 , lng: -117.8877523 }, title: "ASL Social/DNO - Golden Road Brewing" },
                { position: { lat: 34.4336694 , lng: -118.5712912 }, title: "Deaf Night - Pocock Brewing Company" },
                { position: { lat: 34.021848 , lng: -117.33868 }, title: "ASL Night - Starbucks" },
                { position: { lat: 33.8984315 , lng: -117.945893 }, title: "Deaf Basketball Night" },
                { position: { lat: 34.0533447265625 , lng: -118.24234771728516 }, title: "Beginning Urban Jazz Dance" },
                { position: { lat: 33.5229797 , lng: -117.1684235 }, title: "ASL Social - Stadium Pizza" },
                { position: { lat: 34.2194946 , lng: -119.1790297 }, title: "Deaf Social - Topper's Pizza Place" },
                { position: { lat: 33.8460079 , lng: -118.0394157 }, title: "Deaf Coffee Social - The Coffee Bean and Tea Leaf" },
                { position: { lat: 33.8095114 , lng: -118.029926 }, title: "OC Deaf Coffee Chat" },
                { position: { lat: 34.1447016 , lng: -118.2728095 }, title: "ASL Social and Skate Nite - Moonlight Rollerway" },
                { position: { lat: 33.8701187 , lng: -117.9277322 }, title: "Deaf Night Out at Roscoe's" },
                { position: { lat: 33.8291301 , lng: -118.1476033 }, title: "ASL Social - The Hangar" },
                { position: { lat: 34.021848 , lng: -117.33868 }, title: "ASL Night - Starbucks" },
                { position: { lat: 33.8984315 , lng: -117.945893 }, title: "Deaf Basketball Night" },
                { position: { lat: 33.909612 , lng: -117.4595703 }, title: "ASL Social - Galleria at Tyler" },
                { position: { lat: 34.0533447265625 , lng: -118.24234771728516 }, title: "Beginning Urban Jazz Dance" },
                { position: { lat: 34.1334029 , lng: -118.219218 }, title: "Greater Los Angeles Agency on Deafness, Inc." },
                { position: { lat: 33.8095114 , lng: -118.029926 }, title: "Orange County Deaf Equal Access Foundation" },
                { position: { lat: 33.7895722 , lng: -118.2050104 }, title: "LiNKS Sign Language & Interpreting Services" },
                { position: { lat: 34.1580844 , lng: -118.4267335 }, title: "The Sign Language Company" },
                { position: { lat: 34.0497638 , lng: -118.2607657 }, title: "Kemilyen Language Services" },
                { position: { lat: 34.0311597 , lng: -118.2759813 }, title: "Sign with Me" },
                { position: { lat: 34.0503447265625 , lng: -118.24234771728516 }, title: "The ASL Shop" },
                { position: { lat: 34.0921149 , lng: -118.1351009 }, title: "Interpretly" },
                { position: { lat: 33.8405581 , lng: -117.9583402 }, title: "Deaf Heart Interpreting Agency" },
                { position: { lat: 33.8246534 , lng: -118.4171117 }, title: "Sign Up Interpreting Svcs, LLC" },
                { position: { lat: 33.8982402 , lng: -117.9881126 }, title: "Helen Ruiz Interpreting Services" },
                { position: { lat: 34.0701641 , lng: -118.0317326 }, title: "The Preferred Interpreting Agency" },
                { position: { lat: 34.0521608 , lng: -118.3830965 }, title: "Green Translations" },
                { position: { lat: 34.0561976 , lng: -118.2597553 }, title: "LAUSD Translations Unit" }
            ];

            markers.forEach((markerInfo) => {
                const marker = new window.google.maps.Marker({
                    position: markerInfo.position,
                    map,
                    title: markerInfo.title,
                });

                const infoWindow = new window.google.maps.InfoWindow({
                    content: markerInfo.title,
                });

                marker.addListener('mouseover', () => {
                    infoWindow.open(map, marker);
                });
            
                marker.addListener('mouseout', () => {
                    infoWindow.close();
                });

                marker.addListener('click', () => {
                    handleMarkerClick(markerInfo.title);
                    console.log(`Marker "${markerInfo.title}" clicked!`);
                });
            });
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5z4f1PUjzTAw4_u2W1SFAsJ-1JYJXRnw&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        return () => {document.head.removeChild(script);};
        }, []);

    return (
    <div className="App">
        <div id="map" style={{ width: '640px', height: '480px' }}></div>
        {data && (
            <div>
                <p>Name: {data.name}</p>
                <p>Location: {data.location}</p>
                <p>Hours: {data.hours}</p>
                <p>Service: {data.service}</p>
                <p>Accommodations: {data.accommodations}</p>
                <p>Contact: {data.contact}</p>
                <p>Info: {data.info}</p>
            </div>
        )}
    </div>
    );
}