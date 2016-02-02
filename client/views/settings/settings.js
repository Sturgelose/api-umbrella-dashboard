Template.settings.created = function () {
  // Subscription to feedback collection
  this.subscribe('settings');
};

Template.settings.helpers({
  formType: function () {
    if ( Settings.findOne() ) {
      // Updating existing Settings
      return 'update';
    } else {
      // Editing Settings
      return 'insert';
    }
  },
  editDoc: function(){
    return Settings.findOne();
  },
  languageSelectOptions() {
    // Get available languages (translations)
    let languages = TAPi18n.getLanguages();

    // Get short name for each language (language key)
    let languageKeys = _.keys(languages);

    // Create an array of objects for the language select menu
    let languageSelectOptions = _.map(languageKeys, function (key){
      // Create a select menu option with label/value structure
      let languageObject = {
        label: languages[key].name,
        value: key
      }

      return languageObject;
    });

    return languageSelectOptions;
  }
});

AutoForm.hooks({
  settings: {
    beginSubmit: function () {
      // Disable form elements while submitting form
      $('[data-schema-key],button').attr("disabled", "disabled");
    },
    endSubmit: function () {
      // Enable form elements after form submission
      $('[data-schema-key],button').removeAttr("disabled");
    }
  }
});

AutoForm.addHooks(['settings'], {
  onSuccess: function () {
    // Call method to update Meteor.settings
    Meteor.call('updateMeteorSettings');
    FlashMessages.sendSuccess('Settings saved.');
    // Check if we can create ApiUmbrellaWeb object
    try {
      Meteor.call("createApiUmbrellaWeb");
    }
    // otherwise show an error
    catch (error) {
      console.log(error);
    }
  }
});

FlashMessages.configure({
  // Configuration for FlashMessages.
  autoHide: true,
  hideDelay: 5000,
  autoScroll: false
});
