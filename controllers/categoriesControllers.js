import categoriesRepository from "../repositories/categoriesrepositories.js";


export async function getCategories(req, res){
    try{
        const categories = await categoriesRepository.getCategoriesReporsitory()
        return res.send(categories.rows)
    }
    catch (error){
        console.log(error)
        return res.sendStatus(500)
    }
}