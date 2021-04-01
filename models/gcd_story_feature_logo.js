const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_story_feature_logo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_story',
        key: 'id'
      }
    },
    featurelogo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_feature_logo',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_story_feature_logo',
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
        name: "gcd_story_feature_logo_story_id_featurelogo_id_5a345f8c_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "featurelogo_id" },
        ]
      },
      {
        name: "gcd_story_feature_lo_featurelogo_id_169a1ec3_fk_gcd_featu",
        using: "BTREE",
        fields: [
          { name: "featurelogo_id" },
        ]
      },
    ]
  });
};
