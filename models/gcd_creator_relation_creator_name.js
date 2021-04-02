
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gcd_creator_relation_creator_name', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    creatorrelation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator_relation',
        key: 'id'
      }
    },
    creatornamedetail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gcd_creator_name_detail',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'gcd_creator_relation_creator_name',
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
        name: "gcd_creator_relation_cre_creatorrelation_id_creat_953af27b_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "creatorrelation_id" },
          { name: "creatornamedetail_id" },
        ]
      },
      {
        name: "gcd_creator_relation_creatornamedetail_id_4675e7fc_fk_gcd_creat",
        using: "BTREE",
        fields: [
          { name: "creatornamedetail_id" },
        ]
      },
    ]
  });
};
