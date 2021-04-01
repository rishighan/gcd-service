"use strict";

const fs = require("fs");
const DbService	= require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = function(collection) {

	const schema = {
		mixins: [DbService],

		events: {
			
		},

		methods: {
			
		},

		async started() {
			
		}
	};



	return schema;
};
