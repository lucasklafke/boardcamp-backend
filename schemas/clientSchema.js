import joi from "joi"

const clientSchema = joi.object({   
        name: joi.string().required(),
        phone: joi.string().min(10).max(11).required(),
        cpf: joi.string().required(),
        birthday: joi.date().required()
})
export default clientSchema;