const Score = require('../../../model/ScoreModel');


const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Score', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with scores on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await Score.all;
            expect(all).toHaveLength(3)
        })
    });

    describe('findById', () => {
        test('it resolves with scores on successful db query', async () => {
            let scoreData = { username: "test guy", score: 3 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ scoreData] });
            const result = await Score.findById(1);
            expect(result).toBeInstanceOf(Score)
        })
    });

    describe('create', () => {
        test('it resolves with dog on successful db query', async () => {
            let scoreData = { username: "test guy", score: 3 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...scoreData, id: 1 }] });
            const result = await Score.create(scoreData);
            expect(result).toHaveProperty('id')
        })
    });
    
})