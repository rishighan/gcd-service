const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_membership', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    organization_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    membership_year_began: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    membership_year_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    membership_year_ended: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    membership_year_ended_uncertain: {
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
    membership_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_membership_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_membership',
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
        name: "gcd_creator_membership_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_membership_3700153c",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_creator_membership_f0ca3e55",
        using: "BTREE",
        fields: [
          { name: "membership_type_id" },
        ]
      },
      {
        name: "gcd_creator_membership_modified_37ffa94043c9f144_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
