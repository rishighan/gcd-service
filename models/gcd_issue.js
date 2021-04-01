const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
	return sequelize.define("gcd_issue", {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		number: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		volume: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ""
		},
		no_volume: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		display_volume_with_number: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		series_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "gcd_series",
				key: "id"
			}
		},
		indicia_publisher_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "gcd_indicia_publisher",
				key: "id"
			}
		},
		indicia_pub_not_printed: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		brand_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "gcd_brand",
				key: "id"
			}
		},
		no_brand: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		publication_date: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		key_date: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		sort_code: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		price: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		page_count: {
			type: DataTypes.DECIMAL(10,3),
			allowNull: true
		},
		page_count_uncertain: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		indicia_frequency: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ""
		},
		no_indicia_frequency: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		editing: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		no_editing: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		created: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: "1901-01-01 00:00:00"
		},
		modified: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: "1901-01-01 00:00:00"
		},
		deleted: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		is_indexed: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		isbn: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ""
		},
		valid_isbn: {
			type: DataTypes.STRING(13),
			allowNull: false,
			defaultValue: ""
		},
		no_isbn: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		variant_of_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "gcd_issue",
				key: "id"
			}
		},
		variant_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ""
		},
		barcode: {
			type: DataTypes.STRING(38),
			allowNull: false,
			defaultValue: ""
		},
		no_barcode: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ""
		},
		no_title: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		on_sale_date: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		on_sale_date_uncertain: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: 0
		},
		rating: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		no_rating: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		volume_not_printed: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		no_indicia_printer: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		sequelize,
		tableName: "gcd_issue",
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "id" },
				]
			},
			{
				name: "series_id_sort_code",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "series_id" },
					{ name: "sort_code" },
				]
			},
			{
				name: "SeriesID",
				using: "BTREE",
				fields: [
					{ name: "series_id" },
				]
			},
			{
				name: "Key_Date",
				using: "BTREE",
				fields: [
					{ name: "key_date" },
				]
			},
			{
				name: "Issue",
				using: "BTREE",
				fields: [
					{ name: "number" },
				]
			},
			{
				name: "VolumeNum",
				using: "BTREE",
				fields: [
					{ name: "volume" },
				]
			},
			{
				name: "Modified",
				using: "BTREE",
				fields: [
					{ name: "modified" },
				]
			},
			{
				name: "no_volume",
				using: "BTREE",
				fields: [
					{ name: "no_volume" },
				]
			},
			{
				name: "display_volume_with_number",
				using: "BTREE",
				fields: [
					{ name: "display_volume_with_number" },
				]
			},
			{
				name: "indicia_publisher_id",
				using: "BTREE",
				fields: [
					{ name: "indicia_publisher_id" },
				]
			},
			{
				name: "brand_id",
				using: "BTREE",
				fields: [
					{ name: "brand_id" },
				]
			},
			{
				name: "no_editing",
				using: "BTREE",
				fields: [
					{ name: "no_editing" },
				]
			},
			{
				name: "sort_code",
				using: "BTREE",
				fields: [
					{ name: "sort_code" },
				]
			},
			{
				name: "no_brand",
				using: "BTREE",
				fields: [
					{ name: "no_brand" },
				]
			},
			{
				name: "deleted",
				using: "BTREE",
				fields: [
					{ name: "deleted" },
				]
			},
			{
				name: "is_indexed",
				using: "BTREE",
				fields: [
					{ name: "is_indexed" },
				]
			},
			{
				name: "isbn",
				using: "BTREE",
				fields: [
					{ name: "isbn" },
				]
			},
			{
				name: "valid_isbn",
				using: "BTREE",
				fields: [
					{ name: "valid_isbn" },
				]
			},
			{
				name: "no_indicia_frequency",
				using: "BTREE",
				fields: [
					{ name: "no_indicia_frequency" },
				]
			},
			{
				name: "no_isbn",
				using: "BTREE",
				fields: [
					{ name: "no_isbn" },
				]
			},
			{
				name: "title",
				using: "BTREE",
				fields: [
					{ name: "title" },
				]
			},
			{
				name: "variant_of_id",
				using: "BTREE",
				fields: [
					{ name: "variant_of_id" },
				]
			},
			{
				name: "barcode",
				using: "BTREE",
				fields: [
					{ name: "barcode" },
				]
			},
			{
				name: "on_sale_date",
				using: "BTREE",
				fields: [
					{ name: "on_sale_date" },
				]
			},
			{
				name: "no_title",
				using: "BTREE",
				fields: [
					{ name: "no_title" },
				]
			},
			{
				name: "gcd_issue_1a619ca6",
				using: "BTREE",
				fields: [
					{ name: "rating" },
				]
			},
			{
				name: "gcd_issue_ed4c6b73",
				using: "BTREE",
				fields: [
					{ name: "no_rating" },
				]
			},
		]
	});
};
