const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_degree', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    degree_year: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    degree_year_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
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
      allowNull: false
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator',
        key: 'id'
      }
    },
    degree_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_degree',
        key: 'id'
      }
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_school',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_degree',
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
        name: "gcd_creator_degree_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_degree_3700153c",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_creator_degree_0e798d2a",
        using: "BTREE",
        fields: [
          { name: "degree_id" },
        ]
      },
      {
        name: "gcd_creator_degree_5fc7164b",
        using: "BTREE",
        fields: [
          { name: "school_id" },
        ]
      },
      {
        name: "gcd_creator_degree_modified_36c3bd276c240964_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
