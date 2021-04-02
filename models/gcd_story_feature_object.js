
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_story_feature_object', {
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
    tableName: 'gcd_story_feature_object',
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
        name: "gcd_story_feature_object_story_id_feature_id_e2de9a4d_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "feature_id" },
        ]
      },
      {
        name: "gcd_story_feature_object_feature_id_fea4dbf9_fk_gcd_feature_id",
        using: "BTREE",
        fields: [
          { name: "feature_id" },
        ]
      },
    ]
  });
};
