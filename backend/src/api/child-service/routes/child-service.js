'use strict';

/**
 * child-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::child-service.child-service');
