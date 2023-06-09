const express = require("express");
const router = express.Router();
const mysql = require('mysql')

// koneksi mysql
const connection = mysql.createConnection({
    host: '34.128.84.0',
    user: 'root',
    database: 'myplant',
    password: 'plant-my123'
})

router.get("/penyakit", (req, res) => {
    const query = "SELECT * FROM penyakit"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/penyakit/:name", (req, res) => {
    const name = req.params.name;
    const query = `SELECT * FROM penyakit WHERE name = "${name}"`
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

module.exports = router;