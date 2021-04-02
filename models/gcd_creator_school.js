
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_school', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    school_year_began: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    school_year_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    school_year_ended: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    school_year_ended_uncertain: {
      type: DataTypes.BOOLEAN,
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
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator',
        key: 'id'
      }
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_school',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_school',
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
        name: "gcd_creator_school_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_school_3700153c",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_creator_school_5fc7164b",
        using: "BTREE",
        fields: [
          { name: "school_id" },
        ]
      },
      {
        name: "gcd_creator_school_modified_452d6d27a108110_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
