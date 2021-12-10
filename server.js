const express = require('express');
const sequelize = require('./db');
const path = require('path');

const { Cast, Crew, Movie } = require('./index')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

// app.get("/now", (request, response) => {
//     const date = new Date();
//     console.log(response.baseUrl + date)
//     // console.log(response.location)
//     response.send(date);
// });

    app.get('/crew', async (req,res) => {
        const mycrew = await Crew.findAll()
        console.log(req)

        res.json(mycrew);
    })

    app.get('/cast/:id', async (req,res) => {
        const thecast = await Cast.findByPk(req.params.id)
        console.log(req)

        res.json(thecast)
    })

    // app.get('/casts/:castName', async (req,res) => {
    //     const mycast = await Cast.findOne({where: {castName: req.params.name }})
    //     console.log(req)
        
    //     res.json(mycast)
        
    // })





app.listen(3000, ()=> {
    // console.log ("app is running"); - testing
    console.log("Server listening at http://localhost:3000")
})