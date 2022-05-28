import joi from "joi"
const validateGameSchema = joi.object({
        name: joi.string().required(),
        image: joi.required(),
        stockTotal: joi.number().min(1).required(),
        categoryId: joi.required(),
        pricePerDay: joi.number().min(1).required()
})
export default validateGameSchema