import joi from "joi"

const clientSchema = joi.object({   
        name: joi.string().required(),
        phone: joi.string().min(10).max(11).required(),
        cpf: joi.string().required(),
        birthday: joi.date().pattern(/^\d{ 4}\-(0[1 - 9] | 1[012]) \-(0[1 - 9] | [12][0 - 9] | 3[01])$/)
})
export default clientSchema;