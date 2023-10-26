'use strict';

/**
 * last-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-new.last-new');
