const path = require("path");
const express = require("express");
const router = require("./routes/router");

const app = express();

// set router nya
app.use(router)

app.get("/", (req, res) => {
    console.log("Response success")
    res.send("Response Success!")
})

// app.get("/coba", (req, res) => {
//     console.log("Response success")
//     res.send("berhasil bro")
// })



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server sedang berjalan di port: ${PORT}`));