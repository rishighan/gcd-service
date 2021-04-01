"use strict";

const SequelizeAdapter = require("../db/sequelize.adapter");
const Sequelize = require("sequelize");
const op = Sequelize.Op;
const gcdIssue = require("../models/gcd_issue");

module.exports = {
	name: "gcd",
	adapter: new SequelizeAdapter(
		"mysql://root:Titu@1588@127.0.0.1/grandcomicsdatabase"
	),
	model: gcdIssue,
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
