const db = require('../../database/dbConfig')
const Vals = require('./values-helper')

describe('value helpers', () => {
    describe('insert', () => {
        it('adds the value to the database', async () => {
            await Vals.addVal({ name: 'george'})
            await Vals.addVal({ name: 'Honesty'})
            
            const values = await db('values')
            expect(values).toHaveLength(2)
        })

        it('should return the value inserted', async () => {
            let val1 = await Vals.addVal({ name: 'truth'})
            expect(val1.name).toBe('truth')

            let val2 = await Vals.addVal({ name: 'virtue'})
            expect(val2.name).toBe('virtue')
        })

        beforeEach(async () => {
            await db('values').truncate()
        })
    })
})