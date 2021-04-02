
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_story_credit', {
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
    is_credited: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_signed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    uncertain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    signed_as: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    credited_as: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    credit_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator_name_detail',
        key: 'id'
      }
    },
    credit_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_credit_type',
        key: 'id'
      }
    },
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_story',
        key: 'id'
      }
    },
    signature_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gcd_creator_signature',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_story_credit',
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
        name: "gcd_story_credit_creator_id_7c632a78_fk_gcd_creat",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_story_credit_credit_type_id_2b1eda8a_fk_gcd_credit_type_id",
        using: "BTREE",
        fields: [
          { name: "credit_type_id" },
        ]
      },
      {
        name: "gcd_story_credit_story_id_7b35c2b5_fk_gcd_story_id",
        using: "BTREE",
        fields: [
          { name: "story_id" },
        ]
      },
      {
        name: "gcd_story_credit_modified_1b831920",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_story_credit_deleted_5f31a0d2",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_story_credit_is_credited_a0f3090d",
        using: "BTREE",
        fields: [
          { name: "is_credited" },
        ]
      },
      {
        name: "gcd_story_credit_is_signed_da26e307",
        using: "BTREE",
        fields: [
          { name: "is_signed" },
        ]
      },
      {
        name: "gcd_story_credit_uncertain_1a69a71c",
        using: "BTREE",
        fields: [
          { name: "uncertain" },
        ]
      },
      {
        name: "gcd_story_credit_signature_id_0c4a25cd_fk_gcd_creat",
        using: "BTREE",
        fields: [
          { name: "signature_id" },
        ]
      },
    ]
  });
};
