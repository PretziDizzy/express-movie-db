// const {sequelize} = require('./db')
const {Cast, Crew, Movie, sequelize} = require('./index')

describe('Movie Database', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true})


        const arrayOfCast = [
            {castName: "Zendaya", characterName: "MJ", placeOfOrigin:"California"},
            {castName: 'Emily Blunt', characterName: 'Evelyn Abbott', placeOfOrigin:'UK'},
            {castName: 'Ryan Reynolds', characterName: 'Nolan Booth', placeOfOrigin:'Canada'}
        ]

        const arrayOfCrew = [
            {crewName: "John Kra", role: "Director", workEx: 22, isOnsite: true},
            {crewName: 'Henry Gayden', role: 'Screenplay', workEx: 14, isOnsite: false,},
            {crewName: 'Dwayne Johnson', role: 'Producer', workEx: 23, isOnsite: true,}
        ]

        const arrayOfMovie = [
            {title: 'Venom', runningTime: 112, genre: 'Action', MPAA_rating: "PG-13", IMDB_rating: 6.7,},
            {title: 'Shazam', runningTime: 132, genre: 'Superhero', MPAA_rating: 'PG-13', IMDB_rating: 7.0,},
            {title: 'Red Notice', runningTime: 118, genre: 'Action', MPAA_rating: 'PG-13', IMDB_rating: 6.4,}
        ]

        await Cast.bulkCreate(arrayOfCast)
        await Crew.bulkCreate(arrayOfCrew)
        await Movie.bulkCreate(arrayOfMovie)
        
    })

    test("what's the cast's name", async() => {
        const testcast = await Cast.findOne({where: {castName: "Zendaya"}});
        expect(testcast.characterName).toBe('MJ') && expect(testcast.placeOfOrigin).toBe('California')
        })
    
    test("the crew's role", async() => {
        const testcrew = await Crew.findOne({where: {role: "Director"}});
        expect(testcrew.role).toBe('Director')
        })

    test('what genre is the movie', async() => {
        const testmovie = await Movie.findOne({where: {genre: "Action"}});
        expect(testmovie.genre).toBe('Action')
        })



    afterAll(async()=> {
        sequelize.close()
    })

})