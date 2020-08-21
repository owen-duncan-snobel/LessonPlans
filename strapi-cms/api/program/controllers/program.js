'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.q) {
            entities = await strapi.services.program.search(ctx.query);
        } else {
            entities = await strapi.services.program.find(ctx.query);
        }

        return entities.map(entity => {
            const programs = sanitizeEntity(entity, {
                model: strapi.models.program,
            });
            if (programs) {
                delete programs.created_by;
                delete programs.updated_by;
                delete programs.registrations;
            }
            return programs;
        });
    },
};
