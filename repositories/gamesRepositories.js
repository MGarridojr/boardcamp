import db from "../config/db.js";


async function getGamesRepository(){
    return db.query(`
        SELECT * FROM games`
    )
}
async function postGamesRepository(name, image, stockTotal, categoryId, pricePerDay){
    return db.query(`
        INSERT
            INTO games(
            name,
            image,
            "stockTotal",
            "categoryId",
            "pricePerDay")
        VALUES($1, $2, $3, $4, $5)`,
        [name, image, stockTotal, categoryId, pricePerDay]
    )
}

const gamesRepository = {
    getGamesRepository,
    postGamesRepository
}

export default gamesRepository;