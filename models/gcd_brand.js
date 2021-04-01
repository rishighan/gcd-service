const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_brand', {
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
    year_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'gcd_brand',
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
        name: "year_began",
        using: "BTREE",
        fields: [
          { name: "year_began" },
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
        name: "gcd_brand_modified_5eff80882349f141_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_brand_year_overall_began_ddc19cc8",
        using: "BTREE",
        fields: [
          { name: "year_overall_began" },
        ]
      },
      {
        name: "gcd_brand_year_overall_began_uncertain_31ef576d",
        using: "BTREE",
        fields: [
          { name: "year_overall_began_uncertain" },
        ]
      },
      {
        name: "gcd_brand_year_overall_ended_uncertain_e0e3902a",
        using: "BTREE",
        fields: [
          { name: "year_overall_ended_uncertain" },
        ]
      },
    ]
  });
};
