const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_art_influence', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    influence_name: {
      type: DataTypes.STRING(200),
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
    influence_link_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_creator',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_art_influence',
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
        name: "gcd_creator_art_influence_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_art_influence_3700153c",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_creator_art_influence_ea572c03",
        using: "BTREE",
        fields: [
          { name: "influence_link_id" },
        ]
      },
      {
        name: "gcd_creator_art_influence_modified_1c0f19408432804c_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
