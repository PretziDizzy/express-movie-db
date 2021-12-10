// const {sequelize} = require('./db')
const {Cast, Crew, Movie, sequelize} = require('./index')

describe('Movie Database', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true})

        // await Cast.create
        const cast1 = [
        {
        name: 'Emily Blunt',
        characterName: 'Evelyn Abbott',
        placeOfOrigin:'UK'
        }
    ]

        await Cast.create(cast1[0])
        
    })

    test('cast has a name', async() => {
    const testCast = await Cast.findOne({where: {name: "Emily Blunt"}});
    expect (testCast.name).toBe("Emily Blunt")
    })
    
    afterAll(async()=> {
        sequelize.close()
    })

})