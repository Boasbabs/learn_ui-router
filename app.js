var routerApp = angular.module("routerApp", ["ngAnimate", "ui.router" ]);

routerApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

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
    });
}])
