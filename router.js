const sequelize = require('./db');
const path = require('path');

const { Cast, Crew, Movie } = require('./index')

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

app.get('/casts/:castName', async (req,res) => {
    const mycast = await Cast.findOne({where: {castName: req.params.castName }})
    console.log(req)
    
    res.json(mycast)
    
})
