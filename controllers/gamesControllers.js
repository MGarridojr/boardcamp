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