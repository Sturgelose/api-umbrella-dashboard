Meteor.methods({
  'statusCheck' : function () {

    function checkApinf () {

      // initial status object
      var status = {
        operational : false,
        message     : ""
      };

      // initial host for apinf
      var apinfHost     = "https://apinf.com";

      // response object from apinf GET request
      var apinfResponse = Meteor.http.call("GET", apinfHost);

      // checks is the status code matches 200
      if (apinfResponse.statusCode == 200) {

        // if status code is 200 changes operational state to TRUE and provides success message
        status.operational  = true;
        status.message      = "Apinf is operating normally.";
      }else{

        // if not, operational state remains false and provides different message
        status.message      = "Apinf is down for some reason. Please contact support.";
      }

      return status;
    }

    function checkApiUmbrella () {

      // initial status object
      var status = {
        operational : false,
        message     : ""
      };

      // initial host for API umbrella
      var apiUmbrellaHost     = "https://umbrella.apinf.io/";

      // response object from API Umbrella GET request
      var apiUmbrellaResponse =  Meteor.http.call("GET", apiUmbrellaHost);

      // checks is the status code matches 200
      if (apiUmbrellaResponse.statusCode == 200) {

        // if status code is 200 changes operational state to TRUE and provides success message
        status.operational  = true;
        status.message      = "API Umbrella is operating normally.";
      }else{

        // if not, operational state remains false and provides different message
        status.message      = "API Umbrella is down for some reason. Please contact support.";
      }

      // if not, operational state remains false and provides different message
      return status;
    }

    function checkES () {

      // initial status object
      var status = {
        operational : false,
        message     : ""
      };

      // initial host for elasticsearch instance
      var elasticsearchInstance = "http://apinf.com:14002/";

      // response object from elasticsearch GET request
      var elasticsearchResponse =  Meteor.http.call("GET", elasticsearchInstance);

      // checks is the status code matches 200
      if (elasticsearchResponse.statusCode == 200) {

        // if status code is 200 changes operational state to TRUE and provides success message
        status.operational  = true;
        status.message      = "Elasticsearch is operating normally.";
      }else{

        // if not, operational state remains false and provides different message
        status.message      = "Elasticsearch is down for some reason. Please contact support.";
      }

      // if not, operational state remains false and provides different message
      return status;
    }

    // statusCheck method returns object with statuses of all of the status checking functions written above
    return {
      apinf         : checkApinf(),
      elasticsearch : checkES(),
      apiUmbrella   : checkApiUmbrella()
    }
  }
});
