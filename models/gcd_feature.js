
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_feature', {
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
    sort_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    year_created: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_created_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    feature_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_feature_type',
        key: 'id'
      }
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stddata_language',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_feature',
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
        name: "gcd_feature_modified_dc767107",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_feature_deleted_d2842928",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_feature_name_1b482a02",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "gcd_feature_sort_name_aa22b333",
        using: "BTREE",
        fields: [
          { name: "sort_name" },
        ]
      },
      {
        name: "gcd_feature_year_created_d3f06615",
        using: "BTREE",
        fields: [
          { name: "year_created" },
        ]
      },
      {
        name: "gcd_feature_feature_type_id_0bd38e4d_fk_gcd_feature_type_id",
        using: "BTREE",
        fields: [
          { name: "feature_type_id" },
        ]
      },
      {
        name: "gcd_feature_language_id_f6ca9801_fk_stddata_language_id",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
};
