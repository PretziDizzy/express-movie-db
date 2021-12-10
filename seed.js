const {sequelize} = require('./db')

// const seed = async() => {
//     try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }
// }
// return seed();

const {Cast, Crew, Movie } = require('./index')

seedCast = [
    {
    castName: 'Emily Blunt',
    characterName: 'Evelyn Abbott',
    placeOfOrigin:'UK'
    },
    {
    castName: 'Ryan Reynolds',
    characterName: 'Nolan Booth',
    placeOfOrigin:'Canada'
    }
]
seedCrew = [
    {
    crewName: 'Henry Gayden',
    role: 'Screenplay',
    workEx: 14,
    isOnsite: false,
    },
    {
    crewName: 'Dwayne Johnson',
    role: 'Producer',
    workEx: 23,
    isOnsite: true,
    }
]
const seedMovie = [
    {
        title: 'Shazam',
        runningTime: 132,
        genre: 'Superhero',
        MPAA_rating: 'PG-13',
        IMDB_rating: 7.0,
    },
    {
        title: 'Red Notice',
        runningTime: 118,
        genre: 'Action',
        MPAA_rating: 'PG-13',
        IMDB_rating: 6.4,
    }
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



