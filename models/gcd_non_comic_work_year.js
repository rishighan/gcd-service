
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_non_comic_work_year', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    work_year: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    work_year_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    non_comic_work_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator_non_comic_work',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_non_comic_work_year',
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
        name: "gcd_non_comic_work_year_3bb39492",
        using: "BTREE",
        fields: [
          { name: "non_comic_work_id" },
        ]
      },
    ]
  });
};
