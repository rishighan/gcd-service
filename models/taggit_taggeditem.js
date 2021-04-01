const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taggit_taggeditem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'taggit_tag',
        key: 'id'
      }
    },
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'taggit_taggeditem',
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
        name: "taggit_taggeditem_3747b463",
        using: "BTREE",
        fields: [
          { name: "tag_id" },
        ]
      },
      {
        name: "taggit_taggeditem_829e37fd",
        using: "BTREE",
        fields: [
          { name: "object_id" },
        ]
      },
      {
        name: "taggit_taggeditem_e4470c6e",
        using: "BTREE",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "taggit_taggeditem_content_type_id_3c99b32018cc9d40_idx",
        using: "BTREE",
        fields: [
          { name: "content_type_id" },
          { name: "object_id" },
        ]
      },
    ]
  });
};
