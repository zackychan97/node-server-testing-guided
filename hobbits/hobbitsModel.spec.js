const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', function() {
    beforeEach(async () =>{
       await db('hobbits').truncate();
    });

    describe('insert()', function() {
        it('should add the hobbit to the database', async function() {
            // call insert, passing a hobbit object
            await Hobbits.insert({ name: 'Sam' });
            await Hobbits.insert({ name: 'Gaffer' });
            await Hobbits.insert({ name: 'Frodo' });
            // then check the database directly to see if hobbit got inserted in there
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(3);           
        })
    })
})

function getFakeHobbit() {
    return {
        name: "Sam",
    };
}


