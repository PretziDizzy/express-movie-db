const {sequelize} = require('./db')
const {Cast, Crew, Movie } = require('./index')

// const seed = async() => {
//     try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }
// }
// return seed();



seedCast = [
    {
    castName: 'Emily Blunt',
    characterName: 'Evelyn Abbott',
    placeOfOrigin:'UK'
    },
    
]
seedCrew = [
    
]
const seedMovie = [
    
]


const seed = async () => {
    try {
    await sequelize.sync({force: true})
    await Cast.bulkCreate(seedCast, {validate: true})
    await Crew.bulkCreate(seedCrew, {validate: true})
    await Movie.bulkCreate(seedMovie, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
    } catch (error) {
    console.log('Something went wrong!', error)
    }
}

seed()
    .then(() => {
    console.log('Seeding success!')
})
    .catch(err => {
    console.error('Something went wrong!')
    console.error(err)
    })



