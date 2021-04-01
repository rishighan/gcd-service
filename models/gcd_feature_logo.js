const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_feature_logo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sort_name: {
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
    year_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    year_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_feature_logo',
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
        name: "gcd_feature_logo_modified_a01588f8",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_feature_logo_deleted_7fc639e5",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_feature_logo_name_fca0238c",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "gcd_feature_logo_sort_name_fc35812c",
        using: "BTREE",
        fields: [
          { name: "sort_name" },
        ]
      },
      {
        name: "gcd_feature_logo_year_began_e62b6676",
        using: "BTREE",
        fields: [
          { name: "year_began" },
        ]
      },
    ]
  });
};
