var DataTypes = require("sequelize").DataTypes;
var _django_content_type = require("./django_content_type");
var _gcd_award = require("./gcd_award");
var _gcd_biblio_entry = require("./gcd_biblio_entry");
var _gcd_brand = require("./gcd_brand");
var _gcd_brand_emblem_group = require("./gcd_brand_emblem_group");
var _gcd_brand_group = require("./gcd_brand_group");
var _gcd_brand_use = require("./gcd_brand_use");
var _gcd_creator = require("./gcd_creator");
var _gcd_creator_art_influence = require("./gcd_creator_art_influence");
var _gcd_creator_degree = require("./gcd_creator_degree");
var _gcd_creator_membership = require("./gcd_creator_membership");
var _gcd_creator_name_detail = require("./gcd_creator_name_detail");
var _gcd_creator_non_comic_work = require("./gcd_creator_non_comic_work");
var _gcd_creator_relation = require("./gcd_creator_relation");
var _gcd_creator_relation_creator_name = require("./gcd_creator_relation_creator_name");
var _gcd_creator_school = require("./gcd_creator_school");
var _gcd_creator_signature = require("./gcd_creator_signature");
var _gcd_credit_type = require("./gcd_credit_type");
var _gcd_degree = require("./gcd_degree");
var _gcd_feature = require("./gcd_feature");
var _gcd_feature_logo = require("./gcd_feature_logo");
var _gcd_feature_logo_2_feature = require("./gcd_feature_logo_2_feature");
var _gcd_feature_relation = require("./gcd_feature_relation");
var _gcd_feature_relation_type = require("./gcd_feature_relation_type");
var _gcd_feature_type = require("./gcd_feature_type");
var _gcd_indicia_printer = require("./gcd_indicia_printer");
var _gcd_indicia_publisher = require("./gcd_indicia_publisher");
var _gcd_issue = require("./gcd_issue");
var _gcd_issue_credit = require("./gcd_issue_credit");
var _gcd_issue_indicia_printer = require("./gcd_issue_indicia_printer");
var _gcd_issue_reprint = require("./gcd_issue_reprint");
var _gcd_membership_type = require("./gcd_membership_type");
var _gcd_name_type = require("./gcd_name_type");
var _gcd_non_comic_work_role = require("./gcd_non_comic_work_role");
var _gcd_non_comic_work_type = require("./gcd_non_comic_work_type");
var _gcd_non_comic_work_year = require("./gcd_non_comic_work_year");
var _gcd_printer = require("./gcd_printer");
var _gcd_publisher = require("./gcd_publisher");
var _gcd_received_award = require("./gcd_received_award");
var _gcd_relation_type = require("./gcd_relation_type");
var _gcd_reprint = require("./gcd_reprint");
var _gcd_reprint_from_issue = require("./gcd_reprint_from_issue");
var _gcd_reprint_to_issue = require("./gcd_reprint_to_issue");
var _gcd_school = require("./gcd_school");
var _gcd_series = require("./gcd_series");
var _gcd_series_bond = require("./gcd_series_bond");
var _gcd_series_bond_type = require("./gcd_series_bond_type");
var _gcd_series_publication_type = require("./gcd_series_publication_type");
var _gcd_story = require("./gcd_story");
var _gcd_story_credit = require("./gcd_story_credit");
var _gcd_story_feature_logo = require("./gcd_story_feature_logo");
var _gcd_story_feature_object = require("./gcd_story_feature_object");
var _gcd_story_type = require("./gcd_story_type");
var _stddata_country = require("./stddata_country");
var _stddata_date = require("./stddata_date");
var _stddata_language = require("./stddata_language");
var _stddata_script = require("./stddata_script");
var _taggit_tag = require("./taggit_tag");
var _taggit_taggeditem = require("./taggit_taggeditem");

function initModels(sequelize) {
  var django_content_type = _django_content_type(sequelize, DataTypes);
  var gcd_award = _gcd_award(sequelize, DataTypes);
  var gcd_biblio_entry = _gcd_biblio_entry(sequelize, DataTypes);
  var gcd_brand = _gcd_brand(sequelize, DataTypes);
  var gcd_brand_emblem_group = _gcd_brand_emblem_group(sequelize, DataTypes);
  var gcd_brand_group = _gcd_brand_group(sequelize, DataTypes);
  var gcd_brand_use = _gcd_brand_use(sequelize, DataTypes);
  var gcd_creator = _gcd_creator(sequelize, DataTypes);
  var gcd_creator_art_influence = _gcd_creator_art_influence(sequelize, DataTypes);
  var gcd_creator_degree = _gcd_creator_degree(sequelize, DataTypes);
  var gcd_creator_membership = _gcd_creator_membership(sequelize, DataTypes);
  var gcd_creator_name_detail = _gcd_creator_name_detail(sequelize, DataTypes);
  var gcd_creator_non_comic_work = _gcd_creator_non_comic_work(sequelize, DataTypes);
  var gcd_creator_relation = _gcd_creator_relation(sequelize, DataTypes);
  var gcd_creator_relation_creator_name = _gcd_creator_relation_creator_name(sequelize, DataTypes);
  var gcd_creator_school = _gcd_creator_school(sequelize, DataTypes);
  var gcd_creator_signature = _gcd_creator_signature(sequelize, DataTypes);
  var gcd_credit_type = _gcd_credit_type(sequelize, DataTypes);
  var gcd_degree = _gcd_degree(sequelize, DataTypes);
  var gcd_feature = _gcd_feature(sequelize, DataTypes);
  var gcd_feature_logo = _gcd_feature_logo(sequelize, DataTypes);
  var gcd_feature_logo_2_feature = _gcd_feature_logo_2_feature(sequelize, DataTypes);
  var gcd_feature_relation = _gcd_feature_relation(sequelize, DataTypes);
  var gcd_feature_relation_type = _gcd_feature_relation_type(sequelize, DataTypes);
  var gcd_feature_type = _gcd_feature_type(sequelize, DataTypes);
  var gcd_indicia_printer = _gcd_indicia_printer(sequelize, DataTypes);
  var gcd_indicia_publisher = _gcd_indicia_publisher(sequelize, DataTypes);
  var gcd_issue = _gcd_issue(sequelize, DataTypes);
  var gcd_issue_credit = _gcd_issue_credit(sequelize, DataTypes);
  var gcd_issue_indicia_printer = _gcd_issue_indicia_printer(sequelize, DataTypes);
  var gcd_issue_reprint = _gcd_issue_reprint(sequelize, DataTypes);
  var gcd_membership_type = _gcd_membership_type(sequelize, DataTypes);
  var gcd_name_type = _gcd_name_type(sequelize, DataTypes);
  var gcd_non_comic_work_role = _gcd_non_comic_work_role(sequelize, DataTypes);
  var gcd_non_comic_work_type = _gcd_non_comic_work_type(sequelize, DataTypes);
  var gcd_non_comic_work_year = _gcd_non_comic_work_year(sequelize, DataTypes);
  var gcd_printer = _gcd_printer(sequelize, DataTypes);
  var gcd_publisher = _gcd_publisher(sequelize, DataTypes);
  var gcd_received_award = _gcd_received_award(sequelize, DataTypes);
  var gcd_relation_type = _gcd_relation_type(sequelize, DataTypes);
  var gcd_reprint = _gcd_reprint(sequelize, DataTypes);
  var gcd_reprint_from_issue = _gcd_reprint_from_issue(sequelize, DataTypes);
  var gcd_reprint_to_issue = _gcd_reprint_to_issue(sequelize, DataTypes);
  var gcd_school = _gcd_school(sequelize, DataTypes);
  var gcd_series = _gcd_series(sequelize, DataTypes);
  var gcd_series_bond = _gcd_series_bond(sequelize, DataTypes);
  var gcd_series_bond_type = _gcd_series_bond_type(sequelize, DataTypes);
  var gcd_series_publication_type = _gcd_series_publication_type(sequelize, DataTypes);
  var gcd_story = _gcd_story(sequelize, DataTypes);
  var gcd_story_credit = _gcd_story_credit(sequelize, DataTypes);
  var gcd_story_feature_logo = _gcd_story_feature_logo(sequelize, DataTypes);
  var gcd_story_feature_object = _gcd_story_feature_object(sequelize, DataTypes);
  var gcd_story_type = _gcd_story_type(sequelize, DataTypes);
  var stddata_country = _stddata_country(sequelize, DataTypes);
  var stddata_date = _stddata_date(sequelize, DataTypes);
  var stddata_language = _stddata_language(sequelize, DataTypes);
  var stddata_script = _stddata_script(sequelize, DataTypes);
  var taggit_tag = _taggit_tag(sequelize, DataTypes);
  var taggit_taggeditem = _taggit_taggeditem(sequelize, DataTypes);

  gcd_received_award.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(gcd_received_award, { as: "gcd_received_awards", foreignKey: "content_type_id"});
  taggit_taggeditem.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(taggit_taggeditem, { as: "taggit_taggeditems", foreignKey: "content_type_id"});
  gcd_received_award.belongsTo(gcd_award, { as: "award", foreignKey: "award_id"});
  gcd_award.hasMany(gcd_received_award, { as: "gcd_received_awards", foreignKey: "award_id"});
  gcd_brand_emblem_group.belongsTo(gcd_brand, { as: "brand", foreignKey: "brand_id"});
  gcd_brand.hasMany(gcd_brand_emblem_group, { as: "gcd_brand_emblem_groups", foreignKey: "brand_id"});
  gcd_brand_use.belongsTo(gcd_brand, { as: "emblem", foreignKey: "emblem_id"});
  gcd_brand.hasMany(gcd_brand_use, { as: "gcd_brand_uses", foreignKey: "emblem_id"});
  gcd_issue.belongsTo(gcd_brand, { as: "brand", foreignKey: "brand_id"});
  gcd_brand.hasMany(gcd_issue, { as: "gcd_issues", foreignKey: "brand_id"});
  gcd_brand_emblem_group.belongsTo(gcd_brand_group, { as: "brandgroup", foreignKey: "brandgroup_id"});
  gcd_brand_group.hasMany(gcd_brand_emblem_group, { as: "gcd_brand_emblem_groups", foreignKey: "brandgroup_id"});
  gcd_creator_art_influence.belongsTo(gcd_creator, { as: "creator", foreignKey: "creator_id"});
  gcd_creator.hasMany(gcd_creator_art_influence, { as: "gcd_creator_art_influences", foreignKey: "creator_id"});
  gcd_creator_art_influence.belongsTo(gcd_creator, { as: "influence_link", foreignKey: "influence_link_id"});
  gcd_creator.hasMany(gcd_creator_art_influence, { as: "influence_link_gcd_creator_art_influences", foreignKey: "influence_link_id"});
  gcd_creator_degree.belongsTo(gcd_creator, { as: "creator", foreignKey: "creator_id"});
  gcd_creator.hasMany(gcd_creator_degree, { as: "gcd_creator_degrees", foreignKey: "creator_id"});
  gcd_creator_membership.belongsTo(gcd_creator, { as: "creator", foreignKey: "creator_id"});
  gcd_creator.hasMany(gcd_creator_membership, { as: "gcd_creator_memberships", foreignKey: "creator_id"});
  gcd_creator_name_detail.belongsTo(gcd_creator, { as: "creator", foreignKey: "creator_id"});
  gcd_creator.hasMany(gcd_creator_name_detail, { as: "gcd_creator_name_details", foreignKey: "creator_id"});
  gcd_creator_non_comic_work.belongsTo(gcd_creator, { as: "creator", foreignKey: "creator_id"});
  gcd_creator.hasMany(gcd_creator_non_comic_work, { as: "gcd_creator_non_comic_works", foreignKey: "creator_id"});
  gcd_creator_relation.belongsTo(gcd_creator, { as: "to_creator", foreignKey: "to_creator_id"});
  gcd_creator.hasMany(gcd_creator_relation, { as: "gcd_creator_relations", foreignKey: "to_creator_id"});
  gcd_creator_relation.belongsTo(gcd_creator, { as: "from_creator", foreignKey: "from_creator_id"});
  gcd_creator.hasMany(gcd_creator_relation, { as: "from_creator_gcd_creator_relations", foreignKey: "from_creator_id"});
  gcd_creator_school.belongsTo(gcd_creator, { as: "creator", foreignKey: "creator_id"});
  gcd_creator.hasMany(gcd_creator_school, { as: "gcd_creator_schools", foreignKey: "creator_id"});
  gcd_creator_signature.belongsTo(gcd_creator, { as: "creator", foreignKey: "creator_id"});
  gcd_creator.hasMany(gcd_creator_signature, { as: "gcd_creator_signatures", foreignKey: "creator_id"});
  gcd_creator_relation_creator_name.belongsTo(gcd_creator_name_detail, { as: "creatornamedetail", foreignKey: "creatornamedetail_id"});
  gcd_creator_name_detail.hasMany(gcd_creator_relation_creator_name, { as: "gcd_creator_relation_creator_names", foreignKey: "creatornamedetail_id"});
  gcd_issue_credit.belongsTo(gcd_creator_name_detail, { as: "creator", foreignKey: "creator_id"});
  gcd_creator_name_detail.hasMany(gcd_issue_credit, { as: "gcd_issue_credits", foreignKey: "creator_id"});
  gcd_story_credit.belongsTo(gcd_creator_name_detail, { as: "creator", foreignKey: "creator_id"});
  gcd_creator_name_detail.hasMany(gcd_story_credit, { as: "gcd_story_credits", foreignKey: "creator_id"});
  gcd_non_comic_work_year.belongsTo(gcd_creator_non_comic_work, { as: "non_comic_work", foreignKey: "non_comic_work_id"});
  gcd_creator_non_comic_work.hasMany(gcd_non_comic_work_year, { as: "gcd_non_comic_work_years", foreignKey: "non_comic_work_id"});
  gcd_creator_relation_creator_name.belongsTo(gcd_creator_relation, { as: "creatorrelation", foreignKey: "creatorrelation_id"});
  gcd_creator_relation.hasMany(gcd_creator_relation_creator_name, { as: "gcd_creator_relation_creator_names", foreignKey: "creatorrelation_id"});
  gcd_story_credit.belongsTo(gcd_creator_signature, { as: "signature", foreignKey: "signature_id"});
  gcd_creator_signature.hasMany(gcd_story_credit, { as: "gcd_story_credits", foreignKey: "signature_id"});
  gcd_issue_credit.belongsTo(gcd_credit_type, { as: "credit_type", foreignKey: "credit_type_id"});
  gcd_credit_type.hasMany(gcd_issue_credit, { as: "gcd_issue_credits", foreignKey: "credit_type_id"});
  gcd_story_credit.belongsTo(gcd_credit_type, { as: "credit_type", foreignKey: "credit_type_id"});
  gcd_credit_type.hasMany(gcd_story_credit, { as: "gcd_story_credits", foreignKey: "credit_type_id"});
  gcd_creator_degree.belongsTo(gcd_degree, { as: "degree", foreignKey: "degree_id"});
  gcd_degree.hasMany(gcd_creator_degree, { as: "gcd_creator_degrees", foreignKey: "degree_id"});
  gcd_feature_logo_2_feature.belongsTo(gcd_feature, { as: "feature", foreignKey: "feature_id"});
  gcd_feature.hasMany(gcd_feature_logo_2_feature, { as: "gcd_feature_logo_2_features", foreignKey: "feature_id"});
  gcd_feature_relation.belongsTo(gcd_feature, { as: "from_feature", foreignKey: "from_feature_id"});
  gcd_feature.hasMany(gcd_feature_relation, { as: "gcd_feature_relations", foreignKey: "from_feature_id"});
  gcd_feature_relation.belongsTo(gcd_feature, { as: "to_feature", foreignKey: "to_feature_id"});
  gcd_feature.hasMany(gcd_feature_relation, { as: "to_feature_gcd_feature_relations", foreignKey: "to_feature_id"});
  gcd_story_feature_object.belongsTo(gcd_feature, { as: "feature", foreignKey: "feature_id"});
  gcd_feature.hasMany(gcd_story_feature_object, { as: "gcd_story_feature_objects", foreignKey: "feature_id"});
  gcd_feature_logo_2_feature.belongsTo(gcd_feature_logo, { as: "featurelogo", foreignKey: "featurelogo_id"});
  gcd_feature_logo.hasMany(gcd_feature_logo_2_feature, { as: "gcd_feature_logo_2_features", foreignKey: "featurelogo_id"});
  gcd_story_feature_logo.belongsTo(gcd_feature_logo, { as: "featurelogo", foreignKey: "featurelogo_id"});
  gcd_feature_logo.hasMany(gcd_story_feature_logo, { as: "gcd_story_feature_logos", foreignKey: "featurelogo_id"});
  gcd_feature_relation.belongsTo(gcd_feature_relation_type, { as: "relation_type", foreignKey: "relation_type_id"});
  gcd_feature_relation_type.hasMany(gcd_feature_relation, { as: "gcd_feature_relations", foreignKey: "relation_type_id"});
  gcd_feature.belongsTo(gcd_feature_type, { as: "feature_type", foreignKey: "feature_type_id"});
  gcd_feature_type.hasMany(gcd_feature, { as: "gcd_features", foreignKey: "feature_type_id"});
  gcd_issue_indicia_printer.belongsTo(gcd_indicia_printer, { as: "indiciaprinter", foreignKey: "indiciaprinter_id"});
  gcd_indicia_printer.hasMany(gcd_issue_indicia_printer, { as: "gcd_issue_indicia_printers", foreignKey: "indiciaprinter_id"});
  gcd_issue.belongsTo(gcd_indicia_publisher, { as: "indicia_publisher", foreignKey: "indicia_publisher_id"});
  gcd_indicia_publisher.hasMany(gcd_issue, { as: "gcd_issues", foreignKey: "indicia_publisher_id"});
  gcd_issue.belongsTo(gcd_issue, { as: "variant_of", foreignKey: "variant_of_id"});
  gcd_issue.hasMany(gcd_issue, { as: "gcd_issues", foreignKey: "variant_of_id"});
  gcd_issue_credit.belongsTo(gcd_issue, { as: "issue", foreignKey: "issue_id"});
  gcd_issue.hasMany(gcd_issue_credit, { as: "gcd_issue_credits", foreignKey: "issue_id"});
  gcd_issue_indicia_printer.belongsTo(gcd_issue, { as: "issue", foreignKey: "issue_id"});
  gcd_issue.hasMany(gcd_issue_indicia_printer, { as: "gcd_issue_indicia_printers", foreignKey: "issue_id"});
  gcd_issue_reprint.belongsTo(gcd_issue, { as: "origin_issue", foreignKey: "origin_issue_id"});
  gcd_issue.hasMany(gcd_issue_reprint, { as: "gcd_issue_reprints", foreignKey: "origin_issue_id"});
  gcd_issue_reprint.belongsTo(gcd_issue, { as: "target_issue", foreignKey: "target_issue_id"});
  gcd_issue.hasMany(gcd_issue_reprint, { as: "target_issue_gcd_issue_reprints", foreignKey: "target_issue_id"});
  gcd_reprint_from_issue.belongsTo(gcd_issue, { as: "origin_issue", foreignKey: "origin_issue_id"});
  gcd_issue.hasMany(gcd_reprint_from_issue, { as: "gcd_reprint_from_issues", foreignKey: "origin_issue_id"});
  gcd_reprint_to_issue.belongsTo(gcd_issue, { as: "target_issue", foreignKey: "target_issue_id"});
  gcd_issue.hasMany(gcd_reprint_to_issue, { as: "gcd_reprint_to_issues", foreignKey: "target_issue_id"});
  gcd_series.belongsTo(gcd_issue, { as: "first_issue", foreignKey: "first_issue_id"});
  gcd_issue.hasMany(gcd_series, { as: "gcd_series", foreignKey: "first_issue_id"});
  gcd_series.belongsTo(gcd_issue, { as: "last_issue", foreignKey: "last_issue_id"});
  gcd_issue.hasMany(gcd_series, { as: "last_issue_gcd_series", foreignKey: "last_issue_id"});
  gcd_series_bond.belongsTo(gcd_issue, { as: "origin_issue", foreignKey: "origin_issue_id"});
  gcd_issue.hasMany(gcd_series_bond, { as: "gcd_series_bonds", foreignKey: "origin_issue_id"});
  gcd_series_bond.belongsTo(gcd_issue, { as: "target_issue", foreignKey: "target_issue_id"});
  gcd_issue.hasMany(gcd_series_bond, { as: "target_issue_gcd_series_bonds", foreignKey: "target_issue_id"});
  gcd_story.belongsTo(gcd_issue, { as: "issue", foreignKey: "issue_id"});
  gcd_issue.hasMany(gcd_story, { as: "gcd_stories", foreignKey: "issue_id"});
  gcd_creator_membership.belongsTo(gcd_membership_type, { as: "membership_type", foreignKey: "membership_type_id"});
  gcd_membership_type.hasMany(gcd_creator_membership, { as: "gcd_creator_memberships", foreignKey: "membership_type_id"});
  gcd_creator_name_detail.belongsTo(gcd_name_type, { as: "type", foreignKey: "type_id"});
  gcd_name_type.hasMany(gcd_creator_name_detail, { as: "gcd_creator_name_details", foreignKey: "type_id"});
  gcd_creator_non_comic_work.belongsTo(gcd_non_comic_work_role, { as: "work_role", foreignKey: "work_role_id"});
  gcd_non_comic_work_role.hasMany(gcd_creator_non_comic_work, { as: "gcd_creator_non_comic_works", foreignKey: "work_role_id"});
  gcd_creator_non_comic_work.belongsTo(gcd_non_comic_work_type, { as: "work_type", foreignKey: "work_type_id"});
  gcd_non_comic_work_type.hasMany(gcd_creator_non_comic_work, { as: "gcd_creator_non_comic_works", foreignKey: "work_type_id"});
  gcd_indicia_printer.belongsTo(gcd_printer, { as: "parent", foreignKey: "parent_id"});
  gcd_printer.hasMany(gcd_indicia_printer, { as: "gcd_indicia_printers", foreignKey: "parent_id"});
  gcd_brand_group.belongsTo(gcd_publisher, { as: "parent", foreignKey: "parent_id"});
  gcd_publisher.hasMany(gcd_brand_group, { as: "gcd_brand_groups", foreignKey: "parent_id"});
  gcd_brand_use.belongsTo(gcd_publisher, { as: "publisher", foreignKey: "publisher_id"});
  gcd_publisher.hasMany(gcd_brand_use, { as: "gcd_brand_uses", foreignKey: "publisher_id"});
  gcd_indicia_publisher.belongsTo(gcd_publisher, { as: "parent", foreignKey: "parent_id"});
  gcd_publisher.hasMany(gcd_indicia_publisher, { as: "gcd_indicia_publishers", foreignKey: "parent_id"});
  gcd_series.belongsTo(gcd_publisher, { as: "publisher", foreignKey: "publisher_id"});
  gcd_publisher.hasMany(gcd_series, { as: "gcd_series", foreignKey: "publisher_id"});
  gcd_creator_relation.belongsTo(gcd_relation_type, { as: "relation_type", foreignKey: "relation_type_id"});
  gcd_relation_type.hasMany(gcd_creator_relation, { as: "gcd_creator_relations", foreignKey: "relation_type_id"});
  gcd_creator_degree.belongsTo(gcd_school, { as: "school", foreignKey: "school_id"});
  gcd_school.hasMany(gcd_creator_degree, { as: "gcd_creator_degrees", foreignKey: "school_id"});
  gcd_creator_school.belongsTo(gcd_school, { as: "school", foreignKey: "school_id"});
  gcd_school.hasMany(gcd_creator_school, { as: "gcd_creator_schools", foreignKey: "school_id"});
  gcd_issue.belongsTo(gcd_series, { as: "series", foreignKey: "series_id"});
  gcd_series.hasMany(gcd_issue, { as: "gcd_issues", foreignKey: "series_id"});
  gcd_series_bond.belongsTo(gcd_series, { as: "origin", foreignKey: "origin_id"});
  gcd_series.hasMany(gcd_series_bond, { as: "gcd_series_bonds", foreignKey: "origin_id"});
  gcd_series_bond.belongsTo(gcd_series, { as: "target", foreignKey: "target_id"});
  gcd_series.hasMany(gcd_series_bond, { as: "target_gcd_series_bonds", foreignKey: "target_id"});
  gcd_series_bond.belongsTo(gcd_series_bond_type, { as: "bond_type", foreignKey: "bond_type_id"});
  gcd_series_bond_type.hasMany(gcd_series_bond, { as: "gcd_series_bonds", foreignKey: "bond_type_id"});
  gcd_series.belongsTo(gcd_series_publication_type, { as: "publication_type", foreignKey: "publication_type_id"});
  gcd_series_publication_type.hasMany(gcd_series, { as: "gcd_series", foreignKey: "publication_type_id"});
  gcd_biblio_entry.belongsTo(gcd_story, { as: "story_ptr", foreignKey: "story_ptr_id"});
  gcd_story.hasOne(gcd_biblio_entry, { as: "gcd_biblio_entry", foreignKey: "story_ptr_id"});
  gcd_reprint.belongsTo(gcd_story, { as: "origin", foreignKey: "origin_id"});
  gcd_story.hasMany(gcd_reprint, { as: "gcd_reprints", foreignKey: "origin_id"});
  gcd_reprint.belongsTo(gcd_story, { as: "target", foreignKey: "target_id"});
  gcd_story.hasMany(gcd_reprint, { as: "target_gcd_reprints", foreignKey: "target_id"});
  gcd_reprint_from_issue.belongsTo(gcd_story, { as: "target", foreignKey: "target_id"});
  gcd_story.hasMany(gcd_reprint_from_issue, { as: "gcd_reprint_from_issues", foreignKey: "target_id"});
  gcd_reprint_to_issue.belongsTo(gcd_story, { as: "origin", foreignKey: "origin_id"});
  gcd_story.hasMany(gcd_reprint_to_issue, { as: "gcd_reprint_to_issues", foreignKey: "origin_id"});
  gcd_story_credit.belongsTo(gcd_story, { as: "story", foreignKey: "story_id"});
  gcd_story.hasMany(gcd_story_credit, { as: "gcd_story_credits", foreignKey: "story_id"});
  gcd_story_feature_logo.belongsTo(gcd_story, { as: "story", foreignKey: "story_id"});
  gcd_story.hasMany(gcd_story_feature_logo, { as: "gcd_story_feature_logos", foreignKey: "story_id"});
  gcd_story_feature_object.belongsTo(gcd_story, { as: "story", foreignKey: "story_id"});
  gcd_story.hasMany(gcd_story_feature_object, { as: "gcd_story_feature_objects", foreignKey: "story_id"});
  gcd_story.belongsTo(gcd_story_type, { as: "type", foreignKey: "type_id"});
  gcd_story_type.hasMany(gcd_story, { as: "gcd_stories", foreignKey: "type_id"});
  gcd_creator.belongsTo(stddata_country, { as: "birth_country", foreignKey: "birth_country_id"});
  stddata_country.hasMany(gcd_creator, { as: "gcd_creators", foreignKey: "birth_country_id"});
  gcd_creator.belongsTo(stddata_country, { as: "death_country", foreignKey: "death_country_id"});
  stddata_country.hasMany(gcd_creator, { as: "death_country_gcd_creators", foreignKey: "death_country_id"});
  gcd_indicia_printer.belongsTo(stddata_country, { as: "country", foreignKey: "country_id"});
  stddata_country.hasMany(gcd_indicia_printer, { as: "gcd_indicia_printers", foreignKey: "country_id"});
  gcd_indicia_publisher.belongsTo(stddata_country, { as: "country", foreignKey: "country_id"});
  stddata_country.hasMany(gcd_indicia_publisher, { as: "gcd_indicia_publishers", foreignKey: "country_id"});
  gcd_printer.belongsTo(stddata_country, { as: "country", foreignKey: "country_id"});
  stddata_country.hasMany(gcd_printer, { as: "gcd_printers", foreignKey: "country_id"});
  gcd_publisher.belongsTo(stddata_country, { as: "country", foreignKey: "country_id"});
  stddata_country.hasMany(gcd_publisher, { as: "gcd_publishers", foreignKey: "country_id"});
  gcd_series.belongsTo(stddata_country, { as: "country", foreignKey: "country_id"});
  stddata_country.hasMany(gcd_series, { as: "gcd_series", foreignKey: "country_id"});
  gcd_creator.belongsTo(stddata_date, { as: "birth_date", foreignKey: "birth_date_id"});
  stddata_date.hasMany(gcd_creator, { as: "gcd_creators", foreignKey: "birth_date_id"});
  gcd_creator.belongsTo(stddata_date, { as: "death_date", foreignKey: "death_date_id"});
  stddata_date.hasMany(gcd_creator, { as: "death_date_gcd_creators", foreignKey: "death_date_id"});
  gcd_feature.belongsTo(stddata_language, { as: "language", foreignKey: "language_id"});
  stddata_language.hasMany(gcd_feature, { as: "gcd_features", foreignKey: "language_id"});
  gcd_series.belongsTo(stddata_language, { as: "language", foreignKey: "language_id"});
  stddata_language.hasMany(gcd_series, { as: "gcd_series", foreignKey: "language_id"});
  gcd_creator_name_detail.belongsTo(stddata_script, { as: "in_script", foreignKey: "in_script_id"});
  stddata_script.hasMany(gcd_creator_name_detail, { as: "gcd_creator_name_details", foreignKey: "in_script_id"});
  taggit_taggeditem.belongsTo(taggit_tag, { as: "tag", foreignKey: "tag_id"});
  taggit_tag.hasMany(taggit_taggeditem, { as: "taggit_taggeditems", foreignKey: "tag_id"});

  return {
    django_content_type,
    gcd_award,
    gcd_biblio_entry,
    gcd_brand,
    gcd_brand_emblem_group,
    gcd_brand_group,
    gcd_brand_use,
    gcd_creator,
    gcd_creator_art_influence,
    gcd_creator_degree,
    gcd_creator_membership,
    gcd_creator_name_detail,
    gcd_creator_non_comic_work,
    gcd_creator_relation,
    gcd_creator_relation_creator_name,
    gcd_creator_school,
    gcd_creator_signature,
    gcd_credit_type,
    gcd_degree,
    gcd_feature,
    gcd_feature_logo,
    gcd_feature_logo_2_feature,
    gcd_feature_relation,
    gcd_feature_relation_type,
    gcd_feature_type,
    gcd_indicia_printer,
    gcd_indicia_publisher,
    gcd_issue,
    gcd_issue_credit,
    gcd_issue_indicia_printer,
    gcd_issue_reprint,
    gcd_membership_type,
    gcd_name_type,
    gcd_non_comic_work_role,
    gcd_non_comic_work_type,
    gcd_non_comic_work_year,
    gcd_printer,
    gcd_publisher,
    gcd_received_award,
    gcd_relation_type,
    gcd_reprint,
    gcd_reprint_from_issue,
    gcd_reprint_to_issue,
    gcd_school,
    gcd_series,
    gcd_series_bond,
    gcd_series_bond_type,
    gcd_series_publication_type,
    gcd_story,
    gcd_story_credit,
    gcd_story_feature_logo,
    gcd_story_feature_object,
    gcd_story_type,
    stddata_country,
    stddata_date,
    stddata_language,
    stddata_script,
    taggit_tag,
    taggit_taggeditem,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
