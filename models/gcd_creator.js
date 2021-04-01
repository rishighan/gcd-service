const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gcd_official_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    whos_who: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    birth_country_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    birth_province: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    birth_province_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    birth_city: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    birth_city_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    death_country_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    death_province: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    death_province_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    death_city: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    death_city_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    birth_country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stddata_country',
        key: 'id'
      }
    },
    birth_date_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stddata_date',
        key: 'id'
      }
    },
    death_country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stddata_country',
        key: 'id'
      }
    },
    death_date_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stddata_date',
        key: 'id'
      }
    },
    sort_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    disambiguation: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_creator',
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
        name: "gcd_creator_1ea4c9b1",
        using: "BTREE",
        fields: [
          { name: "gcd_official_name" },
        ]
      },
      {
        name: "gcd_creator_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_84c1a583",
        using: "BTREE",
        fields: [
          { name: "birth_country_id" },
        ]
      },
      {
        name: "gcd_creator_658bab16",
        using: "BTREE",
        fields: [
          { name: "birth_date_id" },
        ]
      },
      {
        name: "gcd_creator_388fb40a",
        using: "BTREE",
        fields: [
          { name: "death_country_id" },
        ]
      },
      {
        name: "gcd_creator_d8bf1a9c",
        using: "BTREE",
        fields: [
          { name: "death_date_id" },
        ]
      },
      {
        name: "gcd_creator_modified_5920a4f3544476a0_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_creator_sort_name_80a1e4ff",
        using: "BTREE",
        fields: [
          { name: "sort_name" },
        ]
      },
      {
        name: "gcd_creator_disambiguation_21a5e71c",
        using: "BTREE",
        fields: [
          { name: "disambiguation" },
        ]
      },
    ]
  });
};
