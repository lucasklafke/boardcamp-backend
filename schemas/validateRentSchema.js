import joi from "joi";
const validateRentSchema = joi.object({
  customerId: joi.number().min(1).required(),
  gameId: joi.number().min(1).required(),
  daysRented: joi.number().min(1).required()
});
export default validateRentSchema;
