
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_indicia_printer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    year_overall_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_overall_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_overall_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    year_overall_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    issue_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stddata_country',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_printer',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_indicia_printer',
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
        name: "gcd_indicia_printer_country_id_7721a445_fk_stddata_country_id",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "gcd_indicia_printer_parent_id_530af9b7_fk_gcd_printer_id",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "gcd_indicia_printer_modified_778425fb",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_indicia_printer_deleted_7a641d17",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_indicia_printer_name_2aca0f76",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "gcd_indicia_printer_year_began_c96ca6c5",
        using: "BTREE",
        fields: [
          { name: "year_began" },
        ]
      },
      {
        name: "gcd_indicia_printer_year_began_uncertain_0bd7f023",
        using: "BTREE",
        fields: [
          { name: "year_began_uncertain" },
        ]
      },
      {
        name: "gcd_indicia_printer_year_ended_uncertain_efe8024d",
        using: "BTREE",
        fields: [
          { name: "year_ended_uncertain" },
        ]
      },
      {
        name: "gcd_indicia_printer_year_overall_began_0ef47eac",
        using: "BTREE",
        fields: [
          { name: "year_overall_began" },
        ]
      },
      {
        name: "gcd_indicia_printer_year_overall_began_uncertain_c73e8a3a",
        using: "BTREE",
        fields: [
          { name: "year_overall_began_uncertain" },
        ]
      },
      {
        name: "gcd_indicia_printer_year_overall_ended_uncertain_1f5b498c",
        using: "BTREE",
        fields: [
          { name: "year_overall_ended_uncertain" },
        ]
      },
    ]
  });
};
