
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_issue_credit', {
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
    uncertain: {
      type: DataTypes.BOOLEAN,
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
    issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_issue',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_issue_credit',
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
        name: "gcd_issue_credit_creator_id_d23239af_fk_gcd_creat",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
      {
        name: "gcd_issue_credit_credit_type_id_85428160_fk_gcd_credit_type_id",
        using: "BTREE",
        fields: [
          { name: "credit_type_id" },
        ]
      },
      {
        name: "gcd_issue_credit_issue_id_928f51d6_fk_gcd_issue_id",
        using: "BTREE",
        fields: [
          { name: "issue_id" },
        ]
      },
      {
        name: "gcd_issue_credit_modified_92c90a4b",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "gcd_issue_credit_deleted_28f591fc",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "gcd_issue_credit_is_credited_448cd70d",
        using: "BTREE",
        fields: [
          { name: "is_credited" },
        ]
      },
      {
        name: "gcd_issue_credit_uncertain_a122bed6",
        using: "BTREE",
        fields: [
          { name: "uncertain" },
        ]
      },
    ]
  });
};
