const express = require("express");
const axios = require("axios");

const app = express();

// serve frontend
app.use(express.static("public"));

app.get("/weather", async (req, res) => {
    const city = req.query.city;

    try {
        const response = await axios.get(`https://wttr.in/${city}?format=j1`);
        res.json(response.data);
    } catch (error) {
        res.json({ error: "City not found" });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});