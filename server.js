const path = require("path");
const express = require("express");
const router = require("./routes/routes")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
    origin: "http://localhost:8080",
};
app.use(cors(corsOptions));

// set router nya
app.use("/api", router);

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";
    res.status(err.statusCode).json({
        message: err.message,
    });
});