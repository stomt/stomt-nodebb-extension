"use strict";
var meta = module.parent.require('./meta');
var async = require('async');


var controllers = require('./lib/controllers'),

	plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/admin/plugins/stomt-feedback', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/stomt-feedback', controllers.renderAdminPage);

	callback();
};


plugin.onConfigGet = function (config, callback) {
	meta.settings.get('stomt-feedback', function(err, options) {
		if (err) {
			return callback(err);
		}
		config.stomtfeedback = options;
		callback(null, config);
	});
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/stomt-feedback',
		icon: 'fa-tint',
		name: 'stomt-feedback'
	});

	callback(null, header);
};


plugin.activate = function (id) {
	if (id === 'nodebb-plugin-stomt-feedback') {
		var defaults = [
			{ field: 'app_id', value: '' },
			{ field: 'label', value: 'Feedback' },
			{ field: 'colorText', value: '#FFFFFF' },
			{ field: 'colorHover', value: '#04729E'},
			{ field: 'position', value: 'right' },
			{ field: 'colorBackground', value: '#0091C9' }
		];

		async.each(defaults, function(optObj, next) {
			meta.settings.setOnEmpty('stomt-feedback', optObj.field, optObj.value, next);
		});
	}
	
};
module.exports = plugin;

