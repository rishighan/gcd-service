const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_brand_emblem_group', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_brand',
        key: 'id'
      }
    },
    brandgroup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_brand_group',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_brand_emblem_group',
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
        name: "gcd_brand_emblem_group_brand_id_4dd3b49d7f79dbe3_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "brand_id" },
          { name: "brandgroup_id" },
        ]
      },
      {
        name: "gcd_brand_emblem_group_74876276",
        using: "BTREE",
        fields: [
          { name: "brand_id" },
        ]
      },
      {
        name: "gcd_brand_emblem_group_9eac909a",
        using: "BTREE",
        fields: [
          { name: "brandgroup_id" },
        ]
      },
    ]
  });
};
