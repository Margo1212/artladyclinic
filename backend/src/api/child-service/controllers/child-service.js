'use strict';

/**
 * child-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::child-service.child-service');
