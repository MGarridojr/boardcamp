import Joi from "joi";


const gamesShema = Joi.object({
    name: Joi.string().required(), 
    image: Joi.string().uri().required(), 
    stockTotal: Joi.number().required(), 
    categoryId: Joi.number().required(), 
    pricePerDay: Joi.number().required()
})

export default gamesShema