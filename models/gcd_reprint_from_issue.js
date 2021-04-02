
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_reprint_from_issue', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_story',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'gcd_reprint_from_issue',
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
        name: "reprint_to_issue_from",
        using: "BTREE",
        fields: [
          { name: "origin_issue_id" },
        ]
      },
      {
        name: "reprint_to_issue_to",
        using: "BTREE",
        fields: [
          { name: "target_id" },
        ]
      },
      {
        name: "reserved",
        using: "BTREE",
        fields: [
          { name: "reserved" },
        ]
      },
    ]
  });
};
