const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_feature_logo_2_feature', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    featurelogo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_feature_logo',
        key: 'id'
      }
    },
    feature_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_feature',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_feature_logo_2_feature',
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
        name: "gcd_feature_logo_2_featu_featurelogo_id_feature_i_26489bce_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "featurelogo_id" },
          { name: "feature_id" },
        ]
      },
      {
        name: "gcd_feature_logo_2_feature_feature_id_8ec96fc1_fk_gcd_feature_id",
        using: "BTREE",
        fields: [
          { name: "feature_id" },
        ]
      },
    ]
  });
};
