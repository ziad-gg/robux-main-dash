const express = require("express")
const axios = require("axios")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/", (req, res) => {
    axios.get("https://statics.ziademad0001.repl.co/users/fetch/950871215856316437").then(e => {
        const data = e.data.sort((a, b) => b.coins - a.coins)
        const users = data.filter(item => item.coins > 0)
        res.render("home", {
            users
        })  
    })
})

app.listen(5000, () => {
    console.log("ready at http://localhost:5000/")
})