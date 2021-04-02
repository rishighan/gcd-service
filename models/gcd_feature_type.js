
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_feature_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_feature_type',
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
        name: "gcd_feature_type_name_af6c2592",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
