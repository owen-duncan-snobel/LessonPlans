'use strict';
const slugify = require('slugify');

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            strapi.log.debug("beforeCreate")
            data.slug = slugify(data.programName, { lower: true });
        },
        async beforeUpdate(params, data) {
            strapi.log.debug("beforeUpdate")
            data.slug = slugify(data.programName, { lower: true });
        },
    },
};
