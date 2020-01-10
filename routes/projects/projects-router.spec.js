const server = require('../../server.js')
const request = require('supertest')
const db = require('../../database/dbConfig.js')

describe('projects get', () => {
    it('should be status 200', async () => {
        const res = await request(server).get('/api/projects/2')
        expect(res.status).toBe(200)
    })
    it('should be json', async () => {
        const res = await request(server).get('/api/projects/2')
        expect(res.type).toBe('application/json')
    })
})

describe('project post', () => {
    it('should give status 201 for post', async () => {
        const res = await request(server)
            .post('/api/projects')
            .send({name: 'complete exercise'})
        expect(res.status).toBe(201)
    })

    beforeEach(async () => {
        await db('projects').truncate()
    })

    it('should be json', async () => {
        const res = await request(server)
            .post('/api/projects')
            .send({name: 'complete exercise'})
        expect(res.type).toBe('application/json')
    })

    it('should return object on post', async () => {
        const res = await request(server)
            .post('/api/projects')
            .send({name: 'shred'})
        expect(res.body.name).toEqual('shred')
    })

})

describe('projects delete', () => {
    it('should be status of 200', async () => {
        const create = await request(server)
            .post('/api/projects')
            .send({name: 'bulk'})

        let id = create.body.id

        const res = await request(server).delete(`/api/projects/${id}`)
        expect(res.status).toBe(200)
    })
})