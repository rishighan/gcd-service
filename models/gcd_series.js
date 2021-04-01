const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_series', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sort_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    format: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    year_began: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    year_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    publication_dates: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    first_issue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    last_issue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    is_current: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_publisher',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stddata_country',
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
    },
    tracking_notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    has_gallery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    issue_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1901-01-01 00:00:00"
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1901-01-01 00:00:00"
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    has_indicia_frequency: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    has_isbn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    has_barcode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    has_issue_title: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    has_volume: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_comics_publication: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dimensions: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    paper_stock: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    binding: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    publishing_format: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    has_rating: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    publication_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_series_publication_type',
        key: 'id'
      }
    },
    is_singleton: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    has_about_comics: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    has_indicia_printer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    has_publisher_code_number: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_series',
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
        name: "PubID",
        using: "BTREE",
        fields: [
          { name: "publisher_id" },
        ]
      },
      {
        name: "Bk_Name",
        using: "BTREE",
        fields: [
          { name: "name", length: 150 },
        ]
      },
      {
        name: "Yr_Began",
        using: "BTREE",
        fields: [
          { name: "year_began" },
        ]
      },
      {
        name: "HasGallery",
        using: "BTREE",
        fields: [
          { name: "has_gallery" },
        ]
      },
      {
        name: "country_id",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "language_id",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "first_issue_id",
        using: "BTREE",
        fields: [
          { name: "first_issue_id" },
        ]
      },
      {
        name: "last_issue_id",
        using: "BTREE",
        fields: [
          { name: "last_issue_id" },
        ]
      },
      {
        name: "deleted",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "is_current",
        using: "BTREE",
        fields: [
          { name: "is_current" },
        ]
      },
      {
        name: "sort_name",
        using: "BTREE",
        fields: [
          { name: "sort_name" },
        ]
      },
      {
        name: "gcd_series_49a7a4e1",
        using: "BTREE",
        fields: [
          { name: "publication_type_id" },
        ]
      },
      {
        name: "gcd_series_modified_6085f750f3ffa284_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
    ]
  });
};
