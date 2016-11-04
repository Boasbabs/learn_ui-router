var routerApp = angular.module("routerApp", ["ngAnimate", "ui.router" ]);

routerApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  // ROUTE ===========================
  $urlRouterProvider.otherwise("/home");
    // HOME STATES AND NESTED VIEWS==============
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "partial-home.html"
    })
    .state("home.list",{
      url: "/list",
      templateUrl: "partial-home-list.html",
      controller: function($scope) {
        $scope.dogs = ["Dingo", "Husky", "Bulldog"];
      }
    })
    .state("home.paragraph", {
      url: "/paragraph",
      template: "<h2>I could use a drink right now.</h2>"
    })
    .state("about", {
      url: "/about",
      views: {
        // the main template will be placed here (relatively named)
        "":{templateUrl: "partial-about.html"},
        // the child views will be defined here (absolutely named)
        "columnOne@about": {template: "Look I am a column!"},

        // for column two, we'll define a separate controller
        "columnTwo@about": {
          templateUrl: "table-data.html",
          controller: "scotchController"
        }
      }
    });
}])
// THE ROUTE FOR THE FORM PAYMENT
routerApp.config(["$urlRouterProvider","$stateProvider", function($urlRouterProvider, $stateProvider) {

  // ROUTE FOR THE basic FORM
  $stateProvider
    .state("form",{
      url: "/form",
      templateUrl: "form.html",
      controller: "formController"
    })
    // nested states
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state("form.profile",{
      url: "/profile",
      templateUrl: "form-profile.html"
    })
    // url will be /form/interests
    .state("form.interests",{
      url: "/interests",
      templateUrl: "form-interests.html"
    })
    // url will be /form/payment
    .state("form.payment",{
      url: "/payment",
      templateUrl: "form-payment.html"
    });
}]);

// CONTROLLERS ===============================
// the scotchController in about state
routerApp.controller("scotchController", ["$scope", function($scope) {
  $scope.message = "test";

  $scope.scotches = [
    {
      name: "Macmillan 16",
      price: 5000
    },
    {
        name: 'Chivas Regal Royal Salute',
        price: 10000
    },
    {
        name: 'Glenfiddich 1937',
        price: 20000
    }
  ];
}]);

routerApp.controller("formController",["$scope", function($scope) {

  // an object to store data
  $scope.formData = {

  };
  // function to process the form
  $scope.processForm = function() {
    alert("Form completed!");
  }
}]);
