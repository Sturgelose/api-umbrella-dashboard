Meteor.publish('apiUmbrellaUsers', function () {
//   var self = this;
//   var response = apiUmbrellaWeb.getUsers();
//
//   _.each(response.data, function (item) {
//     self.added('apiUmbrellaUsers', Ramdom.id(), item);
//   });
//
//   self.ready();

  return ApiUmbrellaUsers.find();
});