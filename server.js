const express = require("express")
const next = require('next')
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var cors = require("cors")
var userRoute = require("./routes/userRoutes")
var postRoute = require('./routes/postRoutes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const hostname = 'localhost'
// const port = 3000
// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    ///dotenv
    require("dotenv").config()

    //setup cors
    var corsOptions = {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
        optionsSuccessStatus: 200 // For legacy browser support
    }
    server.use(cors(corsOptions));


    ////mongoose connection
    mongoose.connect(process.env.MONGODB_URI).then(res => {
        console.log("mongoose connected successfully!");
    })

    // parse application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    server.use(bodyParser.json())

    ////routes configration
    server.use("/api", userRoute)
    server.use("/api", postRoute)


    server.get("/api/manish", (req, res) => {
        res.send("manish is here")
    })
    server.get("*", (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${process.env.PORT}`)
    })
}).catch(err => {
    console.log("there is a problem");
})