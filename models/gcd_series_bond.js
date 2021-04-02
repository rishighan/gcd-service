
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_series_bond', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_series',
        key: 'id'
      }
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_series',
        key: 'id'
      }
    },
    origin_issue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    target_issue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    bond_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_series_bond_type',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_series_bond',
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
        name: "gcd_series_bond_bd654448",
        using: "BTREE",
        fields: [
          { name: "origin_id" },
        ]
      },
      {
        name: "gcd_series_bond_9358c897",
        using: "BTREE",
        fields: [
          { name: "target_id" },
        ]
      },
      {
        name: "gcd_series_bond_22a369b6",
        using: "BTREE",
        fields: [
          { name: "origin_issue_id" },
        ]
      },
      {
        name: "gcd_series_bond_b219039",
        using: "BTREE",
        fields: [
          { name: "target_issue_id" },
        ]
      },
      {
        name: "gcd_series_bond_1c107711",
        using: "BTREE",
        fields: [
          { name: "bond_type_id" },
        ]
      },
      {
        name: "gcd_series_bond_3b2a5c11",
        using: "BTREE",
        fields: [
          { name: "reserved" },
        ]
      },
    ]
  });
};
