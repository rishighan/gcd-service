
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_credit_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "name"
    },
    sort_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "sort_code"
    }
  }, {
    sequelize,
    tableName: 'gcd_credit_type',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "sort_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sort_code" },
        ]
      },
    ]
  });
};
