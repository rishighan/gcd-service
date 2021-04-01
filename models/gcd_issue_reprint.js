const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_issue_reprint', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    target_issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'gcd_issue_reprint',
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
        name: "issue_from",
        using: "BTREE",
        fields: [
          { name: "origin_issue_id" },
        ]
      },
      {
        name: "issue_to",
        using: "BTREE",
        fields: [
          { name: "target_issue_id" },
        ]
      },
      {
        name: "reserved",
        using: "BTREE",
        fields: [
          { name: "reserved" },
        ]
      },
    ]
  });
};
