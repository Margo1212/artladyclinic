'use strict';

/**
 * about-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about-service.about-service');
