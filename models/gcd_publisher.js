
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_publisher', {
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
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stddata_country',
        key: 'id'
      }
    },
    year_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brand_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    indicia_publisher_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    series_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    issue_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    year_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    year_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    year_overall_began: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_overall_began_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    year_overall_ended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_overall_ended_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_publisher',
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
        name: "PubName",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "YearBegan",
        using: "BTREE",
        fields: [
          { name: "year_began" },
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
        name: "brand_count",
        using: "BTREE",
        fields: [
          { name: "brand_count" },
        ]
      },
      {
        name: "indicia_publisher_count",
        using: "BTREE",
        fields: [
          { name: "indicia_publisher_count" },
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
        name: "year_began_uncertain",
        using: "BTREE",
        fields: [
          { name: "year_began_uncertain" },
        ]
      },
      {
        name: "year_ended_uncertain",
        using: "BTREE",
        fields: [
          { name: "year_ended_uncertain" },
        ]
      },
      {
        name: "gcd_publisher_modified_4da24f236c8f04fe_uniq",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_publisher_year_overall_began_281cdf77",
        using: "BTREE",
        fields: [
          { name: "year_overall_began" },
        ]
      },
      {
        name: "gcd_publisher_year_overall_began_uncertain_7213c847",
        using: "BTREE",
        fields: [
          { name: "year_overall_began_uncertain" },
        ]
      },
      {
        name: "gcd_publisher_year_overall_ended_uncertain_e155ab76",
        using: "BTREE",
        fields: [
          { name: "year_overall_ended_uncertain" },
        ]
      },
    ]
  });
};
