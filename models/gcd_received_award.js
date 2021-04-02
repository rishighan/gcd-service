
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_received_award', {
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
    object_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    award_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    no_award_name: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    award_year: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    award_year_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    award_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_award',
        key: 'id'
      }
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_received_award',
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
        name: "gcd_received_award_award_id_a1daee53_fk_gcd_award_id",
        using: "BTREE",
        fields: [
          { name: "award_id" },
        ]
      },
      {
        name: "gcd_received_award_content_type_id_76c10020_fk_django_co",
        using: "BTREE",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "gcd_received_award_modified_dfc45335",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_received_award_deleted_db659429",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
    ]
  });
};
