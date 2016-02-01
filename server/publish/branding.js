Meteor.publish('projectLogo', function() {
  // Get branding document
  let branding = Branding.findOne();

  // Get project logo ID
  let projectLogoId = branding.projectLogoId;

  if (projectLogoId) {
    // Get ProjectLogo collection object
    return BrandingFiles.find(projectLogoId);
  }
});

Meteor.publish('coverPhoto', function() {
  // Get branding document
  let branding = Branding.findOne();

  // Get project logo ID
  let coverPhotoId = branding.coverPhotoId;

  if (projectLogoId) {
    // Get ProjectLogo collection object
    return BrandingFiles.find(coverPhotoId);
  }
});

Meteor.publish('branding', function() {
  // Get Branding collection object
  return Branding.find({});
});
