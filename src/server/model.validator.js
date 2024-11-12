import Joi from 'joi';

const CampgroundModel = Joi.object({
	title: Joi.string().required(),
	price: Joi.number().required().min(0.01),
	description: Joi.string().required(),
	location: Joi.string().required(),
	image: Joi.string().required()
});

export { CampgroundModel };
