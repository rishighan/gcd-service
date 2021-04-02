"use strict";
const Sequelize = require("sequelize");
const SequelizeAdapter = require("moleculer-db-adapter-sequelize");
const DBService = require("moleculer-db");
const op = Sequelize.Op;

const DbAdapter = new SequelizeAdapter("gcd", "root", "Titu@1588", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
	},
});
const sequelize = new Sequelize("gcd", "root", "Titu@1588", {
	host: "localhost",
	dialect: "mysql",
});
const initModels = require("../models/init-models");
const models = initModels(sequelize);

module.exports = {
	name: "gcd",
	adapter: DbAdapter,
	model: models.gcd_issue,
	mixins: [DBService],
	version: 1,
	settings: {},
	actions: {
		findIssue: {
			rest: {
				method: "GET",
				path: "/findIssue",
			},
			handler(ctx) {
				return this.adapter
					.findOne({
						where: {
							series_id: 85,
						},
					})
					.then((doc) =>
						this.transformDocuments(ctx, ctx.params, doc)
					);
			},
		},
		afterConnected() {
			this.logger.info("Connected successfully");
			return this.adapter.clear();
		},
	},

	hooks: {
		before: {},

		methods: {},
	},
};
