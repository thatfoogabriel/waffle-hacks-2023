const express = require('express');
const app = express();
const cors  = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({ limit: '50mb' }));

const db = mysql.createConnection({
    host: "localhost",
    user: "gasoto",
    password: "1228",
    database: "map" 
})

module.exports = db;

app.get("/api", (req, res) => {
    const markerName = req.query.marker;
    const query = `SELECT * FROM map WHERE name = ?`;
    db.query(query, [markerName], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        } 
        else {
            if (results.length > 0) {
                const markerData = {
                    name: results[0].name,
                    location: results[0].location,
                    service: results[0].service,
                    hours: results[0].hours,
                    info: results[0].info,
                    contact: results[0].contact,
                    accommodations: results[0].accommodations
                };
                res.json({ data: markerData });
            } 
            else {
                res.status(404).json({ message: `${markerName} not found` });
            }
        }
    });
});

app.listen(3001, () => {
    console.log(`Server listening on port 3001`);
});