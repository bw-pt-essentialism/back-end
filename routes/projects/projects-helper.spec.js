const db = require('../../database/dbConfig')
const Proj = require('./projects-helper')

describe('project helpers', () => {
    describe('insert', () => {
        it('adds the project to the database', async () => {
            await Proj.addProject({ name: 'george'})
            await Proj.addProject({ name: 'Honesty'})
            
            const projects = await db('projects')
            expect(projects).toHaveLength(2)
        })

        beforeEach(async () => {
            await db('projects').truncate()
        })

        it('should return the project inserted', async () => {
            let val1 = await Proj.addProject({ name: 'truth'})
            expect(val1.name).toBe('truth')

            let val2 = await Proj.addProject({ name: 'virtue'})
            expect(val2.name).toBe('virtue')
        })

        
        beforeEach(async () => {
            await db('projects').truncate()
        })
    })

    describe('delete', () => {

        it('deletes the project from the database', async () => {
            let val1 = await Proj.addProject({name: 'deborah'})            

            await Proj.delProject(val1.id)
            const valDB = await db('projects')
            expect(valDB).toHaveLength(0)
        })
        
        beforeEach(async () => {
            await db('projects').truncate()
        })
    })

    describe('update', () => {
        it('updates a project in the database', async () => {
            let val1 = await Proj.addProject({name: 'seriousness'})
            let body = {name: 'mom'}

            await Proj.updProject(val1.id, body)
            const valDB = await db('projects').first()
            expect(valDB.name).toBe('mom')
        })
        beforeEach(async () => {
            await db('projects').truncate()
        })
    })
})