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
    database:"roommate_finder" 
})

module.exports = db;

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(3001, () => {
    console.log(`Server listening on 3001`);
});