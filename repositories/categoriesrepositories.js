import db from "../config/db.js";


async function getCategoriesReporsitory(){
    return db.query(`
        SELECT * FROM categories ORDER by id`
    )
}

async function postCategoriesRepository(name){
    return db.query(`
        INSERT INTO categories (name) VALUES ($1)`,
        [name]
    )
}

const categoriesRepository = {
    getCategoriesReporsitory,
    postCategoriesRepository
}

export default categoriesRepository