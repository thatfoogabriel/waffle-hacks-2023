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

            const markers = [
                { position: { lat: 34.0022089 , lng: -117.7303366 }, title: "Chic-Fil-A" },
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
                { position: { lat:  , lng:  }, title: "1720" },
                { position: { lat:  , lng:  }, title: "The Paramount" },
                { position: { lat:  , lng:  }, title: "The Novo" },
                { position: { lat:  , lng:  }, title: "Beginning Urban Jazz Dance" },
                { position: { lat:  , lng:  }, title: "ASL Pizza Social - Topper's Pizza" },
                { position: { lat:  , lng:  }, title: "Deaf Night Out at Roscoe's" },
                { position: { lat:  , lng:  }, title: "ASL Night - Starbucks" },
                { position: { lat:  , lng:  }, title: "ASL Social/DNO - Golden Road Brewing" },
                { position: { lat:  , lng:  }, title: "Deaf Night - Pocock Brewing Company" },
                { position: { lat:  , lng:  }, title: "ASL Night - Starbucks" },
                { position: { lat:  , lng:  }, title: "Deaf Basketball Night" },
                { position: { lat:  , lng:  }, title: "Beginning Urban Jazz Dance" },
                { position: { lat:  , lng:  }, title: "ASL Social - Stadium Pizza" },
                { position: { lat:  , lng:  }, title: "Deaf Social - Topper's Pizza Place" },
                { position: { lat:  , lng:  }, title: "Deaf Coffee Social - The Coffee Bean and Tea Leaf" },
                { position: { lat:  , lng:  }, title: "OC Deaf Coffee Chat" },
                { position: { lat:  , lng:  }, title: "ASL Social and Skate Nite - Moonlight Rollerway" },
                { position: { lat:  , lng:  }, title: "Deaf Night Out at Roscoe's" },
                { position: { lat:  , lng:  }, title: "ASL Social - The Hangar" },
                { position: { lat:  , lng:  }, title: "ASL Night - Starbucks" },
                { position: { lat:  , lng:  }, title: "Deaf Basketball Night" },
                { position: { lat:  , lng:  }, title: "ASL Social - Galleria at Tyler" },
                { position: { lat:  , lng:  }, title: "Beginning Urban Jazz Dance" },
                { position: { lat:  , lng:  }, title: "Greater Los Angeles Agency on Deafness, Inc." },
                { position: { lat:  , lng:  }, title: "Orange County Deaf Equal Access Foundation" },
                { position: { lat:  , lng:  }, title: "LiNKS Sign Language & Interpreting Services" },
                { position: { lat:  , lng:  }, title: "The Sign Language Company" },
                { position: { lat:  , lng:  }, title: "Kemilyen Language Services" },
                { position: { lat:  , lng:  }, title: "Sign with Me" },
                { position: { lat:  , lng:  }, title: "The ASL Shop" },
                { position: { lat:  , lng:  }, title: "Interpretly" },
                { position: { lat:  , lng:  }, title: "Deaf Heart Interpreting Agency" },
                { position: { lat:  , lng:  }, title: "Sign Up Interpreting Svcs, LLC" },
                { position: { lat:  , lng:  }, title: "Helen Ruiz Interpreting Services" },
                { position: { lat:  , lng:  }, title: "The Preferred Interpreting Agency" },
                { position: { lat:  , lng:  }, title: "Green Translations" },
                { position: { lat:  , lng:  }, title: "LAUSD Translations Unit" }
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
        <p>{!data ? "naw still broken :/" : data}</p>
        <div id="map" style={{ width: '640px', height: '480px' }}></div>
    </div>
    );
}