import db from "../config/db.js";


async function getGamesRepository(){
    return db.query(`
        SELECT * FROM games`
    )
}

const gamesRepository = {
    getGamesRepository
}

export default gamesRepository;