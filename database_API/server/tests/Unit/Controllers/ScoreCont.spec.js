const scoreController = require('../../../controller/ScoreController')
const Score = require('../../../model/ScoreModel');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('Scores controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns Scores with a 200 status code', async () => {
            let testScores = ['d1', 'd2']
            jest.spyOn(Score, 'all', 'get')
                 .mockResolvedValue(testScores);
            await scoreController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testScores);
        })
    });

    describe('show', () => {
        test('it returns a Score with a 200 status code', async () => {
            let testScore = {
                id: 1, name: 'Test Score', age: 2
            }
            jest.spyOn(Score, 'findById')
                .mockResolvedValue(new Score(testScore));
                
            const mockReq = { params: { id: 1 } }
            await scoreController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Score(testScore));
        })
    });

    describe('create', () => {
        test('it returns a new Score with a 201 status code', async () => {
            let testScore = {
                id: 1, name: 'Test Score', age: 2
            }
            jest.spyOn(Score, 'create')
                .mockResolvedValue(new Score(testScore));
                
            const mockReq = { body: testScore }
            await scoreController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Score(testScore));
        })
    });

    describe('destroy', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(Score.prototype, 'del')
                .mockResolvedValue('Deleted');
            
            const mockReq = { params: { id: 1 } }
            await scoreController.del(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });
    
})