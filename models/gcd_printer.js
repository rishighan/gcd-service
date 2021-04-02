
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_printer', {
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
    indicia_printer_count: {
      type: DataTypes.INTEGER,
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
    }
  }, {
    sequelize,
    tableName: 'gcd_printer',
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
        name: "gcd_printer_country_id_889421fa_fk_stddata_country_id",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "gcd_printer_modified_f0a0e321",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_printer_deleted_3b0b11ef",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_printer_name_97854c5f",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "gcd_printer_year_began_9471a3eb",
        using: "BTREE",
        fields: [
          { name: "year_began" },
        ]
      },
      {
        name: "gcd_printer_year_began_uncertain_0b919273",
        using: "BTREE",
        fields: [
          { name: "year_began_uncertain" },
        ]
      },
      {
        name: "gcd_printer_year_ended_uncertain_ff75a9b0",
        using: "BTREE",
        fields: [
          { name: "year_ended_uncertain" },
        ]
      },
      {
        name: "gcd_printer_year_overall_began_3ba498cd",
        using: "BTREE",
        fields: [
          { name: "year_overall_began" },
        ]
      },
      {
        name: "gcd_printer_year_overall_began_uncertain_4225255a",
        using: "BTREE",
        fields: [
          { name: "year_overall_began_uncertain" },
        ]
      },
      {
        name: "gcd_printer_year_overall_ended_uncertain_5e639616",
        using: "BTREE",
        fields: [
          { name: "year_overall_ended_uncertain" },
        ]
      },
      {
        name: "gcd_printer_indicia_printer_count_c38d8965",
        using: "BTREE",
        fields: [
          { name: "indicia_printer_count" },
        ]
      },
    ]
  });
};
