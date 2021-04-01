const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_name_detail', {
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
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator',
        key: 'id'
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_name_type',
        key: 'id'
      }
    },
    sort_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_official_name: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    in_script_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stddata_script',
        key: 'id'
      }
    },
    family_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    given_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_name_detail',
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
        name: "gcd_creator_name_detail_b068931c",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "gcd_creator_name_detail_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_name_detail_3700153c",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_creator_name_detail_94757cae",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
      {
        name: "gcd_creator_name_detail_modified_1bc0d6e170b913fe_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_creator_name_detail_sort_name_f7d3caa6",
        using: "BTREE",
        fields: [
          { name: "sort_name" },
        ]
      },
      {
        name: "gcd_creator_name_det_in_script_id_b7560492_fk_stddata_s",
        using: "BTREE",
        fields: [
          { name: "in_script_id" },
        ]
      },
      {
        name: "gcd_creator_name_detail_family_name_e81f34f4",
        using: "BTREE",
        fields: [
          { name: "family_name" },
        ]
      },
      {
        name: "gcd_creator_name_detail_given_name_6706c242",
        using: "BTREE",
        fields: [
          { name: "given_name" },
        ]
      },
    ]
  });
};
