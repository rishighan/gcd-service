const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_issue_indicia_printer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    indiciaprinter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_indicia_printer',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_issue_indicia_printer',
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
        name: "gcd_issue_indicia_printe_issue_id_indiciaprinter__f9448194_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "issue_id" },
          { name: "indiciaprinter_id" },
        ]
      },
      {
        name: "gcd_issue_indicia_pr_indiciaprinter_id_c0f3b842_fk_gcd_indic",
        using: "BTREE",
        fields: [
          { name: "indiciaprinter_id" },
        ]
      },
    ]
  });
};
