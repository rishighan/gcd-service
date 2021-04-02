
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_series_publication_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_series_publication_type',
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
        name: "gcd_series_publication_type_52094d6e",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
