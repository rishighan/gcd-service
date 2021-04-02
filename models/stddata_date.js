
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stddata_date', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    month: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    day: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    year_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    month_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    day_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stddata_date',
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
        name: "stddata_date_b2d73278",
        using: "BTREE",
        fields: [
          { name: "year" },
        ]
      },
      {
        name: "stddata_date_7abe03e0",
        using: "BTREE",
        fields: [
          { name: "month" },
        ]
      },
      {
        name: "stddata_date_ec444b56",
        using: "BTREE",
        fields: [
          { name: "day" },
        ]
      },
    ]
  });
};
