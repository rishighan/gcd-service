
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_content_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app_label: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_content_type',
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
        name: "app_label",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "app_label" },
          { name: "model" },
        ]
      },
    ]
  });
};
