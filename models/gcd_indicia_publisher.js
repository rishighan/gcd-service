const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_indicia_publisher', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_publisher',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stddata_country',
        key: 'id'
      }
    },
    year_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_surrogate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    issue_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    year_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    year_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    year_overall_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_overall_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    year_overall_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_overall_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_indicia_publisher',
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
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "parent_id",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "country_id",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "year_began",
        using: "BTREE",
        fields: [
          { name: "year_began" },
        ]
      },
      {
        name: "is_surrogate",
        using: "BTREE",
        fields: [
          { name: "is_surrogate" },
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
        name: "year_began_uncertain",
        using: "BTREE",
        fields: [
          { name: "year_began_uncertain" },
        ]
      },
      {
        name: "year_ended_uncertain",
        using: "BTREE",
        fields: [
          { name: "year_ended_uncertain" },
        ]
      },
      {
        name: "gcd_indicia_publisher_modified_43690202d96566e2_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_indicia_publisher_year_overall_began_854f12bb",
        using: "BTREE",
        fields: [
          { name: "year_overall_began" },
        ]
      },
      {
        name: "gcd_indicia_publisher_year_overall_began_uncertain_d51c93af",
        using: "BTREE",
        fields: [
          { name: "year_overall_began_uncertain" },
        ]
      },
      {
        name: "gcd_indicia_publisher_year_overall_ended_uncertain_784b92eb",
        using: "BTREE",
        fields: [
          { name: "year_overall_ended_uncertain" },
        ]
      },
    ]
  });
};
