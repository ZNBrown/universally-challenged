const Score = require('../model/ScoreModel')

async function show(req, res) {
    try {
        let scoreId = req.params.id
        const score = await Score.findById(scoreId)
        res.status(200).json(score)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}
async function index(req, res) {
    try {
        const score = await Score.all
        res.status(200).json(score)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}

async function create(req, res) {
    try {
        const score = await Score.create(req.body)
        res.status(201).json(score)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}

async function del(req, res) {
    try {
        let scoreId = req.params.id
        const score = await Score.findById(scoreId)
        score.del()
        res.status(204).json(score)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}


async function update(req, res) {
    try {
        let scoreId = req.params.id
        console.log(req.body)
        const score = await Score.findById(scoreId)
        await score.update(req.body)
        res.status(200).end();
    } catch (err) {
        res.status(500).json({ err })
    }
}
module.exports = {index, show, create, update, del}