'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.q) {
            entities = await strapi.services.registration.search(ctx.query);
        } else {
            entities = await strapi.services.registration.find(ctx.query);
        }

        return entities.map(entity => {
            const registrations = sanitizeEntity(entity, {
                model: strapi.models.registration,
            });
            if (registrations) {
                delete registrations.created_by;
                delete registrations.updated_by;
            }
            return registrations;
        });
    },
};
