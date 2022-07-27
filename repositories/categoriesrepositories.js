import db from "../config/db.js";


async function getCategoriesReporsitory(){
    return db.query(`
        SELECT * FROM categories ORDER by id`)
}

const categoriesRepository = {
    getCategoriesReporsitory
}

export default categoriesRepository