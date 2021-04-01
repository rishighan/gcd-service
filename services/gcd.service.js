"use strict";

const DbMixin = require("../mixins/db.mixin");

module.exports = {
	name: "gcd",
	version: 1,
	mixins: [DbMixin("products")],
	settings: {},

	hooks: {
		before: {},

		actions: {},

		methods: {},
	},
};
