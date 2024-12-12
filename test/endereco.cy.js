const req = require('testAll');
const { getAccessToken } = require('../utils/request');
const API_URL = process.env.API_URL

describe('Addresses', () => {
    let token

    beforeAll(async ()=>{
        token = await getAccessToken('admin', 'admin')
    })

    it('(E2E) Should list addresses', async () => {
        await req(API_URL)
        .get('addresses')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then(response=>{
            expect(response.statusCode).toEqual(200)
            expect(response.body).toBeInstanceOf(Array)
        })       
    });
    
});
