const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_feature_relation', {
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
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    from_feature_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_feature',
        key: 'id'
      }
    },
    relation_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_feature_relation_type',
        key: 'id'
      }
    },
    to_feature_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_feature',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_feature_relation',
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
        name: "gcd_feature_relation_from_feature_id_25e36fdf_fk_gcd_feature_id",
        using: "BTREE",
        fields: [
          { name: "from_feature_id" },
        ]
      },
      {
        name: "gcd_feature_relation_modified_896fb6c6",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_feature_relation_relation_type_id_09ba4ac7_fk_gcd_featu",
        using: "BTREE",
        fields: [
          { name: "relation_type_id" },
        ]
      },
      {
        name: "gcd_feature_relation_to_feature_id_e5a20bdf_fk_gcd_feature_id",
        using: "BTREE",
        fields: [
          { name: "to_feature_id" },
        ]
      },
    ]
  });
};
