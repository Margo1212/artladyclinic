'use strict';

/**
 * about-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about-service.about-service');
