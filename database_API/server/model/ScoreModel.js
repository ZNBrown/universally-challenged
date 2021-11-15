const db = require('../dbConfig/init')

class Score {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.score = data.score;
    }

    static get all() {
        return new Promise(async (res, rej) => {
            try {

                let scoreData = await db.query(`SELECT * FROM Score`)
                let score = scoreData.rows.map(h => new Score(h))
                res(score)

            } catch (err) {
                rej(`Error fetching score, err: ${err}`)
            }

        })

    }
}


module.exports = Score