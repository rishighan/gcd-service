
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_non_comic_work', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publication_title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    employer_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    work_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    work_urls: {
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
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator',
        key: 'id'
      }
    },
    work_role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_non_comic_work_role',
        key: 'id'
      }
    },
    work_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_non_comic_work_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_non_comic_work',
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
        name: "gcd_creator_non_comic_work_da602f0b",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_creator_non_comic_work_3700153c",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_creator_non_comic_work_1fd7e1a2",
        using: "BTREE",
        fields: [
          { name: "work_role_id" },
        ]
      },
      {
        name: "gcd_creator_non_comic_work_333f9095",
        using: "BTREE",
        fields: [
          { name: "work_type_id" },
        ]
      },
      {
        name: "gcd_creator_non_comic_work_modified_1ea7d996ae050445_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
