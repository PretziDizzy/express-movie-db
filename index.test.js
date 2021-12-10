// const {sequelize} = require('./db')
const {Cast, Crew, Movie, sequelize} = require('./index')

describe('Movie Database', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true})


        const cast1 = [
            {
            castName: "Zendaya",
            characterName: "MJ",
            placeOfOrigin:"California"
            }
        ]

        const crew1 = [
            {
                crewName: "John Kra",
                role: "Director",
                workEx: 22,
                isOnsite: true
            }
        ]

        const movie1 = [
            {
            title: 'Venom',
            runningTime: 112,
            genre: 'Action',
            MPAA_rating: "PG-13",
            IMDB_rating: 6.7,
            }
    ]

        await Cast.create(cast1[0])
        await Crew.create(crew1[0])
        await Movie.create(movie1[0])
        
    })

    test("what's the cast's name", async() => {
        const testcast = await Cast.findOne({where: {castName: "Zendaya"}});
        expect(testcast.castName).toBe('Zendaya')
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