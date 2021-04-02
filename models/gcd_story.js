
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_story', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    title_inferred: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    feature: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sequence_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    page_count: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    },
    script: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pencils: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    colors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    letters: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    editing: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    characters: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reprint_notes: {
      type: DataTypes.TEXT,
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
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    no_script: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    no_pencils: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    no_inks: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    no_colors: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    no_letters: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    no_editing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    page_count_uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_story_type',
        key: 'id'
      }
    },
    job_number: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    first_line: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gcd_story',
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
        name: "IssueID",
        using: "BTREE",
        fields: [
          { name: "issue_id" },
        ]
      },
      {
        name: "Modified",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "no_script",
        using: "BTREE",
        fields: [
          { name: "no_script" },
        ]
      },
      {
        name: "no_pencils",
        using: "BTREE",
        fields: [
          { name: "no_pencils" },
        ]
      },
      {
        name: "no_inks",
        using: "BTREE",
        fields: [
          { name: "no_inks" },
        ]
      },
      {
        name: "no_colors",
        using: "BTREE",
        fields: [
          { name: "no_colors" },
        ]
      },
      {
        name: "no_letters",
        using: "BTREE",
        fields: [
          { name: "no_letters" },
        ]
      },
      {
        name: "page_count_uncertain",
        using: "BTREE",
        fields: [
          { name: "page_count_uncertain" },
        ]
      },
      {
        name: "Pg_Cnt",
        using: "BTREE",
        fields: [
          { name: "page_count" },
        ]
      },
      {
        name: "no_editing",
        using: "BTREE",
        fields: [
          { name: "no_editing" },
        ]
      },
      {
        name: "type_id",
        using: "BTREE",
        fields: [
          { name: "type_id" },
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
        name: "title_inferred",
        using: "BTREE",
        fields: [
          { name: "title_inferred" },
        ]
      },
    ]
  });
};
