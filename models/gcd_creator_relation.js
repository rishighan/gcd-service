
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_relation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    from_creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator',
        key: 'id'
      }
    },
    relation_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_relation_type',
        key: 'id'
      }
    },
    to_creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_relation',
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
        name: "gcd_creator_relation_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_relation_1d58baf1",
        using: "BTREE",
        fields: [
          { name: "from_creator_id" },
        ]
      },
      {
        name: "gcd_creator_relation_5f290fb5",
        using: "BTREE",
        fields: [
          { name: "relation_type_id" },
        ]
      },
      {
        name: "gcd_creator_relation_6821265c",
        using: "BTREE",
        fields: [
          { name: "to_creator_id" },
        ]
      },
      {
        name: "gcd_creator_relation_modified_4c3574d61a89568e_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
