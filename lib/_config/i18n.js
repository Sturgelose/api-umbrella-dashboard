Meteor.startup(function() {
  if (Meteor.isClient) {
    // Get site settings
    let settings = Settings.findOne();

    // Check for default language option
    if (settings && settings.defaultLanguage) {
      // Set default language from settings
      TAPi18n.setLanguage(settings.defaultLanguage);
    } else {
      // Otherwise, default language is English
      TAPi18n.setLanguage('en');
    }
  }
});
