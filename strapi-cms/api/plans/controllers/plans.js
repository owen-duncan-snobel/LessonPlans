'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.q) {
            entities = await strapi.services.plans.search(ctx.query);
        } else {
            entities = await strapi.services.plans.find(ctx.query);
        }

        return entities.map(entity => {
            const plans = sanitizeEntity(entity, {
                model: strapi.models.plans,
            });
            if (plans) {
                delete plans.created_by;
                delete plans.updated_by;
            }
            return plans;
        });
    },
};
