const Joi = require('joi');

const events_list = {
    OPENED_APP: {
        description: 'App was opened',
        categoryName: 'oTHer',
        data: null
    },
    PRESS_START_CALL: {
        description: 'Start call description',
        categoryName: 'other',
        data: Joi.object().keys({
            id: Joi.number()
            .integer()
            .required(),
            blabla1: Joi.number()
            .integer()
            .required(),
        }).required()
    },
    PRESS_END_CALL: {
        description: 'End call description',
        categoryName: 'other',
        data: Joi.object().keys({
            id: Joi.number()
            .integer()
            .required(),
            recipientId: Joi.number()
            .integer()
            .required(),
            username: Joi.string()
            .max(255)
            .allow(''),
            blabla2: Joi.number()
            .integer()
            .required(),
        }).required()
    },
    PRESS_BUY: {
        description: 'Buy description',
        categoryName: 'buy',
        data: Joi.object().keys({
            id: Joi.number()
            .integer()
            .required(),
            recipientId: Joi.number()
            .integer()
            .required(),
            username: Joi.string()
            .max(255)
            .allow(''),
            lubiePlacki: Joi.number()
        }).required()
    },
    PRESS_BUY_CODE: {
        description: 'Buy code',
        categoryName: 'buy',
        data: Joi.object().keys({
            id: Joi.number()
            .integer()
            .required(),
            recipientId: Joi.number()
            .integer()
            .required(),
            username: Joi.string()
            .max(255)
            .allow(''),
            lubiePlacki3: Joi.number()
        }).required()
    },
}

module.exports = {
    events_list
};
