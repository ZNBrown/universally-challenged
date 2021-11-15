const db = require('../dbConfig/init')

class Score {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.score = data.score;
    }

    //CREATE
    static create(scoreData)
    {
        return new Promise(async (res, rej) => {
            try {
                const { username, score } = scoreData;
                let insertQuery = await db.query(`INSERT INTO scores (username, score) VALUES ($1,$2) RETURNING *;`, [username, score])
                let returnScore = new Score(insertQuery.rows[0])
                res(returnScore)
            } catch (err) {
                rej(`Failed to create a score: ${err}`)
            }
        })
    }

    //READ
    static get all() {
        return new Promise(async (res, rej) => {
            try {

                let scoreData = await db.query(`SELECT * FROM scores`)
                let score = scoreData.rows.map(h => new Score(h))
                res(score)

            } catch (err) {
                rej(`Error fetching score, err: ${err}`)
            }

        })

    }
    static findById(id) {
        return new Promise(async (res, rej) => {
            try {

                let selectQuery = await db.query(`SELECT * FROM scores WHERE id = $1;`, [id])
                let score = new Score(selectQuery.rows[0])
                res(score)
            } catch (err) {
                rej(`Failed to find user:${err}`)
            }
        })
    }
}


module.exports = Score