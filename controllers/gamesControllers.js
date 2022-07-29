import gamesRepository from "../repositories/gamesRepositories.js";


export async function getGames(req, res){
    try{
        const games = await gamesRepository.getGamesRepository()
        return res.send(games.rows)
    }
    catch (error){
        console.log(error)
        return res.sendStatus(500)
    }
}

export async function postGames(req, res){
    const { name, image, stockTotal, categoryId, pricePerDay } = req.body

    try{
        await gamesRepository.postGamesRepository(name, image, stockTotal, categoryId, pricePerDay)
        return res.sendStatus(201)
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}