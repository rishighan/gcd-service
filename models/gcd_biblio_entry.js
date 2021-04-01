const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_biblio_entry', {
    story_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gcd_story',
        key: 'id'
      }
    },
    page_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    page_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doi: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_biblio_entry',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_ptr_id" },
        ]
      },
    ]
  });
};
