const express = require("express");
const cors = require("cors");

const characters = require("./characters");




const app = express()


app.use(express.json())
app.use(cors())

app.use("/characters", characters)


app.get("/", (req, res) => {
    res.send("Soy el home del ruteo")
})




app.listen(3001, () => {
    console.log("servidor escuchando al puerto 3001")
})

module.exports = app;