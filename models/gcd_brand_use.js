
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_brand_use', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_publisher',
        key: 'id'
      }
    },
    emblem_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_brand',
        key: 'id'
      }
    },
    year_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    year_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_brand_use',
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
        name: "gcd_brand_use_22dd9c39",
        using: "BTREE",
        fields: [
          { name: "publisher_id" },
        ]
      },
      {
        name: "gcd_brand_use_7c3d3954",
        using: "BTREE",
        fields: [
          { name: "emblem_id" },
        ]
      },
      {
        name: "gcd_brand_use_d4f3f470",
        using: "BTREE",
        fields: [
          { name: "year_began" },
        ]
      },
      {
        name: "gcd_brand_use_b5b058a2",
        using: "BTREE",
        fields: [
          { name: "year_began_uncertain" },
        ]
      },
      {
        name: "gcd_brand_use_8c53af9d",
        using: "BTREE",
        fields: [
          { name: "year_ended_uncertain" },
        ]
      },
      {
        name: "gcd_brand_use_modified_2f953692",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
