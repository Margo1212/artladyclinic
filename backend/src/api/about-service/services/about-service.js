'use strict';

/**
 * about-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-service.about-service');
