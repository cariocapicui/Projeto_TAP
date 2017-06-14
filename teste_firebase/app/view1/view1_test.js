'use strict';

describe('myApp.view1 module', function() {

  beforeEach(function() {
    module('myApp.view1');
    module('firebase');  

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDBHIdlYglMYr_ipjUD41eQXuPQrYvYvLI",
      authDomain: "healthtracker-891dc.firebaseapp.com",
      databaseURL: "https://healthtracker-891dc.firebaseio.com",
      projectId: "healthtracker-891dc",
      storageBucket: "healthtracker-891dc.appspot.com",
      messagingSenderId: "178896822258"
    };

    firebase.initializeApp(config);
  });

  describe('view1 controller', function(){
    it('should define the controller', inject(function($controller) {
      var scope = {};
      var view1Ctrl = $controller('View1Ctrl', { $scope: scope });
      expect(view1Ctrl).toBeDefined();
      expect(scope.messages.length).toEqual(0);
    }));
  });
});