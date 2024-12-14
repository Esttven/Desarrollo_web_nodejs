let express = require("express");

let app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/random", (req, res) => {
    const randomNum = Math.floor(Math.random() * 100);
    res.json({ number: randomNum });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get("/client", (req, res) => {
    res.sendFile("client.html", { root: "../client" });
});