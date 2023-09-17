'use strict';

/**
 * child-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::child-service.child-service');
