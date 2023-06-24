import { useState, useEffect } from 'react';

export default function Map() {
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch("http://localhost:3001/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return (
    <div className="App">
        <p>{!data ? "naw still broken :/" : data}</p>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aJ5uRmHJPtI2KWD6vssBdCJfDXe1VVQ&ehbc=2E312F" width="640" height="480" title='map'></iframe>
    </div>
    );
}